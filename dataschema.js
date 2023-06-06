
var mongoose = require('mongoose');


var UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required:true
    }
    
});

const Use = mongoose.model("users",UserSchema)
module.exports = Use