const { testModel } = require("../models");
const { userModel } = require("../models");
const CustomError = require("../utils/error");
const createTest = async (payload) => {
  try {
    const { name, instructions, totalNumberOfQuestions, totalMarks, duration } =
      payload.body;
    const { userId } = payload.params;
    // const isUserExists=await userModel.findById({userId});
    // if(!isUserExists){
    //     CustomError("user not exist ", 404)
    // }
    // var { hours,minutes,seconds } = payload.body.duration;
    // {hours,minutes,seconds}
    const newTest = await testModel.create({
      name: name,
      duration: duration,
      userId: userId,
      instructions: instructions,
      totalNumberOfQuestions: totalNumberOfQuestions,
      totalMarks: totalMarks,
    });
    console.log(newTest);
    return newTest;
  } catch (error) {
    throw error;
  }
};
const updateTest = async (payload) => {
  try {
    const { testId } = payload.params;
    if (!testId) {
      CustomError("test not found", 404);
    }
    const { name, instructions, totalNumberOfQuestions, totalMarks } =
      payload.body;
    var { hours, minutes, seconds } = payload.body.duration;
    const updatedTest = await testModel.findByIdAndUpdate(
      testId,
      {
        name: name,
        duration: { hours, minutes, seconds },
        userId: userId,
        instructions: instructions,
        totalNumberOfQuestions: totalNumberOfQuestions,
        totalMarks: totalMarks,
      },
      { new: true }
    );
    return updatedTest;
  } catch (error) {
    throw error;
  }
};
const getTest = async (payload) => {
  try {
    const { userId } = payload.params;
    console.log(userId);
    const posts = await testModel.find().sort({ createdAt: -1 });
    console.log("posts: ", posts);
    // console.log(posts);
    return posts;
  } catch (error) {
    console.log(error);
    throw error;
  }
};
module.exports = { createTest, updateTest, getTest };
