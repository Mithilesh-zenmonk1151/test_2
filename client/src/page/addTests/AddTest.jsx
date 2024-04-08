import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { useDispatch } from "react-redux";
import TextFieldCompo from "../../components/textField/TextFieldComponent";
import Buttons from "../../components/button/Buttons";
import { createTests } from "../../slice/test.slice";
import { useNavigate } from "react-router-dom";
import "./AddTest.css"

function AddTest() {
  const [name, setName] = useState("");
  const [hours, setHours] = useState("");
  const [duration, setDuration] = useState("");
  const [second, setSecond] = useState("");
  const [instructions, setInstructions] = useState("");
  const [totalNumberOfQuestions, setTotalNumberOfQuestions] = useState("");
  const [totalMarks, setTotalMarks] = useState("");
  console.log("name",name)
  const navigate= useNavigate();

  const theme = useTheme();
  const dispatch = useDispatch();
  const handleOnSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", name);
    formData.append("hours", hours);
    formData.append("duration", duration);
    formData.append("second", second);
    formData.append("instructions", instructions);
    formData.append("totalNumberOfQuestions", totalNumberOfQuestions);
    formData.append("totalMarks",totalMarks);
    console.log("formdata", formData);
    try {
   
    dispatch(createTests({name,duration,instructions,totalNumberOfQuestions,totalMarks}));
    navigate("/add-quistions")
    
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Box sx={{
        display:"flex",
        flexDirection:'column',
        justifyContent:"center",
        alignItems:"center",
        paddingTop:"20px",
        height:"100%",
        alignContent:"center"
    }}>
        <Box  sx={{
            display:"flex",
            flexDirection:"column",
            width:"400px",
            fontFamily:"Poppins"
        }}>
        <Typography sx={{
            fontFamily:"Poppins",
            fontSize:"30px",
            fontWeight:"800"
        }}>Add New Test</Typography>

        <Box component={"form"}>
        <TextFieldCompo
          value={name}
          placeholder="enter the name of test"
          label="Name Of Test"
          type="text"
          setValue={setName}
        />
        {/* <TextFieldCompo
          value={hours}
          type="number"
          placeholder="hour"
          setValue={setHours}
        /> */}
        <TextFieldCompo
          value={duration}
          label="Duration"
          type="time"
          placeholder="minutes"
          setValue={setDuration}
        />
        {/* <TextFieldCompo
          value={second}
          type="number"
          placeholder="second"
          setvalue={setSecond}
        /> */}

        <TextFieldCompo
          value={instructions}
          type="text"
          label="Instructions"
          placeholder="indtructions"
          setValue={setInstructions}
        />
        <TextFieldCompo
          value={totalNumberOfQuestions}
          type="number"
          label="Total Number Of questions"
          placeholder="number of questions"
          setValue={setTotalNumberOfQuestions}
        />
        <TextFieldCompo
          value={totalMarks}
          placeholder="total marks"
          type="number"
          label="Total Marks"
          setValue={setTotalMarks}
        />
        <Box sx={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            paddingTop:"30px",
            color:"white"
        }}>
        <Buttons
          type="submit"
          text="Post Test"
          handleOnClick={handleOnSubmit}
          customClasses="add-testBtn"


        />
        </Box>
      </Box>
        </Box>

     
    </Box>
  );
}
export default AddTest;
