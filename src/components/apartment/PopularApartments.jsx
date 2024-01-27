import { Box, styled, Typography } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { FirstHotel } from '../../assets/images'
import {
   SlickNextIcon,
   SlickPrevIcon,
   GreenLocationIcon,
} from '../../assets/icons'
import { ROOMS } from '../../utils/constants'

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
   slidesToShow: 1.6,
   slidesToScroll: 1,
   nextArrow: <NextArrow />,
   prevArrow: <PrevArrow />,
   customPaging: (i) => (
      <div className="slick-dot">{(i + 1).toString().padStart(2, '0')}</div>
   ),
}

const PopularApartments = () => (
   <StyledContainer>
      <Box className="container">
         <StyledHotel>
            <Typography className="title">Popular Apartments</Typography>
            <img className="first-hotel" src={FirstHotel} alt="hotel" />
         </StyledHotel>
         <StyledMainText>
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
            <Typography variant="p" className="ReadMore">
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

const StyledHotel = styled('div')(({ theme }) => ({
   display: 'flex',
   flexDirection: 'column',
   padding: '2.63rem 2.56rem',

   '& .first-hotel': {
      paddingTop: '3.75rem',
      width: '32.8125rem',
      height: '28.5rem',
   },
   '& .title': {
      paddingTop: '4.62rem',
      color: theme.palette.primary.main,
      fontFamily: 'Jenriv Titling',
      fontSize: '1.25rem',
      fontWeight: '500',
      width: '14.75rem',
   },
}))

const StyledPictures = styled('div')(() => ({
   display: 'flex',
   alignItems: 'center',
   gap: '1rem',
   paddingTop: '4.95rem',
   paddingLeft: '3.13rem',
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
   marginLeft: '5rem',

   '& .title-text': {
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

const StyledSliderContent = styled('div')(() => ({
   display: 'flex',
   flexDirection: 'column',
   alignItems: 'flex-end',
   marginLeft: '5.5rem',
   '& .view': {
      color: ' #FFBE58',
      fontsize: '1.05rem',
      marginRight: '5rem',
      fontFamily: 'Inter',
      fontWeight: '500',
      cursor: 'pointer',
      textDecoration: ' underline',
   },
}))

const StyledSlider = styled(Slider)({
   maxWidth: '400px',
   '& .slick-prev, .slick-next': {
      position: 'absolute',
      top: '23.5rem',
      zIndex: '100',
      width: '3.69644rem',
      height: '1.4375rem',
   },
   '& .slick-prev': {
      left: '0rem',
   },
   '& .slick-next': {
      left: '20rem',
   },
   '& .slick-dots': {
      bottom: '-4rem',
   },
   '& .slick-dot': {
      color: '#fff',
   },

   '& .slick-active > .slick-dot': {
      color: '#797777',
   },
})
