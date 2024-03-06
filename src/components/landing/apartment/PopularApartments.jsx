/* eslint-disable no-unused-vars */
import { Box, styled, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Swiper, SwiperSlide } from 'swiper/react'
import { useState } from 'react'
import { A11y, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules'
import { FirstHotel } from '../../../assets/images'
import {
   SlickNextIcon,
   SlickPrevIcon,
   GreenLocationIcon,
   ArrowRightIcon,
} from '../../../assets/icons'
import { ROOMS } from '../../../utils/constants'

const PopularApartments = ({ background }) => {
   const [thumbsSwiper, setThumbsSwiper] = useState(null)

   return (
      <StyledContainer background={background}>
         <Box className="container">
            <StyledHotel background={background}>
               <Typography className="title">
                  {background ? 'Popular Apartments' : 'The Lastes'}
               </Typography>
               <img className="first-hotel" src={FirstHotel} alt="hotel" />
            </StyledHotel>
            <StyledMainText background={background}>
               <Typography variant="h2" className="title-text">
                  Aska Lara Resort & Spa Hotel
               </Typography>
               <Typography variant="p" className="longText">
                  The Aska Lara Resort & Spa Hotel, which operates on an
                  all-inclusive system, occupies 2 plots separated by a road.
                  The hotel is located in the Lara district, 500 meters from the
                  sea...
               </Typography>
               <StyledLocation>
                  <GreenLocationIcon />
                  <Typography variant="span" className="address">
                     723510 Osh Muzurbek Alimbekov 9/7
                  </Typography>
               </StyledLocation>
               <Typography variant="p" className="view">
                  Read more
               </Typography>
            </StyledMainText>
            <StyledSliderContent>
               <Typography variant="p" className="view">
                  View all
               </Typography>
               <StyledPictures>
                  <Swiper
                     spaceBetween={10}
                     modules={[FreeMode, Navigation, Thumbs, Pagination, A11y]}
                     slidesPerView={2}
                     pagination={{
                        type: 'fraction',
                     }}
                     navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                     }}
                     className="swiper"
                     loop
                  >
                     {ROOMS.map(({ name, img }) => (
                        <SwiperSlide key={name}>
                           <img src={img} alt={name} />
                        </SwiperSlide>
                     ))}

                     <Box className="arrow-buttons-container">
                        <Box className="swiper-button-prev">
                           <ArrowRightIcon />
                        </Box>

                        <Box className="swiper-button-next">
                           <ArrowRightIcon />
                        </Box>
                     </Box>
                  </Swiper>
               </StyledPictures>
            </StyledSliderContent>
         </Box>
      </StyledContainer>
   )
}

export default PopularApartments

const StyledContainer = styled('div')(({ background }) => ({
   background: background ? '#4F7755' : 'white',
   minHeight: '46.3rem',
   justifyContent: 'center',
   alignItems: 'center',
   maxWidth: '100%',

   '& .container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      height: '100%',
      marginLeft: '3rem',
      marginRight: '3rem',
      maxWidth: '100%',
   },

   '& .view': {
      color: ' #FFBE58',
      fontsize: '1rem',
      marginRight: '6.25rem',
      fontFamily: 'Inter',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: ' underline',
      marginTop: '-4.62rem',
      lineHeight: '130%',
   },

   '& .swiper': {
      maxWidth: '500px',
      minWidth: '300px',
      width: '100%',
      height: '420px',

      '& .swiper-slide img': {
         height: '80%',
         width: '100%',
         objectFit: 'cover',
         display: 'block',
      },

      '& .swiper-pagination': {
         width: '250px',
         color: background ? '#fff' : '#222',
      },

      '& .arrow-buttons-container': {
         position: 'relative',
         bottom: '17px',
         width: '245px',
         '& .swiper-button-prev': {
            width: '70px',

            '& svg': {
               transform: 'rotate(180deg)',
               path: {
                  stroke: background ? '#fff' : '#222',
               },
            },

            '&::after': {
               content: 'none',
            },
         },
         '& .swiper-button-next': {
            width: '70px',

            '& svg': {
               path: {
                  stroke: background ? '#fff' : '#222',
               },
            },

            '&::after': {
               content: 'none',
            },
         },
      },
   },
}))

const StyledHotel = styled('div')(({ background }) => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '2.63rem 2.56rem',

   '& .first-hotel': {
      paddingTop: '3.75rem',
      maxWidth: '100%',
      height: 'auto',
   },

   '& .title': {
      color: background ? 'white' : 'black',
      fontFamily: 'Jenriv Titling',
      fontSize: '1.25rem',
      fontWeight: '500',
      width: '14.75rem',
   },
}))

const StyledPictures = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   paddingTop: '4.95rem',
}))

const StyledMainText = styled('div')(({ background, theme }) => ({
   alignItems: 'center',
   color: background ? theme.palette.primary.main : theme.palette.primary.dark,
   fontFamily: 'Inter',
   fontSize: '1.125rem',
   fontWeight: '500',
   textAlign: 'start',
   flexDirection: 'row',
   marginTop: '8.56rem',

   '& .title-text': {
      fontSize: '1.125rem',
      fontWeight: '500',
      margin: '1.75rem 0',
      lineHeight: 'normal',
      fontFamily: 'Inter',
   },

   '& .longText': {
      display: 'flex',
      fontFamily: 'Inter',
      fontweight: '400',
      color: background
         ? theme.palette.primary.white
         : theme.palette.primary.dark,
      fontSize: ' 1rem',
      lineHeight: '130%',
      width: '19.5rem',
   },

   '& .address': {
      color: theme.palette.tertiary.lightGreen,
      fontFamily: 'Inter',
      fontSize: '0.875rem',
      fontWeight: '400',
   },
}))

const StyledLocation = styled('div')(() => ({
   display: 'flex',
   gap: '0.5rem',
   margin: '0.46rem 0 2.16rem 0',
}))

const StyledSliderContent = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   marginLeft: '2.93rem',
}))
