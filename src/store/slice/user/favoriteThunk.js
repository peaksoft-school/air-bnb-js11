import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'

export const getFavorites = createAsyncThunk(
   'get/favorites',
   async (_, { rejectWithValue }) => {
      try {
         const { data } = await axiosInstance.get(
            '/api/favorites/getAllFavorites'
         )

         console.log(data)

         return data
      } catch (error) {
         return rejectWithValue(error.response?.data)
      }
   }
)
