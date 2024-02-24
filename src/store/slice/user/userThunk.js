import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

export const fetchProfile = createAsyncThunk(
   'get/userProfile',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get('api/users/profile')
         return data
      } catch (error) {
         return rejectWithValue(error.response?.data)
      }
   }
)
