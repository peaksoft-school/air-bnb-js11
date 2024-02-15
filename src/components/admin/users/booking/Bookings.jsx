import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { useParams } from 'react-router'
import Card from '../../../UI/card/Card'
import { axiosInstance } from '../../../../configs/axiosInstance'
import LoadingSpinner from '../../../UI/LoadingSpinner'
import { showToast } from '../../../../utils/helpers/toast'

const Bookings = () => {
   const { userId } = useParams()
   const [bookings, setBookings] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const getUserBookings = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get(
            `api/houses/bookings/${userId}`
         )
         setBookings(data)
         return setIsLoading(false)
      } catch (error) {
         return error
      }
   }

   useEffect(() => {
      getUserBookings()
   }, [])

   const deleteHouse = async (id) => {
      try {
         await axiosInstance.delete(`api/houses/${id}`)
         showToast({
            title: 'Delete',
            message: 'Successfully deleted',
            type: 'success',
         })
         return getUserBookings()
      } catch (e) {
         return e
      }
   }

   const bookingOptions = [
      {
         title: 'Block',
         onClick: (id) => {
            console.log(`Block ${id}`)
         },
      },
      {
         title: 'Delete',
         onClick: deleteHouse,
      },
   ]

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <StyledBooking>
         {bookings.map(
            ({ maxGuests, images, address, price, rating, title, id }) => (
               <Card
                  key={id}
                  guests={maxGuests}
                  images={images}
                  localtion={address}
                  price={price}
                  rating={rating}
                  title={title}
                  option={bookingOptions}
                  id={id}
               />
            )
         )}
      </StyledBooking>
   )
}

export default Bookings

const StyledBooking = styled(Box)(() => ({
   display: 'flex',
   gap: '20px',
}))
