const mongoose= require("mongoose");
const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    role:{
      type:String,
      enum:["Student","Admin"]

    },
    additionalDetails: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "_id",
      },
      position: {
        type: String,
      },
      token: {
        type: String,
      }

},{timestamps:true})
module.exports=mongoose.model("user",userSchema);