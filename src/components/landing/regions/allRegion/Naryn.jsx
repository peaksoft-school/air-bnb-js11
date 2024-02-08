import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { NarynImage } from '../../../../assets/images'

const Naryn = () => {
   return (
      <StyledBigCard className="conteiner">
         <div className="wide-image">
            <div className="card-inner">
               <div className="card-front">
                  <img className="wide-image" src={NarynImage} alt="Naryn" />
                  <Typography className="text-in-image">NARYN</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1 style={{ marginBottom: '0.5rem' }}>About Naryn</h1>
                     Naryn, located in the heart of Kyrgyzstan, boasts
                     breathtaking landscapes with towering mountain ranges,
                     crystal-clear lakes, and lush valleys, making it a haven
                     for nature lovers and adventure seekers. Naryn is proud to
                     host Son-Kul, the second-largest lake in Kyrgyzstan. Known
                     as the Pearl of Tien Shan, this high-altitude lake is
                     surrounded by nomadic pastures and provides a serene escape
                     with its clear waters and stunning reflections.Naryn is a
                     hub for traditional Kyrgyz handicrafts. Local artisans
                     skillfully craft intricate felt carpets, shyrdaks, and
                     colorful textiles, providing visitors with the opportunity
                     to take home a piece of Kyrgyz culture.
                  </Box>
               </div>
            </div>
         </div>
      </StyledBigCard>
   )
}

export default Naryn

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
         background: `url(${NarynImage}) center/cover no-repeat`,
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
      padding: '0.7rem 1.8rem',
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
