import React, { useRef } from 'react'
import { Box, Typography, styled } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { Bighool, smallhool1, smallhool2, smallhool3 } from '../assets/images'

const InnerApplication = () => {
   const sliderRef1 = useRef(null)
   const sliderRef2 = useRef(null)

   const settings = {
      slidesToShow: 2,
      slidesToScroll: 1,
      arrows: true,
      fade: true,
      asNavFor: sliderRef2.current,
   }

   const navSettings = {
      slidesToShow: 3,
      slidesToScroll: 1,
      asNavFor: sliderRef1.current,
      dots: true,
      focusOnSelect: true,
   }

   return (
      <Box style={{ display: 'flex' }}>
         <Box>
            <StyledName variant="h">NAME</StyledName>
            <StyledSlider {...settings} className="slider-for" ref={sliderRef1}>
               <img src={Bighool} alt="Bighool" />
               <img src={smallhool1} alt="smallhool1" />
               <img src={smallhool2} alt="smallhool2" />
               <img src={smallhool3} alt="smallhool3" />
            </StyledSlider>

            <StyledNavSlider
               {...navSettings}
               className="slider-nav"
               ref={sliderRef2}
            >
               <div>
                  <img
                     className="height-of-images"
                     src={Bighool}
                     alt="Bighool"
                  />
               </div>
               <div>
                  <img
                     className="height-of-images"
                     src={smallhool1}
                     alt="smallhool1"
                  />
               </div>
               <div>
                  <img
                     className="height-of-images"
                     src={smallhool2}
                     alt="smallhool2"
                  />
               </div>
               <div>
                  <img
                     className="height-of-images"
                     src={smallhool3}
                     alt="smallhool3"
                  />
               </div>
            </StyledNavSlider>
         </Box>
         <StyledContainer>
            <StyledNameHotel variant="h5">Name of hotel</StyledNameHotel>
            <StyledAddress variant="span">
               12 Morris Ave, Toronto, ON, CA
            </StyledAddress>
            <Box style={{ display: 'flex', marginLeft: '3.30rem' }}>
               <StyledLongtext variant="p">
                  <br />
                  The hotel will provide guests with air-conditioned rooms
                  offering
                  <br />
                  a desk, a kettle, a fridge, a minibar, a safety deposit box, a
                  flat-screen TV,
                  <br /> and a shared bathroom with a shower. At Garden Hotel &
                  SPA the
                  <br />
                  rooms have bed linen and towels.
               </StyledLongtext>
            </Box>
            <StyledNameContainer>
               <CircleIcon className="circle-icon" />
               <Box className="box">
                  <StyledAnna className="Anna" variant="span">
                     Anna Annova
                  </StyledAnna>
                  <StyledGmail className="Gmail" variant="span">
                     anna@gmail.com
                  </StyledGmail>
               </Box>
            </StyledNameContainer>
         </StyledContainer>
      </Box>
   )
}

const StyledSlider = styled(Slider)({
   width: '38.30rem',
   height: 'auto',
   marginLeft: '2.5rem',
   '.slick-prev, .slick-next': {
      // width: '50%',
      // height: 'auto',
   },
})

const StyledNavSlider = styled(Slider)({
   width: '39rem',
   height: '31rem',
   marginLeft: '2.5rem',

   '& .slick-prev, .slick-next': {
      color: 'blue',
   },
   '& .height-of-images': {
      height: '8.5rem',
      width: '12.25rem',
   },
})

const StyledName = styled('div')({
   fontSize: '1rem',
   fontFamily: 'Inter',
   fontWeight: '400',
   marginTop: '1.8rem',
   marginBottom: '-0.3rem',
   padding: '2.5rem',
   display: 'flex',
})
const StyledContainer = styled('div')({
   textAlign: 'start',
   justifyContent: 'center',
   alignItems: 'center',
})

const StyledNameHotel = styled(Typography)({
   justifyContent: 'center',
   fontWeight: 'bold',
   color: 'black',
   textAlign: 'center',
   marginTop: '11rem',
   marginRight: '21.30rem',
})

const StyledAddress = styled(Typography)({
   fontFamily: 'Inter',
   fontSize: '1rem',
   color: 'gray',
   textAlign: 'center',
   marginLeft: '3.30rem',
})
const StyledLongtext = styled(Typography)({
   fontSize: '1rem',
   fontFamily: 'Inter',
   fontWeight: '400',
   color: 'black',
})
const StyledNameContainer = styled(Box)(() => ({
   display: 'flex',
   marginLeft: '3rem',
   marginTop: '2.25rem',
   gap: '0.55rem',

   '& > .circle-icon': {
      color: ' #C4C4C4',
      height: '43px',
      width: '43px',
   },
   '& .box': {
      display: 'flex',
      flexDirection: 'column',
   },
}))

const StyledAnna = styled(Typography)({
   fontWeight: '500',
   fontFamily: 'Inter',
   fontSize: '1rem',
   color: 'black',
})

const StyledGmail = styled(Typography)({
   fontFamily: 'Inter',
   fontWeight: '500',
   fontSize: '1.07rem',
   color: 'gray',
})
export default InnerApplication
