import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Box, styled } from '@mui/material'
import HouseInner from '../../house/HouseInner'
import { getAnnouncementById } from '../../../store/slice/user/house/houseThunk'
import {
   getAnnouncementFeedback,
   getAnnouncementRating,
} from '../../../store/slice/admin/user/userThunk'
import BreadCrumbs from '../../UI/BreadCrumbs'

const InnerAnnouncement = () => {
   const dispatch = useDispatch()
   const { houseId } = useParams()

   const { announcementById } = useSelector((state) => state.houses)
   const { feedbacks, rating } = useSelector((state) => state.userInfo)

   useEffect(() => {
      dispatch(getAnnouncementById(houseId))
   }, [])
   useEffect(() => {
      dispatch(getAnnouncementFeedback(houseId))
   }, [])
   useEffect(() => {
      dispatch(getAnnouncementRating(houseId))
   }, [])

   const INNER_ANNOUNCMENT_BREADCRUMBS = [
      {
         label: 'main',
         href: '/',
      },
      {
         label: 'profile',
         href: '/user/profile',
      },
      {
         label: announcementById.title,
         href: `/user/profile/${announcementById.id}`,
      },
   ]

   return (
      <StyledContainer>
         <BreadCrumbs links={INNER_ANNOUNCMENT_BREADCRUMBS} />
         <HouseInner
            houseInfo={announcementById}
            feedbacks={feedbacks}
            rating={rating}
            isMyAnnouncement
         />
      </StyledContainer>
   )
}

export default InnerAnnouncement

const StyledContainer = styled(Box)(() => ({
   margin: '0 0 0 100px',
   padding: '40px 0 0 0',
}))
