import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const getUser = createAsyncThunk(
   'user/getUser',
   async (userId, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`api/users/user/${userId}`)

         return data
      } catch (error) {
         return rejectWithValue(error.response.message)
      }
   }
)

export const getHouseById = createAsyncThunk(
   'userAnnouncement/getAnnouncement',
   async (announcementId, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `api/houses/${announcementId}`
         )

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAnnouncementFeedback = createAsyncThunk(
   'announcementFeedback/getFeedback',
   async (announcementId, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `api/feedbacks/${announcementId}`
         )

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAnnouncementRating = createAsyncThunk(
   'announcementRating/getRating',
   async (announcementId, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            `/api/feedbacks/${announcementId}/ratings`
         )

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteHouseAsync = createAsyncThunk(
   'user/deleteHouse',
   async (
      { id, showToast, getUserHouses, navigate },
      { rejectWithValue, dispatch }
   ) => {
      try {
         await axiosInstance.delete(`api/houses/${id}`)

         if (navigate) {
            navigate(-1)
         }

         showToast({
            title: 'Delete',
            message: 'Successfully deleted',
            type: 'success',
         })
         if (getUserHouses) {
            return getUserHouses()
         }
         return dispatch(getHouseById(id))
      } catch (error) {
         showToast({
            title: 'Delete',
            message: error.response?.message,
            type: 'error',
         })
         return rejectWithValue(error.response.message)
      }
   }
)

export const blockedHouses = createAsyncThunk(
   'user/blockedHouses',
   async (
      { id, block, showToast, getUserHouses },
      { rejectWithValue, dispatch }
   ) => {
      try {
         const { data } = await axiosInstance.post(
            `api/houses/blockedHousesById?houseId=${id}&blockOrUnblock=${block}`
         )

         showToast({
            title: 'Block',
            message: data.message,
            type: 'success',
         })
         if (getUserHouses) {
            return getUserHouses()
         }
         return dispatch(getHouseById(id))
      } catch (error) {
         showToast({
            title: 'Block',
            message: error.response?.message,
            type: 'error',
         })
         return rejectWithValue(error.response.message)
      }
   }
)
