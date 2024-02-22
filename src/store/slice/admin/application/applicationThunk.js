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
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.delete(`/api/houses/${payload}`)
         applicationRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const acceptCardRequest = createAsyncThunk(
   'application/acceptCard',
   async (payload, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/admin/accepted-application/${payload}?value=APPROVE`
         )
         applicationRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const rejectCardRequest = createAsyncThunk(
   'application/rejectCard',
   async ({ houseId, massage }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/admin/accepted-application/${houseId}?value=REJECT&messageFromAdminToUser=${massage}`
         )
         applicationRequest()
         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
