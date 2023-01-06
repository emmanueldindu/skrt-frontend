import { Box } from "@mui/material";
import React from 'react'

function UserImage({image, size ="60px"}) {
  return (
      <Box width={size} height={size} >
          <img src={`https://skrt-api-backend.onrender.com/assets/${image}`}
              alt="user"
              width={size}
              height={size}
              style={{objectFit: "cover", borderRadius: "50%"}}
          />
      
    </Box>
  )
}

export default UserImage
