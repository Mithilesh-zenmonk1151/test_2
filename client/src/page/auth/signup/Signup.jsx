import React, { useState } from 'react';
import "./Signup.css";
import { Box, Typography } from '@mui/material';
import { authUser } from "../../../slice/auth.slice";

import HeaderLayout from '../../../components/headerLayout/HeaderLayout';
import signupLogo from "../../../assets/signup4.jpg";
import TextFieldCompo from '../../../components/textField/TextFieldComponent';
import Buttons from '../../../components/button/Buttons';
import Checkbox from '@mui/material/Checkbox';
import { useDispatch } from 'react-redux';
import RadioGroup, { useRadioGroup } from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Radio from '@mui/material/Radio';


const Signup = () => {
    const [name,setName]=useState("");
    const [email, setEmail]=useState("");
    const [password,setPassword]= useState("");
    const[confirmPassword, setConfirmPassword]=useState("");
    const [role,setRole]=useState("");
    console.log(role,"Role")
    console.log(email);
    console.log(password);
    console.log(confirmPassword)
    console.log(name);
    const dispatch= useDispatch();
    const handleSubmit = (e) => {
        e.preventDefault();
        // if (!isValidEmail(email)) {
        //   setError("Email is invalid");
        // } else {
        //   setError(null);
        // }
        console.log("form Submitted");
        try {
          dispatch(authUser({ name,email, password,confirmPassword,role }));
          console.log("user signup");
          alert("User Registred successfuly");
        } catch (error) {
          alert(error);
          console.log(error);
        }
      };
    
    

    return (
        <Box>
            <Box>
                <HeaderLayout/>
            </Box>
            <Box sx={{
                bgcolor:"#cbd4dc",
                height:"94vh",
                display:"flex",
                justifyContent:"center"
            }}>
                <Box sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    <Box sx={{
                        display:"flex",
                        bgcolor:"white",
                        width:"1250px",
                        borderRadius:"30px",
                        height:"700px"
                    }}>
                        <img src={signupLogo} alt='signup' className='signup-logo'/>
                        <Box sx={{
                            bgcolor:"white",
                            padding:"30px"
                        }}>
                            <form onSubmit={handleSubmit}>
                                <Typography variant='h4' sx={{
                                    fontFamily:"Roboto",
                                    fontSize:"30px",
                                    fontWeight:"500"
                                }}>Create Your Free Account</Typography>
                                <Box sx={{
                                    display:"flex",
                                    flexDirection:"column",
                                    gap:"1px",
                                }}>
                                    <TextFieldCompo
                                       label="Name"
                                       placeholder="enter your name"
                                       type="text"
                                       customClasses=""
                                       value={name}
                                       name="name"

                                       setValue={setName}

                                      
                                    />

                                    <TextFieldCompo
                                        type="email"
                                        label="email"
                                        placeholder="Email"
                                        name="email"
                                        value={email}
                                        setValue={setEmail}
                                       
                                    />

                                    <TextFieldCompo
                                        type="password"
                                        placeholder="Password"
                                        name="password"
                                        value={password}
                                        label="Password"
                                        setValue={setPassword}
                                       
                                    />

                                    <TextFieldCompo
                                        type="password"
                                        placeholder="Confirm Password"
                                        name="confirmpassword"
                                        value={confirmPassword}
                                        label="ConfirmPassword"
                                        setValue={setConfirmPassword}
                                       
                                    />
                                     <select
                                        style={{
                                            margin: "10px",
                                            border: "1px solid transparent",
                                            padding: "10px",}}
                                            onChange={(e)=> setRole(e.target.value)}
                                        
                                    >
                                        <option value="Admin">Admin</option>
                                        <option value="Student">Student</option>
                                       
                                    </select> 
                                
                                </Box>
                                <Box sx={{
                                    display:"flex",
                                    textAlign:"center",
                                    alignItems:"center"
                                }}>
                                    <Checkbox
                                        aria-label='I accepted the Term and conditions'
                                        inputProps={{ 'aria-label': 'controlled' }}
                                    />
                                    <Typography>I accepted the Term and Conditions</Typography>
                                </Box>
                                <Buttons text='Create account' typographyCustomClass='type-signup' type='submit' customClasses='signup-btn'/>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default Signup;
