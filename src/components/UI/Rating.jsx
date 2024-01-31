import { Box, Typography, styled } from '@mui/material'
import { FullStarIcon } from '../../assets/icons'
import { RATINGS } from '../../utils/constants'

const Rating = () => (
   <RatingChart>
      <RatingCont>
         <Typography>4.2</Typography>

         <FullStarIcon />
      </RatingCont>

      <RatingChartBarContainer>
         {RATINGS.map(({ label, progress }) => (
            <RatingChartBar>
               <RatingLabel>{label}</RatingLabel>

               <RatingProgressCont>
                  <RatingProgress progress={progress} />
               </RatingProgressCont>

               <RatingLabel>{progress}%</RatingLabel>
            </RatingChartBar>
         ))}
      </RatingChartBarContainer>
   </RatingChart>
)

export default Rating

const RatingChart = styled(Box)(() => ({
   border: '.0625rem solid #C4C4C4',
   borderRadius: '1rem',
   padding: '1.3125rem 2.5rem',
   width: 'fit-content',
}))

const RatingCont = styled(Box)(() => ({
   margin: '0 0 .9375rem 0',
   display: 'flex',
   alignItems: 'center',
   gap: '.625rem',

   '& > p': {
      fontSize: '1.5rem',
   },

   '& > svg': {
      width: '1.9375rem',
      height: '1.9375rem',
   },
}))

const RatingChartBarContainer = styled(Box)(() => ({
   color: '#363636',
}))

const RatingChartBar = styled(Box)(() => ({
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   gap: '.875rem',
}))

const RatingLabel = styled(Typography)(() => ({
   width: '.625rem',
}))

const RatingProgressCont = styled(Box)(() => ({
   width: '20vw',
   backgroundColor: '#d4cdd3',
   overflow: 'hidden',
   display: 'flex',
   flexDirection: 'column',
   height: '.1875rem',
}))

const RatingProgress = styled(Box)(({ progress }) => ({
   width: `${progress}%`,
   display: 'flex ',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   transition: '0.4s ease-out',
   height: '.625rem',
   backgroundColor: '#4F7755',
}))
