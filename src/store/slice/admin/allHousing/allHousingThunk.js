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
   async ({ id, getData, showToast }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/houses/${id}`)

         showToast({
            title: 'Success',
            message: 'Card is successfully deleted :)',
            type: 'success',
         })

         const responseData = await dispatch(getFilteredHousingRequest(getData))

         return responseData
      } catch (error) {
         showToast({
            title: 'Error',
            message: 'An error occurred while deleting the card :(',
            type: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const acceptCardAllHousingRequest = createAsyncThunk(
   'allHousing/acceptCardallHousing',
   async ({ id, getData, showToast }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${id}?value=APPROVE`
         )

         showToast({
            title: 'Success',
            message: 'Card is successfully accepted :)',
            type: 'success',
         })

         const responseData = await dispatch(getFilteredHousingRequest(getData))

         return responseData
      } catch (error) {
         showToast({
            title: 'Error',
            message: 'An error occurred while accepting the card :(',
            type: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const rejectCardAllHousingRequest = createAsyncThunk(
   'allHousing/rejectCardallHousing',
   async (
      { houseId, massage, getData, showToast },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${houseId}?value=REJECT&messageFromAdminToUser=${massage}`
         )

         showToast({
            title: 'Success',
            message: 'Card is successfully rejected :)',
            type: 'success',
         })

         const responseData = await dispatch(getFilteredHousingRequest(getData))

         return responseData
      } catch (error) {
         showToast({
            title: 'Error',
            message: 'An error occurred while rejecting the card :(',
            type: 'error',
         })

         return rejectWithValue(error)
      }
   }
)
