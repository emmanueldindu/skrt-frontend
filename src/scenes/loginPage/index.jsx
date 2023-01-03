import React from 'react'
// import Navbar from '../navbar'
import {
  Box,
  Typography, useTheme, useMediaQuery
} from '@mui/material'
import Form from './Form';
import Input from './Input';


function LoginPage() {

  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>

      <Box width="100%" backgroundColor={theme.palette.background.alt} p='1rem 6%'>
      <Typography
          fontWeight="bold"
          
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="#03c9d7"
          
       
        >
          SKRT.
        </Typography>
      </Box>
      <Box width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontweight="500" variant="h5" sx={{mb: "1.5rem"}}>
          Hi, <br></br>
          Welcome Back to SKRT.
        </Typography>
        {/* <Form /> */}
 <Input />       
 </Box>

      
     
        </Box>
  )
}

export default LoginPage