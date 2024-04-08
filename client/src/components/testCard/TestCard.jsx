import * as React from "react";
// import GetComment from "../comment/getComment/GetComment.jsx";
import Card from "@mui/material/Card";
import Stack from "@mui/material/Stack";

import CardHeader from "@mui/material/CardHeader";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import AddIcon from "@mui/icons-material/Add";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import PublicIcon from "@mui/icons-material/Public";
import { useDispatch, useSelector } from "react-redux";
import { getQuestions } from "../../slice/question.slice.js";
import QuestionCard from "../questionCard/QuestionCard.jsx";
import AddQuestion from "../../page/addQuestions/AddQuestion.jsx";
import Buttons from "../button/Buttons.jsx";
import "./TestCard.css"

export default function TestCard({
  name,
  duration,
  instructions,
  totalNumberOfQuestions,
  totalMarks,
  testId,
}) {
  const dispatch = useDispatch();

  const questionArray = useSelector(
    (state) => state.questions?.content?.res?.data
  );
  const numberOfQuestions = questionArray?.length || 0;
  console.log("number of comment Array ", questionArray);
  const [seeQuestions, setSeeQuestions] = React.useState(false);

  const handleTestClick = () => {
    setSeeQuestions(!seeQuestions);
    dispatch(getQuestions(testId));
  };
  console.log(questionArray);

  return (
    <Stack
      margin={"auto"}
      sx={{
        display: "flex",
        displayDirection: "column",
        gap: "20px",
        bgColor: "red",
      }}
    >
      <Card
        sx={{
          width: 555,
          boxShadow: "none",
          borderRadius: "10px",
          display: "flex",
          flexDirection: "column",
        }}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={"5px"} sx={{
            height:"300px",
            width:"300px",
            bgcolor:" #F8F8FF",
            display:"flex",
            flexDirection:"column",
            justifyContent:"space-around"
        }}>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            {name}
          </Typography>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Duration{duration}
          </Typography>

          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Instructions{instructions}
          </Typography>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Total Q:-{totalNumberOfQuestions}
          </Typography>
          <Typography fontSize={"14px"} color={"Black"}>
            {" "}
            Total Marks{totalMarks}
          </Typography>
          <Buttons text="start test" customClasses="start-test" />
        
        </Stack>

    
        {/* <Typography >Comment</Typography> */}

        {seeQuestions && (
          <>
            <AddQuestion testId={testId} />
            {questionArray?.length > 0 &&
              questionArray?.map((question) => {
                console.log(question, "bcejkcekjbhv");
                return (
                  <QuestionCard
                    name={question.name}
                    option1={question.option1}
                    option2={question.option2}
                    option3={question.option3}
                    option4={question.option4}
                    marks={question.marks}
                  />
                );
              })}
          </>
        )}
      </Card>
    </Stack>
  );
}
// commentData={comment}
