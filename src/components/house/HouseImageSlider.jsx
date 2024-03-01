import React, { useRef } from 'react'
import { Box, styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import {
   ImgAsmanHotelGuestHouse,
   ImgAsmanGuestHoues,
   ImgAsmanGuestHotel,
} from '../../assets/images'

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
            <StyledSlider {...settings} className="slider-for" ref={sliderRef1}>
               <img src={ImgAsmanHotelGuestHouse} alt="Bighool" />
               <img src={ImgAsmanGuestHoues} alt="smallhool1" />
               <img src={ImgAsmanGuestHotel} alt="smallhool2" />
            </StyledSlider>
            <StyledNavSlider
               {...navSettings}
               className="slider-nav"
               ref={sliderRef2}
            >
               <div>
                  <img
                     className="height-of-images"
                     src={ImgAsmanHotelGuestHouse}
                     alt="Bighool"
                  />
               </div>
               <div>
                  <img
                     className="height-of-images"
                     src={ImgAsmanGuestHoues}
                     alt="smallhool1"
                  />
               </div>
               <div>
                  <img
                     className="height-of-images"
                     src={ImgAsmanGuestHotel}
                     alt="smallhool2"
                  />
               </div>
            </StyledNavSlider>
         </Box>
      </Box>
   )
}

export default InnerApplication

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
