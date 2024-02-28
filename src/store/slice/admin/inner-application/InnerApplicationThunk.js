import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

const getInnerPages = createAsyncThunk(
   'pages/getInnerPages',
   async ({ accessToken, id }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/houses/${id}`,
            accessToken
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export { getInnerPages }
