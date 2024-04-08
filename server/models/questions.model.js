const mongoose= require("mongoose");
const questionSchema= new mongoose.Schema({
    name:{
        type:String,
        required: true
    },
    correctOption:{
        type:String
    },
    // options:{
    //     type:Array
        
    // },
    testId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"test"

    },
    option1:{
        type:String
    },

    option2:{
        type:String
    }, option3:{
        type:String
    },
    option4:{
        type:String
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     },
     marks:{
        type:Number
     },
    

  
  
   
},{timestamps:true})
module.exports=mongoose.model("question",questionSchema);