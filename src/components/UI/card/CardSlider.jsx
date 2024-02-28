/* eslint-disable import/no-unresolved */
import { Box, styled } from '@mui/material'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules'
import { DownArrowIcon } from '../../../assets/icons'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'

const CardSlider = ({ img }) => (
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
            <CardImg
               className="card-img"
               src={images}
               alt="house-img"
               loading="lazy"
            />
         </SwiperSlide>
      ))}

      <ArrowButtonConainer>
         <PrevButton className="swiper-button-prev">
            <DownArrowIcon />
         </PrevButton>

         <NextButton className="swiper-button-next">
            <DownArrowIcon />
         </NextButton>
      </ArrowButtonConainer>
   </StyledSwiper>
)

export default CardSlider

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

const ArrowButtonConainer = styled(Box)(() => ({
   '& .swiper-button-disabled': {
      opacity: 1,
      backgroundColor: '#828282',
      cursor: 'default',
   },
}))

const PrevButton = styled(Box)(() => ({
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
const NextButton = styled(Box)(() => ({
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
