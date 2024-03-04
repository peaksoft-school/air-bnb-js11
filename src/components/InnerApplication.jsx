import React, { useRef, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, Typography, styled } from '@mui/material'
import CircleIcon from '@mui/icons-material/Circle'
import { useNavigate, useParams } from 'react-router'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Button from './UI/Button'
import RejectedModal from './UI/admin/RejectedModal'
import {
   acceptInnerCardRequest,
   getInnerPages,
   rejectInnerCardRequest,
} from '../store/slice/admin/inner-application/InnerApplicationThunk'
import { showToast } from '../utils/helpers/toast'

const InnerApplication = () => {
   const sliderRef1 = useRef(null)
   const sliderRef2 = useRef(null)
   const dispatch = useDispatch()
   const { applicationId } = useParams()
   const [isOpen, setIsOpen] = useState(false)
   const [massage, setMassage] = useState('')
   const navigate = useNavigate()

   const selector = useSelector((state) => state.innerPage)

   useEffect(() => {
      dispatch(getInnerPages({ houseId: applicationId }))
   }, [dispatch, applicationId])

   const { house } = selector.innerPage

   if (!house) {
      return null
   }

   const sendReject = () => {
      dispatch(
         rejectInnerCardRequest({ applicationId, massage, showToast, navigate })
      )
      setIsOpen((prev) => !prev)
      setMassage('')
   }

   const handleReject = () => {
      setIsOpen((prev) => !prev)
      setMassage('')
   }

   const handleAccepted = () => {
      dispatch(acceptInnerCardRequest({ applicationId, showToast, navigate }))
   }

   const handleChangeMassageValue = (e) => setMassage(e.target.value)

   const settings = {
      slidesToShow: 1,
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
            <StyledPath>
               Application
               <span className="path-house-name"> / {house.name}</span>
            </StyledPath>
            <StyledName variant="h3">{house.name}</StyledName>
            <StyledSlider {...settings} className="slider-for" ref={sliderRef1}>
               {house.images &&
                  house.images.map((image, index) => (
                     <img key={image} src={image} alt={`House ${index}`} />
                  ))}
            </StyledSlider>

            <StyledNavSlider
               {...navSettings}
               className="slider-nav"
               ref={sliderRef2}
            >
               {house.images &&
                  house.images.map((image, index) => (
                     <div key={image}>
                        <img
                           className="height-of-images"
                           src={image}
                           alt={`Thumbnail ${index}`}
                        />
                     </div>
                  ))}
            </StyledNavSlider>
         </Box>
         <StyledContainer>
            <StyledNameHotel variant="h5">{house.name}</StyledNameHotel>
            <StyledAddress variant="span">{house.address}</StyledAddress>
            <Box style={{ display: 'flex' }}>
               <StyledLongtext variant="p">{house.description}</StyledLongtext>
            </Box>
            <StyledNameContainer>
               <CircleIcon className="circle-icon" />
               <Box className="box">
                  <StyledAnna className="Anna">
                     {house.userResponse.fullName}
                  </StyledAnna>
                  <StyledGmail className="Gmail">
                     {house.userResponse.email}
                  </StyledGmail>
               </Box>
            </StyledNameContainer>
            <Box className="button-box">
               <Button
                  variant="outlined"
                  className="outlined-button"
                  onClick={handleReject}
               >
                  REJECT
               </Button>
               <Button className="normal-button" onClick={handleAccepted}>
                  ACCEPT
               </Button>
            </Box>
         </StyledContainer>
         <RejectedModal
            isOpen={isOpen}
            onClose={handleReject}
            value={massage}
            onChange={handleChangeMassageValue}
            sendRequest={sendReject}
         />
      </Box>
   )
}

const StyledSlider = styled(Slider)({
   width: '38.30rem',
   height: 'auto',
   marginLeft: '2.5rem',
   '.slick-prev, .slick-next': {},
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

const StyledPath = styled(Typography)({
   fontSize: '16px',
   fontWeight: '400',
   fontFamily: 'Inter',
   color: 'gray',
   position: 'relative',
   top: '2.30rem',
   left: '2.40rem',

   '& .path-house-name': {
      color: 'black',
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
   marginLeft: '3.30rem',

   '& .button-box': {
      width: '25rem',
      gap: '20px',
      display: 'flex',
      marginTop: '3.5625rem',

      '& .outlined-button': {
         border: '1px solid #DD8A08',
         color: ' #DD8A08',
         width: '12.25rem',
         height: '2.3125rem',
         top: '22.625 ',
         gap: '5rem',
         '&:hover': {
            border: 'white',
         },
      },
      '& .normal-button': {
         borderRadius: '0.5rem',
         width: '12.25rem',
         height: '2.3125rem',
         top: '35.625 ',
      },
   },
})

const StyledNameHotel = styled(Typography)({
   textAlign: 'start',
   fontWeight: 'bold',
   color: 'black',
   marginTop: '11rem',
})

const StyledAddress = styled(Typography)({
   fontFamily: 'Inter',
   fontSize: '1rem',
   color: 'gray',
   textAlign: 'center',
})

const StyledLongtext = styled(Typography)({
   fontSize: '1rem',
   fontFamily: 'Inter',
   fontWeight: '400',
   color: 'black',
})

const StyledNameContainer = styled(Box)(() => ({
   display: 'flex',
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
