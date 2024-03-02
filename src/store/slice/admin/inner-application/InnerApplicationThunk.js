import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const getInnerPages = createAsyncThunk(
   'get/getInnerPages',
   async ({ houseId }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(`/api/houses/${houseId}`)
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const PAGES_THUNK = {
   getInnerPages,
}
