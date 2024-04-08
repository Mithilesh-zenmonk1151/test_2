import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import Buttons from '../button/Buttons';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useNavigate } from 'react-router-dom';

const HeaderLayout = () => {
    const navigate = useNavigate();
    const [isLoginPage, setIsLoginPage] = useState(false);
    const buttonText = isLoginPage ? 'Go to Signup' : 'Go to Login';

    // if(isLoginPage){
    //     setButtonText("Go to Signup")

    // }
    // else{
    //     setButtonText("Go to Login")
    // }

    const handleTogglePage = () => {
        const targetPath = isLoginPage ? '/signup' : '/login';
        setIsLoginPage((prevIsLoginPage) => !prevIsLoginPage);
        navigate(targetPath);
    };


    return (
        <Box> 
            <Box sx={{
                display:"flex",
                justifyContent:"space-between",
                textAlign:"center"
            }}>
                <Box sx={{
                    display:"flex",
                    justifyContent:"space-around",
                    width:"42%",
                    textAlign:"center",
                    alignItems:"center"
                }}>
                    <Typography>Dashboard</Typography>
                    <Typography>Team</Typography>
                    <Typography>Projects</Typography>
                    <Typography>Calender</Typography>
                </Box>
                <Box sx={{
                    marginTop:"10px"
                }}>
                    <Buttons text={buttonText} handleOnClick={handleTogglePage}  src={<ExitToAppIcon/>}/>
                </Box>
            </Box>
            <Box sx={{
                height:"1px",
                bgcolor:"#9faebd",
                width:"100%"
            }}>

            </Box>
        </Box>
    );
}

export default HeaderLayout;
