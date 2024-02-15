import React, { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { useParams } from 'react-router'
import Card from '../../../UI/card/Card'
import { axiosInstance } from '../../../../configs/axiosInstance'
import LoadingSpinner from '../../../UI/LoadingSpinner'
import Button from '../../../UI/Button'

const Announcement = () => {
   const { userId } = useParams()
   const [announcements, setAnnouncements] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const getUserAnnouncements = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get(
            `api/houses/announcements/${userId}`
         )
         setAnnouncements(data)
         return setIsLoading(false)
      } catch (error) {
         return error
      }
   }

   useEffect(() => {
      getUserAnnouncements()
   }, [])

   const bookingOptions = [
      {
         title: 'Block',
         onClick: (id) => {
            console.log(`Block ${id}`)
         },
      },
      {
         title: 'Delete',
         onClick: (id) => {
            console.log(`delete ${id}`)
         },
      },
   ]

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <>
         <StyledBtnCont>
            <Button>block all announcememt</Button>
         </StyledBtnCont>
         <StyledBooking>
            {announcements.map(
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
      </>
   )
}

export default Announcement

const StyledBooking = styled(Box)(() => ({
   display: 'flex',
   gap: '20px',
}))

const StyledBtnCont = styled(Box)(() => ({
   position: 'absolute',
   zIndex: 1,
   left: 120,
   bottom: -30,
}))
