import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { Box, styled } from '@mui/material'
import HouseInner from '../../../components/house/HouseInner'
import { routes } from '../../../utils/constants/routes'
import {
   getHouseById,
   getAnnouncementFeedback,
   getAnnouncementRating,
} from '../../../store/slice/admin/user/userThunk'
import BreadCrumbs from '../../../components/UI/BreadCrumbs'

const AnnouncementHouse = () => {
   const dispatch = useDispatch()
   const { user, announcement, feedbacks, rating } = useSelector(
      (state) => state.userInfo
   )

   const { announcementId, userId } = useParams()

   useEffect(() => {
      dispatch(getHouseById(announcementId))
   }, [])

   useEffect(() => {
      dispatch(getAnnouncementFeedback(announcementId))
   }, [])

   useEffect(() => {
      dispatch(getAnnouncementRating(announcementId))
   }, [])

   const ANNOUNCEMENT_BREADCRUMBS = [
      {
         label: 'Users',
         href: routes.ADMIN.users,
      },
      {
         label: user?.name,
         href: `${routes.ADMIN.users}/${userId}`,
      },
      {
         label: announcement.title,
         href: announcementId,
      },
   ]

   return (
      <StyledContainer>
         <BreadCrumbs links={ANNOUNCEMENT_BREADCRUMBS} />

         <HouseInner
            houseInfo={announcement}
            feedbacks={feedbacks}
            rating={rating}
            isMyAnnouncement={false}
         />
      </StyledContainer>
   )
}

export default AnnouncementHouse

const StyledContainer = styled(Box)(() => ({
   padding: '45px 40px',
}))
