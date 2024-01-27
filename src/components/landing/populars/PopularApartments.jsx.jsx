import { Box, styled } from '@mui/material'
import hotelFirst from '../../../assets/images'
import { GreenLocationIcon } from '../../../assets/icons'
import LandingSlider from '../../UI/LandingSlider'

const PopularApartments = () => {
   return (
      <StyledContainer>
         <Box className="container">
            <StyledHotel>
               <StyledText>Popular Apartments</StyledText>
               <img className="hotelFirst" src={hotelFirst} alt="hotelFirst" />
            </StyledHotel>
            <StyledMainText>
               <h2 className="h2">Aska Lara Resort & Spa Hotel</h2>
               <p className="longText">
                  The Aska Lara Resort & Spa Hotel, which operates on an
                  all-inclusive system, occupies 2 plots separated by a road.
                  The hotel is located in the Lara district, 500 meters from the
                  sea...
               </p>
               <StyledLocation>
                  <GreenLocationIcon />
                  <span className="address">
                     723510 Osh Muzurbek Alimbekov 9/7
                  </span>
               </StyledLocation>
               <p className="ReadMore">Read more</p>
            </StyledMainText>
            <StyledSlider>
               <p>View all</p>
               <StyledPictures>
                  {/* <img
                     className="hotelSecond"
                     src={hotelSecond}
                     alt="hotelSecond"
                  />
                  <img
                     className="hotelThird"
                     src={hotelThird}
                     alt="hotelThird"
                  /> */}
                  <LandingSlider />
               </StyledPictures>
            </StyledSlider>
         </Box>
      </StyledContainer>
   )
}

export default PopularApartments

const StyledContainer = styled('div')(() => ({
   background: '#4F7755',
   height: '100vh',
   display: 'flex',
   justifyContent: 'center',
   '& .container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
   },
}))

const StyledPictures = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   paddingTop: '4.95rem',
   paddingLeft: '3.13rem',
}))

const StyledHotel = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '2.63rem 2.56rem',
   '& .hotelFirst': {
      paddingTop: '3.75rem',
      width: '32.8125rem',
      height: '28.5rem',
   },
}))

const StyledText = styled('div')(({ theme }) => ({
   paddingTop: '5.62rem',
   color: theme.palette.primary.main,
   fontFamily: 'Jenriv Titling',
   fontSize: '1.25rem',
   fontWeight: '500',
   width: '14.75rem',
}))

const StyledMainText = styled('div')(() => ({
   alignItems: 'center',
   color: '#FFF',
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontWeight: '500',
   textAlign: 'start',
   flexDirection: 'row',
   marginTop: '8.56rem',
   '& .h2': {
      width: '18rem',
      fontSize: '1.125rem',
      fontWeight: '500',
      margin: '1.5rem 0',
      lineHeight: 'normal',
   },
   '& .longText': {
      display: 'flex',
      fontFamily: 'Inter',
      fontSize: '1.125rem',
      fontweight: '400',
      width: '19.3125rem;',
   },
   '& .address': {
      display: 'flex',
      fontFamily: 'Inter',
      color: ' #97C69E',
      fontsize: '0.75rem',
      fontstyle: ' normal',
      fontweight: ' 300',
   },
   '& .ReadMore': {
      color: ' #FFBE58',
      fontsize: '1rem',
      fontFamily: 'Inter',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: ' underline',
   },
}))

const StyledLocation = styled('div')(() => ({
   display: 'flex',
   gap: '0.5rem',
   margin: '0.46rem 0 2.16rem 0',
}))

const StyledSlider = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',

   p: {
      color: ' #FFBE58',
      fontsize: '1rem',
      fontFamily: 'Inter',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: ' underline',
   },
}))
