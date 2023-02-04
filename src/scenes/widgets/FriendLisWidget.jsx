
import {Box, Typography, useTheme } from "@mui/material"
import Friends from '../../components/Friends'
import WidgetWrapper from '../../components/WidgetWrapper'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setFriends } from '../../state'

function FriendLisWidget({ userId }) {
    
    const dispatch = useDispatch();
    const { palette } = useTheme();
    const token = useSelector((state) => state.token);
  const friends = useSelector((state) => state.user.friends);
  
  useEffect(() => {
    localStorage.setItem("token", token);
  }, [token]);
  
    const getFriends = async () => {
        const response = await fetch(
          `https://skrt-api-backend.onrender.com/users/${userId}/friends`,
          {
            method: "GET",
            headers: { Authorization: `Bearer ${token}` },
          }
        );
        const data = await response.json();
        dispatch(setFriends({ friends: data }));
      };
    
      useEffect(() => {
        getFriends();
      }, []); // eslint-disable-line react-hooks/exhaustive-deps
    
      return (
        <WidgetWrapper>
          <Typography
            color={palette.neutral.dark}
            variant="h5"
            fontWeight="500"
            sx={{ mb: "1.5rem" }}
          >
            Friend List
          </Typography>
          <Box display="flex" flexDirection="column" gap="1.5rem">
            {friends.map((friend) => (
              <Friends
                key={friend._id}
                friendId={friend._id}
                name={`${friend.firstName} ${friend.lastName}`}
                subtitle={friend.occupation}
                userPicturePath={friend.picturePath}
              />
            ))}
          </Box>
        </WidgetWrapper>
  )
}

export default FriendLisWidget
