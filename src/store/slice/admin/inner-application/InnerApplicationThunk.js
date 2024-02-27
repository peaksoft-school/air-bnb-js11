import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getInnerPages = createAsyncThunk(
   'pages/getInnerPages',
   async ({ accessToken, currentPage, pageSize }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/houses/pages?currentPage=${currentPage}&pageSize=${pageSize}`,
            accessToken
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export { getInnerPages }
