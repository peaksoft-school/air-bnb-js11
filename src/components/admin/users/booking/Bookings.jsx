import { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import Card from '../../../UI/card/Card'
import { axiosInstance } from '../../../../configs/axiosInstance'
import LoadingSpinner from '../../../UI/LoadingSpinner'
import { showToast } from '../../../../utils/helpers/toast'
import {
   blockedHouses,
   deleteHouseAsync,
} from '../../../../store/slice/admin/user/userThunk'
import { AdminNoDataImage } from '../../../../assets/images'

const Bookings = () => {
   const dispatch = useDispatch()
   const { userId } = useParams()
   const [bookings, setBookings] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const getUserHouses = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get(
            `api/admin/bookings/${userId}`
         )
         setBookings(data)
         return setIsLoading(false)
      } catch (error) {
         setIsLoading(false)
         return error
      }
   }

   useEffect(() => {
      getUserHouses()
   }, [])

   const bookingOptions = [
      {
         title: 'Block',
         onClick: (id) => {
            dispatch(
               blockedHouses({ id, setIsLoading, showToast, getUserHouses })
            )
         },
      },
      {
         title: 'Delete',
         onClick: (id) =>
            dispatch(
               deleteHouseAsync({ id, setIsLoading, showToast, getUserHouses })
            ),
      },
   ]

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <StyledBooking>
         {bookings.length > 0 ? (
            bookings.map((booking) => (
               <Card key={booking.id} option={bookingOptions} {...booking} />
            ))
         ) : (
            <img src={AdminNoDataImage} alt="no house" />
         )}
      </StyledBooking>
   )
}

export default Bookings

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
