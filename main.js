const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Users =require('./dataschema');
const port = 5000;

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sivaharshanfastbokz:uoazQaGUCRMUERcC@cluster0.lcmnw6s.mongodb.net/contact_app?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
}
);

app.post('/adduser',async(req,res)=>{
        const userName = req.body.userName
        const usename = new Users({
          userName:userName
        })
        try{
          await usename.save();
          res.send("inserted data")
        }catch(err){
          console.log(err);
        }
});

app.get('/getuserlist',async(req,res)=>{
  try{
    const data = await Users.find();
    res.json(data)
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
});

app.listen(port,()=>{
    console.log('server is started on port 5000')
})
