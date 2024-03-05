import { Box, Rating, Typography, styled } from '@mui/material'
import React, { useState } from 'react'
import { DisLikeIcon, LikeIcon } from '../../assets/icons'
import IconButton from './IconButton'

const Feedback = ({
   name,
   feedback,
   rating,
   images,
   likes,
   dislikes,
   userImage,
   postedAt,
}) => {
   const [showFullText, setShowFullText] = useState(false)

   const toggleText = () => {
      setShowFullText((prev) => !prev)
   }

   return (
      <StyledContainer>
         <Box className="user-rating">
            <Box>
               <img
                  src={userImage}
                  alt={name}
                  width={40}
                  height={40}
                  className="user-avatar"
               />
               <Typography className="user-name">{name}</Typography>
            </Box>
            <Box className="rating">
               <Rating value={rating} readOnly color="yellow" />({rating})
            </Box>
         </Box>
         <Box className="feedback">
            <span>
               {showFullText ? feedback : `${feedback.substring(0, 250)}...`}{' '}
            </span>
            {feedback.length > 250 ? (
               <Typography className="show-more-text" onClick={toggleText}>
                  {showFullText ? 'see less' : 'see more'}
               </Typography>
            ) : null}
         </Box>
         <Box className="img-container">
            {images &&
               images.map((item) => (
                  <img src={item} alt="house img" key={item} />
               ))}
         </Box>
         <Box className="date-like">
            <Typography className="date">{postedAt}</Typography>
            <Box className="action-cont">
               <IconButton className="like">
                  <LikeIcon /> {likes}
               </IconButton>
               <IconButton className="like">
                  <DisLikeIcon /> {dislikes}
               </IconButton>
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default Feedback

const StyledContainer = styled(Box)(() => ({
   maxWidth: '630px',
   minWidth: '500px',
   width: '100%',
   color: '#646464',
   margin: '0 0 60px 0',

   '& .user-rating': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      margin: '0 0 10px 0',
      color: '#222',

      '& .MuiBox-root': {
         display: 'flex',
         alignItems: 'center',
         gap: '10px',
      },
   },

   '& .feedback': {
      margin: '0 0 10px 0',

      '& .show-more-text': {
         display: 'inline',
         color: ' var(--tertiary-blue, #266BD3)',
         lineHeight: '130%',
         textDecorationLine: 'underline',
         cursor: 'pointer',
         fontSize: '1rem',
      },
   },

   '& .img-container': {
      display: 'flex',
      gap: '4px',
      margin: '0 0 20px 0',
      '& img': {
         width: '90px',
         height: '90px',
         objectFit: 'cover',
      },
   },

   '& .date-like': {
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',

      '& .date': {
         color: '#acacac',
      },

      '& .MuiBox-root': {
         display: 'flex',
         alignItems: 'center',
         gap: '20px',
      },

      '& .like': {
         display: 'flex',
         alignItems: 'center',
         gap: '10px',
         color: '#222',
         fontSize: '18px',

         '& svg': {
            '& path': {
               fill: '#acacac',
            },
         },
      },
   },
}))
