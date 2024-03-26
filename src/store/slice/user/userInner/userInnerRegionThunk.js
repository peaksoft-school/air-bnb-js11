import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const getUserThunk = createAsyncThunk(
   'users/getUserThunk',
   async (
      { region, houseType, rating, price, accessToken, currentPage, pageSize },
      { rejectWithValue }
   ) => {
      try {
         const params = {}

         if (region !== 'All') {
            params.region = region
         }
         if (houseType !== 'All') {
            params.houseType = houseType
         }
         if (rating !== 'All') {
            params.rating = rating
         }
         if (price !== 'All') {
            params.price = price
         }

         const response = await axiosInstance.get('/api/houses/filtered', {
            params: {
               ...params,
               currentPage,
               pageSize,
            },
            headers: {
               Authorization: `Bearer ${accessToken}`,
            },
         })

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
