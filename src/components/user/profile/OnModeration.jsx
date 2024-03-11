import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Box, styled } from '@mui/material'
import { getModeration } from '../../../store/slice/user/house/houseThunk'
import LoadingSpinner from '../../UI/LoadingSpinner'
import Card from '../../UI/card/Card'
import { UserNoDataImage } from '../../../assets/images'

const OnModeration = () => {
   const dispatch = useDispatch()
   const { announcement, isLoading } = useSelector((state) => state.houses)

   useEffect(() => {
      dispatch(getModeration())
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

export default OnModeration

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
