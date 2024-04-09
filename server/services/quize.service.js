const resultModel = require("../models");
const questionsModel = require("../models");
exports.createQuize = async (payload) => {
  const { studentResponse, studenId,testId  } = payload.body;
  const quizeData = await commentModel.find({ testId }).sort();
  const questionId=payload.params;
  const checkIsWrite= await questionsModel.find({questionId});
  const correctAnswer= checkIsWrite.correctOption;
  var totalMarks=0;
  if(studentResponse===correctAnswer){
    const totalMarks= totalMarks+checkIsWrite.marks


    
  }
  const quize= await resultModel.create({
    

  })

};
exports.getResult=async(payload)=>{

}

