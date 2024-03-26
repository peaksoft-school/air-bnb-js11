import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { BishkekImage } from '../../../../assets/images'

const Bishkek = ({ onClick }) => {
   return (
      <StyledBigCard className="conteiner" onClick={onClick}>
         <div className="wide-image">
            <div className="card-inner">
               <div className="card-front">
                  <img
                     className="wide-image"
                     src={BishkekImage}
                     alt="Bishkek"
                  />
                  <Typography className="text-in-image">BISHKEK</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1 style={{ marginBottom: '0.3rem' }}>
                        About Bishkek city
                     </h1>
                     Bishkek, the capital city of Kyrgyzstan.Bishkek is home to
                     the State Historical Museum, which houses artifacts
                     spanning the regions rich cultural history, providing
                     visitors with insights into Kyrgyzstans nomadic
                     past.Bishkek offers a thriving café culture, with numerous
                     charming coffee shops and tea houses scattered throughout
                     the city, providing a cozy atmosphere for locals and
                     tourists alike.The city boasts a vibrant mix of Soviet-era
                     architecture and modern structures, showcasing the evolving
                     character of Kyrgyzstan as it embraces both tradition and
                     progress.The citys Philharmonic Hall is renowned for its
                     unique architecture resembling a yurt, symbolizing a
                     harmonious blend of ancient and contemporary influences.
                  </Box>
               </div>
            </div>
         </div>
      </StyledBigCard>
   )
}

export default Bishkek

const StyledBigCard = styled(Box)({
   '& .conteiner': {
      position: 'relative',
      marginTop: '-0.25em',
   },

   '& .wide-image': {
      width: '44.6875rem',
      height: '18.6875rem',
      position: 'relative',
   },

   '& .card-inner': {
      width: '100%',
      height: '100%',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.999s',
   },

   '& .wide-image:hover .card-inner': {
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
         background: `url(${BishkekImage}) center/cover no-repeat`,
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
      padding: '0.7rem 1.8rem',
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
