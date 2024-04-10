import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../slice/test.slice";
// import DialogBox from "../dialogBox/DialogBox";
import { useNavigate } from "react-router";
import TestCard from "../../components/testCard/TestCard";
import Typography from "@mui/material/Typography";
import { getQuestions } from "../../slice/question.slice";
import QuestionCard from "../../components/questionCard/QuestionCard";
import Buttons from "../../components/button/Buttons";

const Tests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [startId, setStartId] = useState("");
  const [quizValue,setQuizValue]=useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
  //   const toggle = (e) => {
  //     setIsOpen(true);
  //   };
  function handleOnClick(testId) {
    setStartId(testId);
    console.log("questtiiooonnsnasnsad", testId);

    dispatch(getQuestions(testId));
  }

  function handleQuizeSubmit(){
    console.log("form submited")
  }

  const tests = useSelector((state) => state.test?.content?.response);
  console.log("test", tests);
  const loading = useSelector((state) => state.test?.content?.isLoading);
  const error = useSelector((state) => state.test?.content?.error);
  const quest = useSelector(
    (state) => state.question?.content?.res?.data?.response
  );
  const handleOnRadioChange=(e)=>{
    setQuizValue(e.target.value);
  }
console.log("QUIZEdf",quizValue)

  console.log("empty", tests);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }

  console.log("questionsssssss", quest);

  // function handleOnClick(testId) {
  //   setStartId(testId);

  // }

  console.log("sttttaaaaaarrrt", startId);
  return (
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
        All Tests{" "}
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

     <Stack>
     {quest?.map((question) => {
        return (
          <Stack sx={{
            
            display:"flex",
            justifyContent:"center",
             

          }}>
            <QuestionCard
              name={question.name}
              option1={question.option1}
              option2={question.option2}
              option3={question.option3}
              option4={question.option4}
              marks={question.marks}
              value={quizValue}
              handleOnRadioChange={  handleOnRadioChange}


            />
          </Stack>
        );
      })}
      <Buttons text="Submit" customClasses="start-test" handleOnClick={handleQuizeSubmit}/>
     </Stack>
    </Stack>
  );
};
export default Tests;
