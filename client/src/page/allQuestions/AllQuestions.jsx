import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../slice/test.slice";
// import DialogBox from "../dialogBox/DialogBox";
import { useNavigate } from "react-router";
import TestCard from "../../components/testCard/TestCard";
import Typography from "@mui/material/Typography";
import { getQuestions } from "../../slice/question.slice";

const Tests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const [startId,setStartId]= useState("");
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
//   const toggle = (e) => {
//     setIsOpen(true);
//   };

  const tests = useSelector((state) => state.test?.content?.response);
  console.log("test",tests)
  const loading = useSelector((state) => state.test?.content?.isLoading);
  const error = useSelector((state) => state.test?.content?.error);
  console.log("empty", tests);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }
  function handleOnClick(testId) {
    setStartId(testId);
    dispatch(getQuestions(testId))
    console.log("questtiiooonnsnasnsad",testId)
    
  }
//   const handleClick = () => {
//     setSeecomment(!seecomment);
//     dispatch(getCommentUser(postId));
//   };
  console.log("sttttaaaaaarrrt",startId)
  return (
    <Stack sx={{
        display:"flex",
        justifyContent:"center",
        textAlign:"center"
        
    }} flexDirection={"column"}  className="Home">
             <Typography variant="h4" sx={{mr:"300px"
                
             }}>All Tests</Typography>

           
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
                    handleAddTestClick={()=>handleOnClick(test?._id)}


                  />
                </Stack>
              );
            })}
          </Stack>
      
    
  );
};
export default Tests;
