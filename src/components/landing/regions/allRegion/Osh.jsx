import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { OshImage } from '../../../../assets/images'

const Osh = ({ onClick }) => {
   return (
      <StyledLongCard className="conteiner" onClick={onClick}>
         <div className="long-image">
            <div className="card-inner">
               <div className="card-front">
                  <img className="long-image" src={OshImage} alt="Osh" />
                  <Typography className="text-in-image">OSH</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1 style={{ marginBottom: '1rem' }}>About Osh</h1>
                     Osh has been a vital crossroads on the ancient Silk Road,
                     connecting diverse cultures for centuries.Osh is home to
                     Sulaiman-Too, a UNESCO World Heritage Site and sacred
                     mountain believed to be 2,000 years old. Osh is renowned
                     for its special version of the traditional Central Asian
                     dish, plov. The local Osh plov features a unique blend of
                     rice, carrots, and meat, offering a flavorful taste that
                     reflects the regions culinary heritage. It is a place of
                     pilgrimage and offers breathtaking panoramic views of the
                     city.Legend has it that Solomons Throne, a rocky prominence
                     on Sulaiman-Too, was a place where the biblical King
                     Solomon prayed. The stunning natural formation adds a touch
                     of mystique to the region. Osh residents are known for
                     their warm hospitality. Guests often experience the genuine
                     friendliness of the locals, making any visit to Osh a
                     memorable and heartwarming experience.
                  </Box>
               </div>
            </div>
         </div>
      </StyledLongCard>
   )
}

export default Osh

const StyledLongCard = styled(Box)({
   '& .conteiner': {
      position: 'relative',
      marginTop: '-0.25em',
   },

   '& .long-image': {
      width: '31.5625rem',
      height: '38.8125rem',
      position: 'relative',
   },

   '& .card-inner': {
      width: '100%',
      height: '100%',
      position: 'relative',
      transformStyle: 'preserve-3d',
      transition: 'transform 0.999s',
   },

   '& .long-image:hover .card-inner': {
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
         background: `url(${OshImage}) center/cover no-repeat`,
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
      padding: '1.8rem',
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
