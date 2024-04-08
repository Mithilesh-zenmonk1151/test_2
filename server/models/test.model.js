const mongoose= require("mongoose");
const testSchema= new mongoose.Schema({
    name:{
        type:String,
       
    },
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
     },
    duration: {
        type: String
        // type: Object,
        // properties: {
        //   hours: {
        //     type: Number,
        //   },
        //   minutes: {
        //     type: Number,
        //   },
        //   seconds: {
        //     type: Number,
        //   }
        // },
      },
      instructions:{
        type:String
      },
      totalNumberOfQuestions:{
        type:Number,
      },
      totalMarks:{
        type:Number,
      }

  
   
},{timestamps:true})
module.exports=mongoose.model("test",testSchema);