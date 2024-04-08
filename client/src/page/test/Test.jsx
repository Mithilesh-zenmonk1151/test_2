import { Avatar, Box, Button, Divider, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTests } from "../../slice/test.slice";
// import DialogBox from "../dialogBox/DialogBox";
import { useNavigate } from "react-router";
import TestCard from "../../components/testCard/TestCard";
import Typography from "@mui/material/Typography";

const Tests = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getTests());
  }, [dispatch]);
//   const toggle = (e) => {
//     setIsOpen(true);
//   };

  const tests = useSelector((state) => state.test?.content?.response);
  console.log("test",tests)
  const loading = useSelector((state) => state.posts?.isLoading);
  const error = useSelector((state) => state.posts?.error);
  console.log("empty", tests);
  if (loading) {
    return "Loading...";
  }
  if (error) {
    return error;
  }
  function handleOnClick() {
    console.log("post wala field is clicked");
  }
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


                  />
                </Stack>
              );
            })}
          </Stack>
      
    
  );
};
export default Tests;
