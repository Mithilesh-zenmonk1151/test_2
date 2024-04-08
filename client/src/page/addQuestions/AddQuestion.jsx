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
//   import { createTests } from "../../slice/test.slice";
import { questionTest } from "../../slice/question.slice";
  import { useNavigate } from "react-router-dom";
//   import "./AddTest.css"
  
  function AddQuestion(testId) {
    const [name, setName] = useState("");
    const [correctOption, setCorrectOption] = useState("");
    const [option1, setOption1] = useState("");
    const [option2, setOption2] = useState("");
    const [option3, setOption3] = useState("");
    const [option4, setOption4] = useState("");
    const [marks, setMarks]= useState("");

   
   
    const navigate= useNavigate();
  
    const theme = useTheme();
    const dispatch = useDispatch();
    const handleOnSubmit = async (e) => {
      e.preventDefault();
      const formData = new FormData();
    //   formData.append("name", name);
    //   formData.append("hours", hours);
    //   formData.append("duration", duration);
    //   formData.append("second", second);
    //   formData.append("instructions", instructions);
    //   formData.append("totalNumberOfQuestions", totalNumberOfQuestions);
    //   formData.append("totalMarks",totalMarks);
    //   console.log("formdata", formData);
      try {
     
      dispatch(questionTest({name,correctOption,option1,option2,option3,option4,marks,testId}));
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
          }}>Add New Questions</Typography>
  
          <Box component={"form"}>
          <TextFieldCompo
            value={name}
            placeholder="enter the name of test"
            label="Name Of Question"
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
            value={correctOption}
            label="CorrectOption"
            type="text"
            placeholder="correctOption"
            setValue={setCorrectOption}
          />
          {/* <TextFieldCompo
            value={second}
            type="number"
            placeholder="second"
            setvalue={setSecond}
          /> */}
  
          <TextFieldCompo
            value={option1}
            type="text"
            label="option1"
            placeholder="option1"
            setValue={setOption1}
          />
           <TextFieldCompo
            value={option2}
            type="text"
            label="option2"
            placeholder="option2"
            setValue={setOption2}
          />
           <TextFieldCompo
            value={option3}
            type="text"
            label="option3"
            placeholder="option3"
            setValue={setOption3}
          />
           <TextFieldCompo
            value={option4}
            type="text"
            label="option4"
            placeholder="option4"
            setValue={setOption4}
          />
           <TextFieldCompo
            value={marks}
            type="text"
            label="Mark"
            placeholder="Marks"
            setValue={setMarks}
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
  export default AddQuestion;
  