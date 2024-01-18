import React from 'react'
import { Box, styled } from '@mui/material'
import first from '../../assets/images/Hotel.png.png'

const Hotel = () => {
   return (
      <StyledContainer>
         <Box className="container">
            <StyledHotel>
               <StyledText>Popular Apartments</StyledText>
               <img className="img" src={first} alt="hotelIcon" />
            </StyledHotel>
            <StyledMainText>
               <h3>Aska Lara Resort & Spa Hotel</h3>
               <p>
                  The Aska Lara Resort & Spa Hotel,
                  <br /> operates on an all-inclusive system, <br />
                  occupies 2 plots separated by a road. <br />
                  The hotel is located in the Lara district, <br />
                  500 meters from the sea...
               </p>
               {/* <LocationIcon /> */}
               <p>723510 Osh Muzurbek Alimbekov 9/7</p>
               <p>Read more</p>
            </StyledMainText>
         </Box>
      </StyledContainer>
   )
}

const StyledContainer = styled('div')(() => ({
   background: '#4F7755',
   height: '100vh',
   alignItems: 'center',
   '& .container': {
      display: 'flex',
      alignItems: 'center',
   },
}))

const StyledHotel = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '2.63rem 6.25rem',
   '& .img': {
      display: 'flex',
      paddingTop: '3.75rem',
      width: '32.8125rem',
      height: '28.5rem',
   },
}))

const StyledText = styled('div')(({ theme }) => ({
   paddingTop: '5.62rem',
   color: theme.palette.primary.main,
   fontFamily: 'Inter',
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
}))

export default Hotel
