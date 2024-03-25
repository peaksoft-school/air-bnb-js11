import { Avatar, Box, Typography, styled } from '@mui/material'
import React from 'react'
import { NotFoundImage } from '../../assets/images'

const FavoriteCard = ({ userResponse, createdAt }) => {
   return (
      <StyledContainer>
         <Avatar
            src={NotFoundImage}
            width={40}
            height={40}
            className="user-avatar"
         />
         <Box>
            <Typography className="user-name">
               {userResponse.fullName}
            </Typography>
            <Typography className="user-email">{userResponse.email}</Typography>
            <Typography className="date">{createdAt}</Typography>
         </Box>
      </StyledContainer>
   )
}

export default FavoriteCard

const StyledContainer = styled(Box)(() => ({
   display: 'flex',
   gap: '16px',
   alignItems: 'center',
   margin: '0 0 60px 0',

   '& .user-avatar': {
      borderRadius: '50%',
   },

   '& .user-name': {},
   '& .user-email': {
      color: '#828282',
   },
   '& .date': {
      color: '#363636',
      fontSize: '16px',
   },
}))
