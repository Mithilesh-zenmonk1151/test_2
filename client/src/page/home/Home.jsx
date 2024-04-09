import React from 'react'
import HeaderLayout from '../../layout/headerLayout/HeaderLayout'
import UserSearch from '../../userSearch/UserSearch'
import Tests from '../test/Test'
import QuestionCard from '../../components/questionCard/QuestionCard'
import Box from '@mui/material/Box';

const Home = () => {
  return (
    <Box sx={{
      bgcolor:"#606060"
    }}>
      <HeaderLayout/>
      <Tests/>
      <Box/>
 
    </Box>
  )
}

export default Home
