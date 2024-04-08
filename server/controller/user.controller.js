const  userService= require("../services/user.service");
exports.register=async(req,res)=>{
    try {
        const response = await userService.register(req);
        return res.status(200).json({
          message: "Signup successfull",
          user: response,
        });
      } catch (error) {
        console.log(error);
        if(error.code===400){
            console.log("password and confirm password do not matched")
        }
      }
}


exports.login = async (req, res) => {
    try {
        console.log("Login controller");
        const response = await userService.login(req);
        res.status(200).json({
            user:response,
            message: "user logged in successfully",
          
            
        });

    } catch (error) {
        const statusCode = error?.code || 500; // Default to 500 if error.code is undefined
        res.status(statusCode).json({ message: error?.message });
    }
};
exports.getUsers=async(req,res)=>{
    try{
        const response= await userService.getUsers(req);
        res.status(200).json({response
            
        })

    }
    catch(error){
        console.log(error);
        res.status(404).json({
          success: false,
          message: error.message,
        });

    }
}
