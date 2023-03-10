import {
    ManageAccountsOutlined,
    EditOutlined,
    LocationOnOutlined,
    WorkOutlineOutlined,
  } from "@mui/icons-material";
  import { Box, Typography, Divider, useTheme } from "@mui/material";
  import UserImage from "../../components/UserImage";
  import FlexBetween from "../../components/FlexBetween";
  import WidgetWrapper from "../../components/WidgetWrapper";
  import { useSelector } from "react-redux";
  import { useEffect, useState } from "react";
  import { useNavigate } from "react-router-dom";
  import twitter from '../../assets/twitter.png';
  import link from '../../assets/linkedin.png';



  // import { response } from "express";

  
const UserWidget = ({ userId, picturePath }) => {
  const [user, setUser] = useState(null)
  const { palette } = useTheme()
  const navigate = useNavigate()
  const token = useSelector((state) => state.token);
  const client = useSelector((state) => state.user)
  const dark = palette.neutral.dark
  const medium = palette.neutral.medium
  const main = palette.neutral.main;


  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  
  const getUser = async () => {
    const response = await fetch(`https://skrtapi.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    
    })
    const data = await response.json()
    setUser(data)
    
  }
  
  useEffect(() => {
    getUser()
    // console.log(client)
  }, [])

  if (!user) {
    return null
  }

  // const {
  //   firstName,
  //   lastName,
  //   location,
  //   occupation,
  //   viewedProfile,
  //   impressions,
  //   friends,

  // } = user;

 

  return (
    
    <WidgetWrapper>
      <FlexBetween gap="0.5rem" pb="1.1rem" ocClick={() => navigate(`/profile/${userId}`)}
      >
        <FlexBetween gap='1rem'>
          <UserImage image={picturePath} />
          <Box>
            <Typography
              varient="h4"
              color={dark}
              fontWeight="500"
              sx={{
                "&:hover": {
                  color: palette.primary.light,
                  cursor: "pointer"
                }
              }}
            >
              {/* {} */}
              {`${client.firstName} ${client.lastName}`}

            </Typography>
            <Typography color={medium} >{client.friends.length}  Friends </Typography>
            {/* {console.log(client.friends.length)} */}
          </Box>
          {/* <Box display='flex' alignItems='center'></Box> */}
        </FlexBetween>
<ManageAccountsOutlined />
        <Divider />
        </FlexBetween>

        <Box p="1rem 0">
          <Box display='flex' alignItems='center' gap="1rem" mb="0.5rem">
            <LocationOnOutlined fontSize="large" sx={{ color: main }} />
            <Typography color={medium}>{ client.location}</Typography>
          </Box>

          <Box display='flex' alignItems="center" gap='1rem'>
            <WorkOutlineOutlined fontSize="large" sx={{color:main}} />
            <Typography color={medium}> {client.occupation}</Typography>
          </Box>
        </Box>

        <Box p="1rem 0">
        <FlexBetween mb="0.5rem">
          <Typography color={medium}>Who's viewed your profile</Typography>
          <Typography color={main} fontWeight="500">
            {client.viewedProfile}
          </Typography>
        </FlexBetween>
        <FlexBetween>
          <Typography color={medium}>Impressions of your post</Typography>
          <Typography color={main} fontWeight="500">
            {client.impressions}
          </Typography>
        </FlexBetween>
      </Box>

        <Divider />
        
        <Box p="1rem 0">
        <Typography fontSize="1rem" color={main} fontWeight="500" mb="1rem">
          Social Profiles
        </Typography>

        <FlexBetween gap="1rem" mb="0.5rem">
          <FlexBetween gap="1rem">
            <img src={twitter} alt="twitter" />
            <Box>
              <Typography color={main} fontWeight="500">
                Twitter
              </Typography>
              <Typography color={medium}>Social Network</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>

        <FlexBetween gap="1rem">
          <FlexBetween gap="1rem">
            <img src={link} alt="linkedin" />
            <Box>
              <Typography color={main} fontWeight="500">
                Linkedin
              </Typography>
              <Typography color={medium}>Network Platform</Typography>
            </Box>
          </FlexBetween>
          <EditOutlined sx={{ color: main }} />
        </FlexBetween>
      </Box>

      
  </WidgetWrapper>
)


}
  


  export default UserWidget;
  
