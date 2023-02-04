import {useState, useEffect} from 'react'
import {Box, useMediaQuery} from "@mui/material"
// import FriendLisWidget from '../widgets/FriendLisWidget'
// import MyPostWidget from '../widgets/MyPostWidget'
import Navbar from '../../navbar/Navbar'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import FriendLisWidget from '../widgets/FriendLisWidget'
import MyPostWidget from '../widgets/MyPostWidget'
import PostsWidget from '../widgets/PostsWidget'
import UserWidget from '../widgets/UserWidjet'
const ProfilePage = () => {
  const [user, setUser] = useState(null);
  const { userId } = useParams();
  const token = useSelector((state) => state.token);
  // let token = localStorage.getItem("token")
  const isNonMobileScreens = useMediaQuery("(min-width:1000px)");


  useEffect(() => {
    localStorage.setItem("token", token);
    console.log(token)
  }, [token]);



  const getUser = async () => {
    const response = await fetch(`https://skrt-api-backend.onrender.com/users/${userId}`, {
      method: "GET",
      headers: { Authorization: `Bearer ${token}` },
    });
    const data = await response.json();
    setUser(data);
  };

  useEffect(() => {
    getUser();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  if (!user) return null;

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="2rem"
        justifyContent="center"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={userId} picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <FriendLisWidget userId={userId} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget picturePath={user.picturePath} />
          <Box m="2rem 0" />
          <PostsWidget userId={userId} isProfile />
        </Box>
      </Box>
    </Box>
  );
};

export default ProfilePage