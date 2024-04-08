import React from 'react';
import { Box } from '@mui/material';
// import SearchBar from '../../component/searchBar/SearchBar';
// import Calender from '../../component/calender/Calender';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Avatars from '../../component/avatar/AvatarI';
import Buttons from '../../components/button/Buttons';
import { logoutUser } from "../../slice/auth.slice";
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';


function HeaderLayout() {
    const navigate=useNavigate();
    const dispatch= useDispatch();
   
    const handleLogOut = () => {
        dispatch(logoutUser());
        navigate("/Login");
      };
      
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            width: "100%",
            bgcolor: "#ffffff",
            height: "50px",
        }}>
            <Box>
                {/* <SearchBar customPlaceHolder='Search....'/> */} 
            </Box>
            <Box sx={{
                display: "flex",
                gap: "60px"
            }}>
                {/* <Calender/>
                <NotificationsIcon height={"42px"}/>
                <Avatars/> */}
                <Buttons handleOnClick={handleLogOut}  text="Log out"/>
            </Box>
        </Box>
    );
}

export default HeaderLayout;
