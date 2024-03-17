import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const getUserInfo = createAsyncThunk(
   'user/getUserProfile',
   async (_, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get('api/users/profile')

         return response.data
      } catch (error) {
         return rejectWithValue(error.response?.data)
      }
   }
)

export const USER_THUNKS = {
   getUserInfo,
}
