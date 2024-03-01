import { createSlice } from '@reduxjs/toolkit'
import {
   acceptCardAllHousingRequest,
   deleteCardAllHousingRequest,
   getFilteredHousingRequest,
   rejectCardAllHousingRequest,
} from './allHousingThunk'

const initialState = {
   allHouses: [],
   loading: false,
   error: null,
}

export const allHousingSlice = createSlice({
   name: 'allHousing',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getFilteredHousingRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(getFilteredHousingRequest.fulfilled, (state, { payload }) => {
            state.allHouses = payload
            state.loading = false
         })
         .addCase(getFilteredHousingRequest.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })

      builder
         .addCase(
            deleteCardAllHousingRequest.rejected,
            (state, { payload }) => {
               state.loading = false
               state.error = payload
            }
         )
         .addCase(deleteCardAllHousingRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })

      builder
         .addCase(
            acceptCardAllHousingRequest.rejected,
            (state, { payload }) => {
               state.loading = false
               state.error = payload
            }
         )
         .addCase(acceptCardAllHousingRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })

      builder
         .addCase(
            rejectCardAllHousingRequest.rejected,
            (state, { payload }) => {
               state.loading = false
               state.error = payload
            }
         )
         .addCase(rejectCardAllHousingRequest.pending, (state) => {
            state.loading = true
            state.error = null
         })
   },
})

export default allHousingSlice.reducer
