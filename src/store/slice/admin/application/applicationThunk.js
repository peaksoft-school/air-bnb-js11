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

   async ({ id, getData }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.delete(`/api/houses/${id}`)

         return dispatch(applicationRequest(getData))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const acceptCardRequest = createAsyncThunk(
   'application/acceptCard',
   async ({ id, getData }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${id}?value=APPROVE`
         )

         return dispatch(applicationRequest(getData))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const rejectCardRequest = createAsyncThunk(
   'application/rejectCard',
   async ({ houseId, massage, getData }, { dispatch, rejectWithValue }) => {
      try {
         await axiosInstance.post(
            `/api/admin/accepted-application/${houseId}?value=REJECT&messageFromAdminToUser=${massage}`
         )

         return dispatch(applicationRequest(getData))
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
