import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import { getAnnouncement } from '../../../store/slice/user/house/houseThunk'
import LoadingSpinner from '../../UI/LoadingSpinner'
import { UserNoDataImage } from '../../../assets/images'
import Card from '../../UI/card/Card'

const MyAnnouncement = () => {
   const dispatch = useDispatch()
   const { announcement, isLoading } = useSelector((state) => state.houses)

   useEffect(() => {
      dispatch(getAnnouncement())
   }, [])

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <StyledAnnouncement>
         {announcement && announcement.length > 0 ? (
            announcement.map((booking) => (
               <Card key={booking.id} {...booking} />
            ))
         ) : (
            <img src={UserNoDataImage} alt="no house" />
         )}
      </StyledAnnouncement>
   )
}

export default MyAnnouncement

const StyledAnnouncement = styled(Box)(() => ({
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
