import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const getFilteredHousingRequest = createAsyncThunk(
   'allHousing/getFilteredHousing',
   async ({ status, houseType, rating, price }, { rejectWithValue }) => {
      try {
         const params = {}

         if (status !== 'All') {
            params.status = status
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
         const response = await axiosInstance.get(`/api/admin/house-filter`, {
            params,
         })

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteCardAllHousingRequest = createAsyncThunk(
   'allHousing/deleteCardAllHousing',
   async ({ id, getData }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/houses/${id}`)

         return dispatch(getFilteredHousingRequest(getData))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const acceptCardAllHousingRequest = createAsyncThunk(
   'allHousing/acceptCardallHousing',
   async ({ id, getData }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${id}?value=APPROVE`
         )

         return dispatch(getFilteredHousingRequest(getData))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const rejectCardAllHousingRequest = createAsyncThunk(
   'allHousing/rejectCardallHousing',
   async ({ houseId, massage, getData }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${houseId}?value=REJECT&messageFromAdminToUser=${massage}`
         )

         return dispatch(getFilteredHousingRequest(getData))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
