import { CardMedia, Stack, styled } from '@mui/material'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import Slider from 'react-slick'
import { ArrawLeftSlideIcon, ArrawRightSlideIcon } from '../../assets'

function SampleNextArrow(props) {
   const { className, style, onClick } = props

   return (
      <StyleSamplePrevArrowLeft
         className={className}
         style={{ ...style }}
         onClick={onClick}
      >
         <StyleArrawIconRight>
            <ArrawRightSlideIcon />
         </StyleArrawIconRight>
      </StyleSamplePrevArrowLeft>
   )
}

function SamplePrevArrow(props) {
   const { className, style, onClick } = props
   return (
      <StyleSamplePrevArrowRight
         className={className}
         style={{ ...style }}
         onClick={onClick}
      >
         <StyleArrawIconLeft>
            <ArrawLeftSlideIcon />
         </StyleArrawIconLeft>
      </StyleSamplePrevArrowRight>
   )
}

const CardSlider = ({ images }) => {
   const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      appendDots: (dots) => (
         <StyleDots>
            <StyleUl> {dots} </StyleUl>
         </StyleDots>
      ),
      customPaging: () => <StyleSamplePrevNext />,
      nextArrow: <SampleNextArrow />,
      prevArrow: <SamplePrevArrow />,
   }

   return (
      <Slider {...settings}>
         {images.map((item, index) => (
            <StyleCardMedia
               key={item.id}
               alt={`Slide ${index + 1}`}
               image={item.img}
            />
         ))}
      </Slider>
   )
}

export default CardSlider

const StyleSamplePrevNext = styled(FiberManualRecordIcon)(() => ({
   width: '15px',
   height: '15px',
}))

const StyleArrawIconLeft = styled(Stack)(() => ({
   margin: '0.4rem',
}))

const StyleArrawIconRight = styled(Stack)(() => ({
   margin: '0.4rem',
}))

const StyleDots = styled(CardMedia)(() => ({
   position: 'absolute',
   bottom: '10px',
   color: '#fff',
   '& .slick-active': {
      color: '#FFBE58',
   },
}))

const StyleUl = styled(CardMedia)(() => ({ margin: '0px' }))

const StyleCardMedia = styled(CardMedia)(() => ({
   cursor: 'pointer',
   backgroundSize: '100% 100%',
   aspectRatio: '1300/900',
}))

const StyleSamplePrevArrowLeft = styled('div')(() => ({
   position: 'absolute',
   right: '0.5rem',
   zIndex: 10,
   backgroundColor: '#ccc',
   height: 32,
   width: 32,
   borderRadius: '50%',
   display: 'flex',
   alignItems: 'start',
   justifyContent: 'start',
   '&:hover': {
      backgroundColor: '#DD8A08',
   },
   '&::before': {
      display: 'none',
   },
}))

const StyleSamplePrevArrowRight = styled('div')(() => ({
   position: 'absolute',
   left: '0.5rem',
   zIndex: 10,
   backgroundColor: '#ccc',
   height: 32,
   width: 32,
   borderRadius: '50%',
   display: 'flex',
   alignItems: 'start',
   justifyContent: 'start',
   '&:hover': {
      backgroundColor: '#DD8A08',
   },
   '&::before': {
      display: 'none',
   },
}))
