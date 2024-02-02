import { Box, Typography, styled } from '@mui/material'
import { FullStarIcon } from '../../assets/icons'

const Rating = ({ ratingVal, countRating }) => {
   const { one, two, three, four, five } = countRating

   const ratings = [
      { label: 5, progress: one },
      { label: 4, progress: two },
      { label: 3, progress: three },
      { label: 2, progress: four },
      { label: 1, progress: five },
   ]

   return (
      <StyledRatingChart>
         <Box className="rating-cont">
            <Typography>{ratingVal}</Typography>

            <FullStarIcon />
         </Box>

         <Box className="rating-chart-bar-container">
            {ratings.map(({ label, progress }) => (
               <Box className="rating-chart-bar">
                  <Typography className="rating-label">{label}</Typography>

                  <Box className="rating-progress-cont">
                     <StyledRatingProgress progress={progress} />
                  </Box>

                  <Typography className="rating-label">{progress}%</Typography>
               </Box>
            ))}
         </Box>
      </StyledRatingChart>
   )
}
export default Rating

const StyledRatingChart = styled(Box)(({ progress }) => ({
   border: '.0625rem solid #C4C4C4',
   borderRadius: '1rem',
   padding: '1.3125rem 2.5rem',
   width: 'fit-content',

   '& > .rating-cont': {
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
   },
   '& > .rating-chart-bar-container': {
      color: '#363636',
   },
   '& > .rating-chart-bar': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      gap: '.875rem',
   },
   '& > .rating-label': {
      width: '.625rem',
   },
   '& > .rating-progress-cont': {
      width: '20vw',
      backgroundColor: '#d4cdd3',
      overflow: 'hidden',
      display: 'flex',
      flexDirection: 'column',
      height: '.1875rem',
   },
   '& > .rating-progress': {
      width: `${progress}%`,
      display: 'flex ',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      transition: '0.4s ease-out',
      height: '.625rem',
      backgroundColor: '#4F7755',
   },
}))

const StyledRatingProgress = styled(Box)(({ progress }) => ({
   width: `${progress}%`,
   display: 'flex ',
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'center',
   transition: '0.4s ease-out',
   height: '.625rem',
   backgroundColor: '#4F7755',
}))
