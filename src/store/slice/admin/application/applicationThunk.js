import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const applicationRequest = createAsyncThunk(
   'application/applicationRequest',
   async ({ accessToken, currentPage, pageSize }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.get(
            `/api/admin/applications?currentPage=${currentPage}&pageSize=${pageSize}`,
            accessToken
         )
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const deleteCardRequest = createAsyncThunk(
   'application/deleteCard',
   async ({ id, getData, showToast }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/houses/${id}`)

         showToast({
            title: 'Success',
            message: 'Card is successfully deleted :)',
            type: 'success',
         })

         const responseData = await dispatch(applicationRequest(getData))

         return responseData
      } catch (error) {
         showToast({
            title: 'Error',
            message: 'Failed to delete card :(',
            type: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const acceptCardRequest = createAsyncThunk(
   'application/acceptCard',
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

         const responseData = await dispatch(applicationRequest(getData))

         return responseData
      } catch (error) {
         showToast({
            title: 'Error',
            message: 'Failed to accept card :(',
            type: 'error',
         })

         return rejectWithValue(error)
      }
   }
)

export const rejectCardRequest = createAsyncThunk(
   'application/rejectCard',
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

         const responseData = await dispatch(applicationRequest(getData))

         return responseData
      } catch (error) {
         showToast({
            title: 'Error',
            message: 'Failed to reject card :(',
            type: 'error',
         })

         return rejectWithValue(error)
      }
   }
)
