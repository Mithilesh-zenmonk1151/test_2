const { questionsModel } = require("../models");
const { testModel } = require("../models");
const {resultModel}= require("../models")
const CustomError = require("../utils/error");
exports.addQuestions = async (payload) => {
  try {
    const { testId } = payload.params;
    const { userId } = payload.body;
    const { name, correctOption, marks, option1, option2, option3, option4 } = payload.body;
    // const { } = payload.body;
    // const op = [];
    // op.push(option1, option2, option3, option4);
    const question = await questionsModel.create({
      testId: testId,
      userId: userId,
      name: name,
      correctOption: correctOption,
      marks: marks,
      option1:option1,
      option2:option2,
      option3:option3,
      option4:option4

    //   options: op,
    });
    const result = await resultModel.create({correctResponse:correctOption})
    console.log("questions", question);
    return {question,result};
  } catch (error) {
    throw error;
  }
};
exports.getQuestions = async (payload) => {
  try {
    const { testId } = payload.params;
    const questions = await questionsModel.find({ testId }).sort();
    if (!testId) {
      CustomError("test is not found", 404);
    }
    return questions;
  } catch (error) {
    throw error;
  }
};
exports.updateQuestions = async (payload) => {
  try {
    const { questionId } = payload.params;
    const { name, correctOption, marks } = payload.body;
    const { option1, option2, option3, option4 } = payload.body;
    const updated = await questionsModel.findByIdAndUpdate(
      questionId,
      {
        testId: testId,

        name: name,
        correctOption: correctOption,
        option1:option1,
        option2:option2,
        option3:option3,
        option4:option4,
        marks: marks,
       
      },
      { new: true }
    );
    return updated;
  } catch (error) {
    throw error;
  }
};
exports.deleteQuestions=async(payload)=>{
    const { id } = payload.params;
    try {
      const deleted = await postsModel.findByIdAndDelete(id);
      return deleted;
    } catch (error) {
      console.log(error);
      throw error;
    }

}

