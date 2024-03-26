import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams } from 'react-router'
import { getAnnouncementById } from '../../../store/slice/user/house/houseThunk'
import {
   getAnnouncementFeedback,
   getAnnouncementRating,
} from '../../../store/slice/admin/user/userThunk'
import HouseInner from '../../../components/house/HouseInner'

const InnerRegion = () => {
   const dispatch = useDispatch()
   const { id } = useParams()

   const { announcementById } = useSelector((state) => state.houses)
   const { feedbacks, rating } = useSelector((state) => state.userInfo)

   useEffect(() => {
      dispatch(getAnnouncementById(id))
   }, [])
   useEffect(() => {
      dispatch(getAnnouncementFeedback(id))
   }, [])
   useEffect(() => {
      dispatch(getAnnouncementRating(id))
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

export default InnerRegion
