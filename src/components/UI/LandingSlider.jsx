import { styled } from '@mui/material'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ROOMS } from '../../utils/constants'
import { SlickNextIcon, SlickPrevIcon } from '../../assets/index'

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
}

const LandingSlider = () => {
   return (
      <div>
         <StyledSlider {...settings}>
            {ROOMS.map((room) => (
               <StyledDiv key={room.name}>
                  <img
                     src={room.img}
                     alt={room.name}
                     style={{ width: '14rem', height: '19.81rem' }}
                  />
               </StyledDiv>
            ))}
         </StyledSlider>
         {/* <img src={PrevArrow} alt="prev-arrow" {...settings} /> */}
         {/* <img src={NextArrow} alt="next-arrow" {...settings} /> */}
      </div>
   )
}

export default LandingSlider

const StyledSlider = styled(Slider)({
   maxWidth: '400px',
   // '& .slick-prev, .slick-next': {
   //    position: 'absolute',
   //    top: '23.5rem',
   //    zIndex: '100',
   // },
   // '& .slick-prev': {
   //    position: 'absolute',
   //    left: '9.5rem',
   // },
   // '& .slick-next': {
   //    position: 'absolute',
   //    right: '9.5rem',
   // },
})

const StyledDiv = styled('div')({})
