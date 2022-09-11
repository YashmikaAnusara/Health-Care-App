const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    
    Name:{
        type:String,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    
})
const Data = mongoose.model("users", userSchema);
module.exports = Data;