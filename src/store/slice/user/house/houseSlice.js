import { createSlice } from '@reduxjs/toolkit'
import { getAnnouncement, getBookings, getModeration } from './houseThunk'

const initialState = {
   isLoading: false,
   error: null,
   bookings: [],
   announcement: [],
   moderation: [],
}

const addAsyncCases = (builder, asyncThunk, dataField) => {
   builder
      .addCase(asyncThunk.fulfilled, (state, action) => {
         state[dataField] = action.payload
         state.isLoading = false
      })
      .addCase(asyncThunk.pending, (state) => {
         state.isLoading = true
      })
      .addCase(asyncThunk.rejected, (state, action) => {
         state.isLoading = false
         state.error = action.payload
      })
}

export const houseSlice = createSlice({
   name: 'houses',
   initialState,
   extraReducers: (builder) => {
      addAsyncCases(builder, getBookings, 'bookings')
      addAsyncCases(builder, getAnnouncement, 'announcement')
      addAsyncCases(builder, getModeration, 'moderation')
   },
})
