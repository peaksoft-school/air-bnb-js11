import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { TalasImage } from '../../../../assets/images'

const Talas = () => {
   return (
      <StyledCard className="conteiner">
         <div className="card">
            <div className="card-inner">
               <div className="card-front">
                  <img className="square-image" src={TalasImage} alt="talas" />
                  <Typography className="text-in-image">TALAS</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1
                        style={{
                           fontSize: '1.7rem',
                        }}
                     >
                        About Talas
                     </h1>
                     Talas is the home of the Kyrgyz people,known for their
                     nomadic traditions.Talas is proud to host the Manas Ordo
                     Complex, a historical center dedicated to the legendary
                     hero Manas, an epic figure of their folklore. Nomad Games
                     are held in the region. The event is dedicated to
                     traditional sports and nomadic competitions, showing skills
                     of the Kyrgyz.
                  </Box>
               </div>
            </div>
         </div>
      </StyledCard>
   )
}

export default Talas

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
         background: `url(${TalasImage}) center/cover no-repeat`,
         filter: 'blur(2.5rem)',
         zIndex: -1,
      },
      display: 'flex',
      justifyContent: 'flex-start',
      fontSize: '1.5rem',
   },

   '& .back-text': {
      whiteSpace: 'normal',
      maxWidth: '100%',
      wordWrap: 'break-word',
      padding: '0.5rem 1.3rem',
      fontSize: '1.1rem',
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
