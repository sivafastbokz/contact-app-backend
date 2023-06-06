const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const Users =require('./dataschema');

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://sivaharshanfastbokz:uoazQaGUCRMUERcC@cluster0.lcmnw6s.mongodb.net/contact_app?retryWrites=true&w=majority",
{
  useNewUrlParser: true,
}
);

app.get('/',async(req,res)=>{
        const usename = new Users({name:"siva"})

        try{
          await usename.save();
          res.send("inserted data")
        }catch(err){
          console.log(err);
        }
});

const port = 7000;
app.listen(port,()=>{
    console.log('server is started on port 7000')
})
