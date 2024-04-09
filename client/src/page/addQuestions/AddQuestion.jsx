import { Box, Stack, Typography } from "@mui/material";
import { useState } from "react";
import * as React from "react";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@emotion/react";
import { useDispatch, useSelector } from "react-redux";
import TextFieldCompo from "../../components/textField/TextFieldComponent";
import Buttons from "../../components/button/Buttons";
//   import { createTests } from "../../slice/test.slice";
import { questionTest } from "../../slice/question.slice";
import { useNavigate } from "react-router-dom";
import TestCard from "../../components/testCard/TestCard";
//   import "./AddTest.css"

function AddQuestion() {
  const [name, setName] = useState("");
  const [correctOption, setCorrectOption] = useState("");
  const [option1, setOption1] = useState("");
  const [option2, setOption2] = useState("");
  const [option3, setOption3] = useState("");
  const [option4, setOption4] = useState("");
  const [marks, setMarks] = useState("");
  const [clickedId,setClickedId]=useState("");

  const navigate = useNavigate();
  const [isOppen, setIsOppen] = useState(false);

  const theme = useTheme();
  const dispatch = useDispatch();
  const userId= useSelector((state)=> state.auth?.user?.user?._id);
  console.log("userId", userId)

  const tests = useSelector((state) => state.test?.content?.response);
  // const testId= useSelector((state) => state.test?.content?.response?._id)
  function handleOnClick(testId) {
    console.log(`${testId} clicked`);
    setIsOppen(true);
    setClickedId(testId);
 

  }
  const testId=clickedId;
 
  console.log("iiiissssoooopppeeeeenn", isOppen);
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
      dispatch(
        questionTest({
          name,
          correctOption,
          option1,
          option2,
          option3,
          option4,
          marks,
          testId,
          userId
        })
      );
      navigate("/add-quistions");
    } catch (error) {
      alert(error);
    }
  };
  return (
    <Box>
      <Box>
        <Stack
          sx={{
            display: "flex",
            justifyContent: "center",
            textAlign: "center",
          }}
          flexDirection={"column"}
          className="Home"
        >
          <Typography variant="h4" sx={{ mr: "300px" }}>
            All Tests
          </Typography>

          {tests?.map((test) => {
            return (
              <Stack
                className="display-posts"
                sx={{
                  display: "grid",
                  mt: "6px",
                }}
              >
                <TestCard
                  name={test?.name}
                  duration={test?.duration}
                  testId={test?._id}
                  instructions={test?.instructions}
                  totalNumberOfQuestions={test?.totalNumberOfQuestions}
                  totalMarks={test?.totalMarks}
                  handleAddTestClick={() => handleOnClick(test?._id)}
                />
              </Stack>
            );
          })}
        </Stack>
      </Box>

      {isOppen && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            paddingTop: "20px",
            height: "100%",
            alignContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              width: "400px",
              fontFamily: "Poppins",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Poppins",
                fontSize: "30px",
                fontWeight: "800",
              }}
            >
              Add New Questions
            </Typography>

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

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingTop: "30px",
                  color: "white",
                }}
              >
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
      )}
    </Box>
  );
}
export default AddQuestion;
