import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { JalalAbadImage } from '../../../../assets/images'

const JalalAbad = ({ onClick }) => {
   return (
      <StyledCard className="conteiner" onClick={onClick}>
         <div className="card">
            <div className="card-inner">
               <div className="card-front">
                  <img
                     className="square-image"
                     src={JalalAbadImage}
                     alt="JalalAbad"
                  />
                  <Typography className="text-in-image">JALAL-ABAD</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1
                        style={{
                           marginBottom: '0.5rem',
                           fontSize: '1.7rem',
                        }}
                     >
                        About Jalal-Abad
                     </h1>
                     One of the worlds largest walnut forests, Arslanbob, is
                     situated in Jalal-Abad. This lush, ancient forest covers
                     over 6,000 hectares and is a haven for biodiversity.
                     Kok-Boru, a traditional Central Asian sport played on
                     horseback with a goat carcass, is celebrated with
                     enthusiasm in Jalal-Abad.
                  </Box>
               </div>
            </div>
         </div>
      </StyledCard>
   )
}

export default JalalAbad

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
         background: `url(${JalalAbadImage}) center/cover no-repeat`,
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
      padding: '0.8rem 1.3rem',
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
