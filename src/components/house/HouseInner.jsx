import React, { useEffect, useState } from 'react'
import { Avatar, Box, styled, Typography } from '@mui/material'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router'
import Feedback from '../UI/Feedback'
import HouseImageSlider from './HouseImageSlider'
import Button from '../UI/Button'
import Rating from '../UI/rating/Rating'
import {
   blockedHouses,
   deleteHouseAsync,
} from '../../store/slice/admin/user/userThunk'
import { showToast } from '../../utils/helpers/toast'
import BookedCard from '../UI/BookedCard'
import FavoriteCard from '../UI/FavoriteCard'
import { axiosInstance } from '../../configs/axiosInstance'
import FeedbackModal from '../user/FeedbackModal'

const HouseInner = ({
   houseInfo,
   feedbacks,
   rating,
   isMyAnnouncement = false,
}) => {
   const dispatch = useDispatch()
   const navigate = useNavigate()
   const { role } = useSelector((state) => state.auth)
   const { houseId } = useParams()
   const [bookings, setBookings] = useState([])
   const [favorites, setFavorites] = useState([])
   const [openFeedback, setOpenFeedback] = useState(false)

   const toggleFeedbackModal = () => {
      setOpenFeedback((prev) => !prev)
   }

   const deleteHouse = () => {
      dispatch(deleteHouseAsync({ id: houseInfo.id, showToast, navigate }))
   }

   const blocked = houseInfo?.houseStatus === 'BLOCKED'

   const blockHouse = () => {
      dispatch(
         blockedHouses({
            id: houseInfo.id,
            block: blocked,
            showToast,
         })
      )
   }

   const editHouse = () => {
      // edit house func
   }

   const getAllBookings = async () => {
      try {
         const { data } = await axiosInstance.get('/api/bookings', {
            params: {
               houseId,
            },
         })

         setBookings(data)
      } catch (error) {
         console.error(error)
      }
   }
   const getAllFavorites = async () => {
      try {
         const { data } = await axiosInstance.get('/api/favorites', {
            params: {
               houseId,
            },
         })

         setFavorites(data)
      } catch (error) {
         console.error(error)
      }
   }

   useEffect(() => {
      getAllBookings()
   }, [])

   useEffect(() => {
      getAllFavorites()
   }, [])

   return (
      <>
         <StyledContainer>
            <h1 className="title">{houseInfo?.title}</h1>
            <Box>
               <Box className="slider-house">
                  <HouseImageSlider images={houseInfo?.images} />
                  <Box className="house-info">
                     <Typography className="house-type">
                        {houseInfo?.houseType}
                     </Typography>
                     <Typography className="house-guests">
                        {houseInfo?.maxGuests} Guests
                     </Typography>
                     <Typography className="house-name">
                        {houseInfo?.title}
                     </Typography>
                     <Typography className="house-location">
                        {houseInfo?.address}
                     </Typography>
                     <Typography className="house-description">
                        {houseInfo?.description}
                     </Typography>
                     <Box className="user-info">
                        <Avatar
                           src={houseInfo?.userResponse?.image}
                           alt={houseInfo?.userResponse?.image}
                           className="user-avatar"
                        />
                        <Box>
                           <Typography className="user-name">
                              {houseInfo?.userResponse?.fullName}
                           </Typography>
                           <Typography className="user-email">
                              {houseInfo?.userResponse?.email}
                           </Typography>
                        </Box>
                     </Box>
                     {role === 'ADMIN' ? (
                        <>
                           <Box className="button-container">
                              <Button variant="outlined" onClick={deleteHouse}>
                                 Delete
                              </Button>
                              <Button onClick={blockHouse}>
                                 {houseInfo?.houseStatus === 'BLOCKED'
                                    ? 'Unblock'
                                    : 'Block'}
                              </Button>
                           </Box>
                           <Typography className="blocked-text">
                              {houseInfo?.houseStatus === 'BLOCKED'
                                 ? 'This house is already blocked'
                                 : ''}
                           </Typography>
                        </>
                     ) : isMyAnnouncement ? (
                        <Box className="button-container">
                           <Button variant="outlined" onClick={deleteHouse}>
                              Delete
                           </Button>
                           <Button onClick={editHouse}>Edit</Button>
                        </Box>
                     ) : (
                        <h1>Здесь будет компонент для оплаты</h1>
                     )}
                  </Box>
               </Box>

               {isMyAnnouncement ? (
                  bookings && bookings.length > 0 ? (
                     <>
                        <h1 className="title">Booked</h1>
                        {bookings.map((booking) => (
                           <BookedCard {...booking} />
                        ))}
                     </>
                  ) : (
                     <h1 className="title">no bookings</h1>
                  )
               ) : null}

               {isMyAnnouncement ? (
                  favorites && favorites.length > 0 ? (
                     <>
                        <h1 className="title">In favorites</h1>
                        <FavoriteCard {...favorites} />
                     </>
                  ) : (
                     <h1 className="title">no favorites</h1>
                  )
               ) : null}
               <Box className="second-container">
                  <Box className="feedback-container">
                     <h1 className="title">feedback</h1>

                     {feedbacks && feedbacks.length > 0 ? (
                        feedbacks.map((item) => <Feedback {...item} key={1} />)
                     ) : (
                        <h1 className="title">there are no feedbacks yet</h1>
                     )}
                  </Box>
                  <Rating
                     rating={rating}
                     toggleFeedbackModal={toggleFeedbackModal}
                  />
               </Box>
            </Box>
         </StyledContainer>

         <FeedbackModal
            open={openFeedback}
            onClose={toggleFeedbackModal}
            houseId={houseId}
         />
      </>
   )
}

export default HouseInner

const StyledContainer = styled(Box)(() => ({
   padding: '0 0 40px 0',

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
