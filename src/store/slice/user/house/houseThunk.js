import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const getBookings = createAsyncThunk(
   'house/getBookings',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/users/bookings')

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAnnouncement = createAsyncThunk(
   'house/getAnnouncement',
   async ({ houseType, rating, price }, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/users/filter', {
            params: {
               houseType,
               rating,
               price,
            },
         })

         return data.responses
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getAnnouncementById = createAsyncThunk(
   'house/getAnnouncementById',
   async (houseId, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(`/api/houses/${houseId}`)

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const getModeration = createAsyncThunk(
   'house/getModeration',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            '/api/users/moderation/houses'
         )

         return data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteAnnouncement = createAsyncThunk(
   'house/deleteAnnouncement',
   async (houseId, { dispatch, rejectWithValue }) => {
      try {
         axiosInstance.delete(`/api/houses/${houseId}`)

         return dispatch(
            getAnnouncement({ houseType: '', price: '', rating: '' })
         )
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
