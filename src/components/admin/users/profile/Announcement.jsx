import { useEffect, useState } from 'react'
import { Box, styled } from '@mui/material'
import { useParams } from 'react-router'
import { useDispatch } from 'react-redux'
import Card from '../../../UI/card/Card'
import { axiosInstance } from '../../../../configs/axiosInstance'
import LoadingSpinner from '../../../UI/LoadingSpinner'
import Button from '../../../UI/Button'
import { showToast } from '../../../../utils/helpers/toast'
import {
   blockedHouses,
   deleteHouseAsync,
} from '../../../../store/slice/admin/user/userThunk'
import { AdminNoDataImage } from '../../../../assets/images'

const Announcement = () => {
   const dispatch = useDispatch()
   const { userId } = useParams()
   const [announcements, setAnnouncements] = useState([])
   const [isLoading, setIsLoading] = useState(true)

   const getUserHouses = async () => {
      setIsLoading(true)
      try {
         const { data } = await axiosInstance.get(
            `api/admin/announcements/${userId}`
         )

         return setAnnouncements(data)
      } catch (error) {
         showToast({
            title: 'Get User',
            message: error.response?.message,
            type: 'error',
         })
         return error
      } finally {
         setIsLoading(false)
      }
   }

   useEffect(() => {
      getUserHouses()
   }, [])

   const blockAllUserHouse = async () => {
      setIsLoading(true)
      try {
         await axiosInstance.post(`api/houses/blockAllAds/${userId}`)
         showToast({
            title: 'Block all house',
            message: 'Houses have been successfully blocked',
            type: 'success',
         })
         return getUserHouses()
      } catch (error) {
         showToast({
            title: 'Block all house',
            message: error.response?.message,
            type: 'error',
         })
         return error
      } finally {
         setIsLoading(false)
      }
   }

   const bookingOptions = [
      {
         title: 'Block',
         onClick: (id) => {
            dispatch(
               blockedHouses({ id, block: false, showToast, getUserHouses })
            )
         },
      },
      {
         title: 'Delete',
         onClick: (id) => {
            dispatch(deleteHouseAsync({ id, showToast, getUserHouses }))
         },
      },
   ]

   if (isLoading) {
      return <LoadingSpinner />
   }

   return (
      <>
         {announcements.length > 0 ? (
            <StyledButtonsContainer>
               <Button onClick={blockAllUserHouse}>
                  block all announcement
               </Button>
            </StyledButtonsContainer>
         ) : null}

         <StyledBooking>
            {announcements.length > 0 ? (
               announcements.map((announcememt) => (
                  <Card
                     key={announcememt.id}
                     option={bookingOptions}
                     onNavigate
                     {...announcememt}
                  />
               ))
            ) : (
               <img src={AdminNoDataImage} alt="no house" />
            )}
         </StyledBooking>
      </>
   )
}

export default Announcement

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

const StyledButtonsContainer = styled(Box)(() => ({
   position: 'absolute',
   zIndex: 1,
   left: 80,
   bottom: 140,
   fontTransform: 'uppercase',
}))
