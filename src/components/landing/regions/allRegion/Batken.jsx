import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { BatkenImage } from '../../../../assets/images'

const Batken = () => {
   return (
      <StyledCard className="conteiner">
         <div className="card">
            <div className="card-inner">
               <div className="card-front">
                  <img
                     className="square-image"
                     src={BatkenImage}
                     alt="Batken"
                  />
                  <Typography className="text-in-image">BATKEN</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1
                        style={{
                           fontSize: '1.7rem',
                        }}
                     >
                        About Batken
                     </h1>
                     Batken region in Kyrgyzstan is blessed with breathtaking
                     landscapes, featuring lush valleys, majestic mountains, and
                     pristine rivers. The significance of apricots in Batken is
                     celebrated annually through apricot festivals. These events
                     bring together locals and visitors to enjoy the harvest
                     season, featuring activities such as traditional music,
                     dance.
                  </Box>
               </div>
            </div>
         </div>
      </StyledCard>
   )
}

const StyledCard = styled(Box)({
   '& .conteiner': {
      position: 'relative',
      marginTop: '-0.25em',
   },

   '& .square-image': {
      width: '21.6875rem',
      height: '18.875rem',
   },

   '& .card': {
      width: '21.6875rem',
      height: '18.875rem',
   },

   '& .card-inner': {
      width: '100%',
      height: '100%',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.999s',
   },

   '& .card:hover .card-inner': {
      transform: 'rotateY(180deg)',
   },

   '& .card-front, .card-back': {
      position: 'absolute',
      width: '100%',
      height: '100%',
      backfaceVisibility: 'hidden',
   },

   '& .card-front': {
      color: '#fff',
      display: 'flex',
      alignItems: 'center',
      borderRadius: '10px',
      justifyContent: 'center',
      fontSize: '24px',
      transform: 'rotateY(0deg)',
   },

   '& .card-back': {
      position: 'relative',
      transform: 'rotateY(180deg)',
      overflow: 'hidden',
      color: '#fff',

      '&::before': {
         content: '""',
         position: 'absolute',
         top: 0,
         left: 0,
         right: 0,
         bottom: 0,
         background: `url(${BatkenImage}) center/cover no-repeat`,
         filter: 'blur(2.5rem)',
         zIndex: -1,
      },

      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1.5rem',
   },

   '& .back-text': {
      fontSize: '1.1rem',
      whiteSpace: 'normal',
      maxWidth: '100%',
      wordWrap: 'break-word',
      padding: '0.5rem 1.3rem',
   },
   '@keyframes moveLeftToRight': {
      from: {
         transform: 'translateX(-100%)',
      },
      to: {
         transform: 'translateX(100%)',
      },
   },
})

export default Batken
