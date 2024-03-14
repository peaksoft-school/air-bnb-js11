import { Box, styled } from '@mui/material'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { UserNoDataImage } from '../../../assets/images'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Card from '../../UI/card/Card'
import { getBookings } from '../../../store/slice/user/house/houseThunk'

const MyBookings = () => {
   const dispatch = useDispatch()
   const { bookings, isLoading } = useSelector((state) => state.houses)

   useEffect(() => {
      dispatch(getBookings())
   }, [])

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <StyledBooking>
         {bookings && bookings.length > 0 ? (
            bookings.map((booking) => (
               <Card key={booking.id} isMyBooking {...booking} />
            ))
         ) : (
            <img src={UserNoDataImage} alt="no house" />
         )}
      </StyledBooking>
   )
}

export default MyBookings

const StyledBooking = styled(Box)(() => ({
   display: 'flex',
   gap: '20px',

   '& > p': {
      fontSize: '30px',
      margin: '0 auto',
   },

   '& > img': {
      width: '500px',
      margin: '0 auto',
   },
}))
