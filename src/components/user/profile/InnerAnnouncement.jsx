import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import HouseInner from '../../house/HouseInner'
import { getAnnouncementById } from '../../../store/slice/user/house/houseThunk'
import {
   getAnnouncementFeedback,
   getAnnouncementRating,
} from '../../../store/slice/admin/user/userThunk'

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

   return (
      <div>
         <HouseInner
            houseInfo={announcementById}
            feedbacks={feedbacks}
            rating={rating}
            isMyAnnouncement
         />
      </div>
   )
}

export default InnerAnnouncement
