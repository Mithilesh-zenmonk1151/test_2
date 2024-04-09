const mongoose= require("mongoose");
const resultSchema= new mongoose.Schema({
    studenId:{
        type:String,
    },
    studentResponse:{
        type:String
     },
     correctResponse:{
        type:String,
        ref:"questions"

     },
    testId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"test"
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     },
     totalQuestions:{
        type:Number
     },
     numberOfWrongAnswers:{
        type:Number
     },
     numberOfCorrectAnswers:{
        type: Number
     },
     totalMark:{
        type:Number
     },
     totalMarksEarned:{
        type:Number
     },
     atemptedquestion:{
      type: String
     }
   
},{timestamps:true})
module.exports=mongoose.model("result",resultSchema);