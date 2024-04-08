import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import Checkbox from '@mui/material/Checkbox';
import "./Login.css";
import HeaderLayout from '../../../components/headerLayout/HeaderLayout';
import loginLogo from "../../../assets/loginPic.png";
import TextFieldCompo from '../../../components/textField/TextFieldComponent';
import Buttons from '../../../components/button/Buttons';
import { loginUser } from '../../../slice/auth.slice';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    console.log(email);
    const logged = useSelector((state) => state.auth?.logged);
    const navigate= useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
          dispatch(loginUser({ email, password }));
        } catch (error) {
          alert(error);
        }
      };


     useEffect(() => {
        if (logged) {
          navigate("/home");
        }
     }, [logged, navigate]);

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
                <Box  sx={{
                    display:"flex",
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center",
                }}>
                    <Box  sx={{
                        display:"flex",
                        bgcolor:"white",
                        width:"1250px",
                        height:"600px",
                        borderRadius:"30px"

                    }}>
                        <img src={loginLogo} alt='login' className='login-logo'/>
                        <Box  sx={{
                            bgcolor:"white",
                            padding:"30px"
                        }}>
                            <Typography variant='h4' sx={{
                                fontFamily:"Roboto",
                                fontSize:"35px",
                                fontWeight:"500"
                            }}>Sign In</Typography>
                            <form onSubmit={handleSubmit} >
                                <Box sx={{
                                    display:"flex",
                                    flexDirection:"column",
                                    gap:"30px"
                                }}>
                                    <TextFieldCompo
                                        type="text"
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
                                        setValue={setPassword}
                                       
                                    />
                                </Box>

                                <Box sx={{
                                    display:"flex",
                                    flexDirection:"column",
                                    gap:"30px",
                                    mt:"30px"
                                }}>
                                    <Box sx={{
                                        display:"flex",
                                        textAlign:"center",
                                        alignItems:"center",
                                        gap:"30px",
                                    }}>
                                        <Checkbox
                                            aria-label='I accepted the Term and conditions'
                                            inputProps={{ 'aria-label': 'controlled' }}
                                        />
                                        <Typography>Remind me</Typography>
                                    </Box>
                                </Box>

                                <Buttons text='Sign In ' type='submit' typographyCustomClass='type-signup' customClasses='signup-btn'/>
                            </form>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
};

export default Login;
