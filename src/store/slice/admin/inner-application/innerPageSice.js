import { createSlice } from '@reduxjs/toolkit'
import { getInnerPages } from './InnerApplicationThunk'

const initialState = {
   houses: [],
   totalPages: null,
   loading: false,
   error: null,
}

const pageSlices = createSlice({
   name: 'innerPage',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getInnerPages.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(getInnerPages.fulfilled, (state, { payload }) => {
            state.houses = payload.houseResponses
            state.totalPages = payload.totalPages
            state.loading = false
         })
         .addCase(getInnerPages.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })
   },
})
