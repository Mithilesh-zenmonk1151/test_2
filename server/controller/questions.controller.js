const { ClientSession } = require("mongodb");
const questionsService = require("../services/question.service");
exports.addQuestions = async (req, res) => {
  try {
    console.log("add questions");
    const response = await questionsService.addQuestions(req);
    console.log(response);

    return res.status(201).json({
      message: "Questions added successfully",
      response,
    });
  } catch (error) {
    console.log(error);
  }
};
exports.getQuestions = async (req, res) => {
  try {
    console.log("get all questions")
    const response= await questionsService.getQuestions(req);
    console.log("response",response)
    return res.status(200).json({
        response
    })
  } catch (error) {
    console.log(error)
  }
};
