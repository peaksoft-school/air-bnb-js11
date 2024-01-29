import React from 'react'
import { Box, Typography, styled } from '@mui/material'
import { FullStarIcon } from '../../../assets/icons'
import { RATINGS } from '../../../utils/constants'

const Rating = () => {
   return (
      <RatingChart>
         <RatingCont>
            <p>4.2</p>
            <FullStarIcon />
         </RatingCont>
         <RatingChartBarContainer>
            {RATINGS.map((rating) => (
               <RatingChartBar>
                  <RatingLabel>{rating.label}</RatingLabel>
                  <RatingProgressCont>
                     <RatingProgress progress={rating.progress} />
                  </RatingProgressCont>
                  <RatingLabel>{rating.progress}%</RatingLabel>
               </RatingChartBar>
            ))}
         </RatingChartBarContainer>
      </RatingChart>
   )
}

export default Rating

const RatingChart = styled(Box)(() => ({
   border: '1px solid #C4C4C4',
   borderRadius: '16px',
   padding: '21px 40px',
   width: 'fit-content',
}))

const RatingCont = styled(Box)(() => ({
   margin: '0 0 20px 0',
   display: 'flex',
   alignItems: 'center',
   gap: '10px',

   '& p': {
      fontSize: '24px',
   },

   '& svg': {
      width: '31px',
      height: '31px',
   },
}))

const RatingChartBarContainer = styled(Box)(() => ({
   color: '#363636',
}))

const RatingChartBar = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '14px',
}))

const RatingLabel = styled(Typography)(() => ({
   width: '10px',
}))

const RatingProgressCont = styled(Box)(() => ({
   width: '20vw',
   backgroundColor: '#d4cdd3',
   overflow: 'hidden',
   display: 'flex',
   flexDirection: 'column',
   height: '3px',
}))

const RatingProgress = styled(Box)(({ progress }) => ({
   width: `${progress}%`,
   display: 'flex ',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   transition: '0.4s ease-out',
   height: '10px',
   backgroundColor: '#4F7755',
}))
