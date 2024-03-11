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
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('/api/users/houses')

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
