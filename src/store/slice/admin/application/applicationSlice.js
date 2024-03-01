import { createSlice } from '@reduxjs/toolkit'
import {
   acceptCardRequest,
   applicationRequest,
   deleteCardRequest,
   rejectCardRequest,
} from './applicationThunk'

const initialState = {
   houses: [],
   totalPages: null,
   loading: false,
   error: null,
}

export const applicationSlice = createSlice({
   name: 'application',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(applicationRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(applicationRequest.fulfilled, (state, { payload }) => {
            state.houses = payload.houseResponses
            state.totalPages = payload.totalPages
            state.loading = false
         })
         .addCase(applicationRequest.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })

      builder
         .addCase(deleteCardRequest.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })
         .addCase(deleteCardRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })

      builder
         .addCase(acceptCardRequest.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })
         .addCase(acceptCardRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })

      builder
         .addCase(rejectCardRequest.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })
         .addCase(rejectCardRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })
   },
})

export default applicationSlice.reducer
