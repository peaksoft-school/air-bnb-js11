import { Box, styled, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FirstHotel } from '../../../assets/images'
import {
   SlickNextIcon,
   SlickPrevIcon,
   GreenLocationIcon,
} from '../../../assets/icons'
import { ROOMS } from '../../../utils/constants'

const NextArrow = ({ onClick, className }) => (
   <SlickNextIcon onClick={onClick} className={className} />
)

const PrevArrow = ({ onClick, className }) => (
   <SlickPrevIcon onClick={onClick} className={className} />
)

const settings = {
   dots: true,
   infinite: false,
   speed: 500,
   slidesToShow: 1.8,
   slidesToScroll: 1,
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
}

const PopularApartments = ({ background }) => (
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
               all-inclusive system, occupies 2 plots separated by a road. The
               hotel is located in the Lara district, 500 meters from the sea...
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
               <StyledSlider {...settings}>
                  {ROOMS.map(({ name, img }) => (
                     <Box key={name}>
                        <img
                           src={img}
                           alt={name}
                           style={{ width: '14rem', height: '19.81rem' }}
                        />
                     </Box>
                  ))}
               </StyledSlider>
            </StyledPictures>
         </StyledSliderContent>
      </Box>
   </StyledContainer>
)

export default PopularApartments

const StyledContainer = styled('div')(({ background }) => ({
   background: background ? '#4F7755' : 'white',
   minHeight: '46.3rem',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',

   '& .container': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100%',
      marginLeft: '3rem',
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
}))

const StyledHotel = styled('div')(({ background }) => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '2.63rem 2.56rem',

   '& .first-hotel': {
      paddingTop: '3.75rem',
      maxWidth: '32.8125rem',
      width: '100%',
      minWidth: '29rem',
      height: '28.5rem',
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

const StyledSlider = styled(Slider)({
   maxWidth: '450px',
   display: 'flex',
   gap: '1rem',

   '& .slick-prev, .slick-next': {
      color: 'red',
      position: 'absolute',
      top: '23.5rem',
      zIndex: '100',
      width: '4.69644rem',
      height: '1.4375rem',
   },

   '& .slick-prev': {
      left: '1.5rem',
   },

   '& .slick-next': {
      left: '22rem',
      path: {
         stroke: '#97C69E',
      },
      line: {
         stroke: '#97C69E',
      },
   },

   '& .slick-dots': {
      bottom: '-4rem',
   },

   '& .slick-dot': {
      color: '#fff',
   },
})
