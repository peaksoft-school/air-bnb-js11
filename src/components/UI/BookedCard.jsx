import { Avatar, Box, Typography, styled } from '@mui/material'
import React from 'react'

const BookedCard = ({ checkIn, checkOut, price, userResponse }) => {
   return (
      <StyledContainer>
         <Box className="book-info">
            <Typography className="price">
               $ {price} / <span>day</span>
            </Typography>

            <Box className="check-info">
               <Box>
                  <Typography className="check">check in</Typography>
                  <Typography className="date">{checkIn}</Typography>
               </Box>
               <Box>
                  <Typography className="check">check in</Typography>
                  <Typography className="date">{checkOut}</Typography>
               </Box>
            </Box>
         </Box>
         <Box className="user-info">
            <Box className="user-info">
               <Avatar
                  src={userResponse.image}
                  alt={userResponse.fullName}
                  width={40}
                  height={40}
                  className="user-avatar"
               />
               <Box>
                  <Typography className="user-name">
                     {userResponse.fullName}
                  </Typography>
                  <Typography className="user-email">
                     {userResponse.email}
                  </Typography>
               </Box>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default BookedCard

const StyledContainer = styled(Box)(() => ({
   width: '400px',

   '& .book-info': {
      backgroundColor: '#fff',
      padding: '20px',
      textAlign: 'center',
      margin: '0 0 30px',

      '& .price': {
         fontSize: '20px',
         padding: '0 0 20px',
         borderBottom: '1px solid #c4c4c4',
         marginBottom: '20px',

         span: {
            color: '#6C6C6C',
         },
      },

      '& .check-info': {
         display: 'flex',
         justifyContent: 'space-between',

         '& .check': {
            color: '#646464',
            textTransform: 'capitalize',
            marginBottom: '17px',
         },
      },
   },

   '& .user-info': {
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
   },
}))
