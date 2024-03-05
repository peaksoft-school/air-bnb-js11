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

export const deleteHouseAsync = createAsyncThunk(
   'user/deleteHouse',
   async ({ id, showToast, getUserHouses, navigate }, { rejectWithValue }) => {
      try {
         await axiosInstance.delete(`api/houses/${id}`)

         if (navigate) {
            navigate(-1)
         }

         if (getUserHouses) {
            getUserHouses()
         }
         return showToast({
            title: 'Delete',
            message: 'Successfully deleted',
            type: 'success',
         })
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
   async ({ id, showToast, getUserHouses }, { rejectWithValue }) => {
      try {
         await axiosInstance.post(`api/houses/blockedHousesById?houseId=${id}`)

         if (getUserHouses) {
            getUserHouses()
         }

         return showToast({
            title: 'Block',
            message: 'Successfully blocked',
            type: 'success',
         })
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
