const userModel = require("../models/user.model");
const CustomError = require("../utils/error");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const register = async (payload) => {
  try {
    const { name, email, password, confirmPassword ,role} = payload.body;
    const isExistUser = await userModel.findOne({ email });
    console.log("service page");
    if (isExistUser) {
      throw CustomError("user all ready exists", 409);
    }
    if (password !== confirmPassword) {
      throw CustomError("password and confirmPassword do not match", 400);
    }
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name: name,
      email: email,
      password: hashedPassword,
      role:role
    });
    console.log("user:-", user);
    return { user };
  } catch (error) {
    console.log("service page");
    console.log(error);
    throw error;
  }
};

const login = async (payload) => {
 try{
    const { email, password} = payload.body;
    if (!email && !password) {
      throw new CustomError("User credentials not found", 422);
    }
    const user = await userModel.findOne({ email: email });
    if (!user) {
      throw new CustomError("User doesn't exist", 404);
    }
    const isValidPassword= await bcrypt.compare(password,user.password);
    if(!isValidPassword){
        throw new CustomError("User password is wrong", 401)
    }
    if(isValidPassword){
        var token = jwt.sign(
            { email: user.email, id: user._id, role: user.role },
            process.env.JWT_SECRET,
            {
              expiresIn: "24h",
            })
    }
    if(!token){
        throw new CustomError("Token not generating", 500);
    }

    user.token=token;
    user.password=undefined;
    return{user,token}


 }
 catch(error){
    throw error;
 }
};
const getUsers=async(payload)=>{
  const { name } = payload.query;
  try {
     const keyword = payload.query.search
     ? {
          $or: [
            { firstName: { $regex: payload.query.search, $options: "i" } },
            { email: { $regex: payload.query.search, $options: "i" } },
          ],
        }
      : {};
    const users = await userModel.find(keyword).find({ _id: { $ne: payload.user._id } });
    // const users = await userModel.find({ name: { $regex: name, $options: 'i' } });
    if(!users){
      CustomError("users with this name not found",404 )
    }
    return users
  } catch (error) {
    console.error(error);
    throw error
  }
}
module.exports = { register, login,getUsers };
