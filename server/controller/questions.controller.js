const { ClientSession } = require("mongodb");
const  questionsService= require("../services/question.service");
exports.addQuestions=async(req,res)=>{
    try{
        console.log("add questions")
        const response= await questionsService.addQuestions(req);
        console.log(response)

        return res.status(201).json({
            message:"Questions added successfully",
            response
        })

    }
    catch(error){
        console.log(error);

    }
}

