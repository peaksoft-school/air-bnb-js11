import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'
import { routes } from '../../../../utils/constants/routes'

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

export const acceptInnerCardRequest = createAsyncThunk(
   'getInnerPages/acceptCard',
   async (
      { applicationId, showToast, navigate },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${applicationId}?value=APPROVE`
         )

         navigate(routes.ADMIN.application)

         showToast({
            title: 'Success',
            message: 'Card is successfully accepted :)',
            type: 'success',
         })

         const responseData = await dispatch(
            getInnerPages({ houseId: applicationId })
         )

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

export const rejectInnerCardRequest = createAsyncThunk(
   'getInnerPages/rejectCard',
   async (
      { applicationId, massage, showToast, navigate },
      { dispatch, rejectWithValue }
   ) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${applicationId}?value=REJECT&messageFromAdminToUser=${massage}`
         )
         navigate(routes.ADMIN.application)

         showToast({
            title: 'Success',
            message: 'Card is successfully rejected :)',
            type: 'success',
         })

         return dispatch(getInnerPages({ houseId: applicationId }))
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
