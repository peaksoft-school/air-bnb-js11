import { Box, Typography, styled } from '@mui/material'
import React from 'react'
import { ChuiImage } from '../../../../assets/images'

const Chui = ({ onClick }) => {
   return (
      <StyledLongCard className="conteiner" onClick={onClick}>
         <div className="long-image">
            <div className="card-inner">
               <div className="card-front">
                  <img className="long-image" src={ChuiImage} alt="Chui" />

                  <Typography className="text-in-image">CHUI</Typography>
               </div>
               <div className="card-back">
                  <Box className="back-text">
                     <h1 style={{ marginBottom: '1rem' }}>About Chui</h1>
                     The Chui region boasts diverse landscapes, ranging from the
                     flat Chui Valley to the picturesque Ala-Archa National
                     Park, known for its stunning mountain scenery and hiking
                     trails. Located near the town of Tokmok, the Burana Tower
                     is a historical minaret and a UNESCO World Heritage Site.
                     It dates back to the 11th century and is part of the
                     ancient city of Balasagun. Chui region reflects Kyrgyzstans
                     nomadic heritage, and you can find yurts and traditional
                     practices that offer insights into the nomadic way of life.
                     Chui region is home to a mix of ethnicities, contributing
                     to a rich cultural tapestry. You can experience a blend of
                     Kyrgyz, Russian, and other cultural influences in the
                     region. Historically, the Chui region was part of the Silk
                     Road trade route, connecting East and West. This historical
                     significance has left traces in the form of ancient
                     settlements, artifacts, and monuments.
                  </Box>
               </div>
            </div>
         </div>
      </StyledLongCard>
   )
}

export default Chui

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
         background: `url(${ChuiImage}) center/cover no-repeat`,
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
      padding: '1.8rem',
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
