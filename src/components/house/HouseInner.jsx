import React from 'react'
import { Box, styled, Typography } from '@mui/material'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import Feedback from '../UI/Feedback'
import InnerApplication from './HouseImageSlider'
import Button from '../UI/Button'
import Rating from '../UI/rating/Rating'
import {
   blockedHouses,
   deleteHouseAsync,
} from '../../store/slice/admin/user/userThunk'
import { showToast } from '../../utils/helpers/toast'

const HouseInner = ({ houseInfo, feedbacks, rating }) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()

   const deleteHouse = () => {
      dispatch(deleteHouseAsync({ id: houseInfo.id, showToast, navigate }))
   }

   const blockHouse = () => {
      dispatch(blockedHouses({ id: houseInfo.id, showToast }))
   }

   const status = houseInfo.houseStatus

   return (
      <StyledContainer>
         <h1 className="title">{houseInfo.name}</h1>
         <Box>
            <Box className="slider-house">
               <InnerApplication />
               <Box className="house-info">
                  <Typography className="house-type">
                     {houseInfo.houseType}
                  </Typography>
                  <Typography className="house-guests">
                     {houseInfo.maxGuests} Guests
                  </Typography>
                  <Typography className="house-name">
                     {houseInfo.name}
                  </Typography>
                  <Typography className="house-location">
                     {houseInfo.address}
                  </Typography>
                  <Typography className="house-description">
                     {houseInfo.description}
                  </Typography>
                  <Box className="user-info">
                     <img
                        src={houseInfo.userResponse.image}
                        alt="asdaw"
                        width={40}
                        height={40}
                        className="user-avatar"
                     />
                     <Box>
                        <Typography className="user-name">
                           {houseInfo.userResponse.fullName}
                        </Typography>
                        <Typography className="user-email">
                           {houseInfo.userResponse.email}
                        </Typography>
                     </Box>
                  </Box>
                  <Box className="button-container">
                     <Button variant="outlined" onClick={deleteHouse}>
                        Delete
                     </Button>
                     <Button
                        onClick={blockHouse}
                        disabled={status === 'BLOCKED'}
                     >
                        Block
                     </Button>
                  </Box>
                  <Typography className="blocked-text">
                     {status === 'BLOCKED'
                        ? 'This house is already blocked'
                        : ''}
                  </Typography>
               </Box>
            </Box>
            <Box className="second-container">
               <Box className="feedback-container">
                  {feedbacks && feedbacks.length > 0 ? (
                     feedbacks.map((item) => (
                        <>
                           <h1 className="title">feedback</h1>

                           <Feedback {...item} key={1} />
                        </>
                     ))
                  ) : (
                     <h1 className="title">there are no feedbacks yet</h1>
                  )}
               </Box>
               <Rating rating={rating} />
            </Box>
         </Box>
      </StyledContainer>
   )
}

export default HouseInner

const StyledContainer = styled(Box)(() => ({
   '& .title': {
      textTransform: 'uppercase',
      fontFamily: 'inherit',
      fontWeight: 400,
      color: '#222',
      margin: '0 0 45px 0',
   },

   '& .slider-house': {
      display: 'flex',
      gap: '68px',

      '& .house-type': {
         display: 'inline-block',
         margin: '0 15px 20px 0',
         backgroundColor: '#fff0f6',
         border: '1px solid #ffcbe0',
         padding: '6px 8px',
      },
      '& .house-guests': {
         display: 'inline-block',
         backgroundColor: '#fff0f6',
         border: '1px solid #ffcbe0',
         padding: '6px 8px',
      },

      '& .house-name': {
         fontSize: '20px',
      },

      '& .house-location': {
         color: '#828282',
         margin: '0 0 20px 0',
      },

      '& .house-description': {
         margin: '0 0 20px 0',
         fontSize: '16px',
      },

      '& .user-info': {
         display: 'flex',
         gap: '16px',
         alignItems: 'center',
         margin: '0 0 60px 0',

         '& .user-avatar': {
            borderRadius: '50%',
         },

         '& .user-name': {},
         '& .user-email': {
            color: '#828282',
         },
      },

      '& .button-container': {
         display: 'flex',
         gap: '20px',
         margin: '0 0 20px 0',

         '.MuiButtonBase-root': {
            width: '200px',
         },
      },

      '& .blocked-text': {
         textAlign: 'center',
         color: '#f00',
      },
   },

   '& .second-container': {
      display: 'flex',
      alignItems: 'flex-start',
      gap: '130px',

      '& .feedback-container': {
         maxWidth: '630px',
         minWidth: '500px',
         width: '100%',
      },
   },
}))
