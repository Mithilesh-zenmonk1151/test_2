const  testService= require("../services/test.service");
exports.createTest=async(req,res)=>{
    try{
        const response= await testService.createTest(req);
        return res.status(201).json({response})

    }
    catch(error){
        console.log(error)
    }
}
exports.getTest=async(req,res)=>{
    try{
        const response= await testService.getTest(req);
        return res.status(200).json({response})

    }
    catch(error){
        throw error;

    }
}
exports.updateTest=async(req,res)=>{
    try{
        const response= await testService.updateTest(req);
        return res.status(200).json({response})

    }
    catch(error){
        throw error;


    }
}