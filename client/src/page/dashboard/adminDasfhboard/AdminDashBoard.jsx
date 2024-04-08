import React from 'react'
import Buttons from '../../../components/button/Buttons'
import SidebarLayout from '../../../layout/sidebarLayout/SidebarLayout'
import HeaderLayout from '../../../layout/headerLayout/HeaderLayout'
import {  Box, Stack } from '@mui/material'
import "./AdminDashboard.css"
import DashBoardHero from "../DashboardHero/DashBoardHero"
import TextFieldComponent from '../../../components/textField/TextFieldComponent'
import { useNavigate } from "react-router-dom";
function Dashboard() {
    const navigate= useNavigate();
    const handleOnClick=async()=>{
        navigate("/add-test")

    }
    return (
        <Stack sx={{
            display:"flex",
            flexDirection:"row",
            mt:"20px",
            bgcolor:"#f6f8ff",
            height:"105vh"

        }}>
            <SidebarLayout/>
             <Box sx={{
               width:"100%"
            }}> 
            <Box sx={{
                width:"100%"
            }}>
            <HeaderLayout/>
            </Box>
            {/* <Box> */}
            {/* </Box> */}
            {/* </Box> */}
            <Box sx={{
                
                mt:"20px",
                display:"flex",
                justifyContent:"space-between",
                margin:"20px",
                padding:"25px",
                width:"90%",
                fontSize:"28px"
            }}>
                <TextFieldComponent heading='Settings' body='Manage your account settings'  customClassName='setting-manage'/>
                <Box sx={{
                    display:"flex",
                    gap:"16px"

                }}>
                    <Buttons text='Create Test' handleOnClick={handleOnClick} customClasses='save-btn' typographyCustomClass='typo-save' />
                    <Buttons text='' customClasses='cancel-btn' typographyCustomClass='typo-cancel'/>
                </Box>
            </Box>
            <Box sx={{
              

            }}>
            <DashBoardHero/>
            </Box>

            </Box>
            
        </Stack>
    )
}

export default Dashboard
