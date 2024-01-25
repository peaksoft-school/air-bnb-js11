/* eslint-disable import/no-unresolved */
import { styled } from '@mui/material'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { ArrowIcon } from '../../../assets'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const CardImgSlider = ({ img }) => {
   return (
      <StyledSwiper
         pagination
         modules={[Navigation, Pagination]}
         navigation={{
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
         }}
      >
         {img.map((images) => (
            <SwiperSlide key={images}>
               <CardImg src={images} alt="" />
            </SwiperSlide>
         ))}

         <ArrowButtonConainer>
            <PrevButton className="swiper-button-prev">
               <ArrowIcon />
            </PrevButton>
            <NextButton className="swiper-button-next">
               <ArrowIcon />
            </NextButton>
         </ArrowButtonConainer>
      </StyledSwiper>
   )
}

export default CardImgSlider

const CardImg = styled('img')(() => ({
   width: '100%',
   height: '200px',
   objectFit: 'cover',
   borderRadius: '4px 4px 0 0',
}))

const StyledSwiper = styled(Swiper)(() => ({
   '& .swiper-pagination-bullets': {
      '& .swiper-pagination-bullet': {
         background: '#fff',
         opacity: 1,
      },
      '& .swiper-pagination-bullet-active': {
         background: '#dd8a08',
      },
   },
}))

const ArrowButtonConainer = styled('div')(() => ({
   '& .swiper-button-disabled': {
      opacity: 1,
      backgroundColor: '#828282',
      cursor: 'default',
   },
}))

const PrevButton = styled('div')(() => ({
   backgroundColor: '#dd8a08',
   color: '#fff',
   width: '40px',
   height: '40px',
   padding: '10px 12px 10px 10px',
   borderRadius: '50%',

   '& svg': {
      transform: 'rotate(90deg)',
      '& path': {
         fill: '#fff',
         stroke: '#fff',
      },
   },

   '&::after': {
      content: 'none',
   },
}))
const NextButton = styled('div')(() => ({
   backgroundColor: '#dd8a08',
   color: '#fff',
   width: '40px',
   height: '40px',
   padding: '10px 10px 10px 12px',
   borderRadius: '50%',

   '& svg': {
      transform: 'rotate(270deg)',
      '& path': {
         fill: '#fff',
         stroke: '#fff',
      },
   },

   '&::after': {
      content: 'none',
   },
}))
