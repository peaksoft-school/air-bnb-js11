import { createSlice } from '@reduxjs/toolkit'
import {
   getHouseById,
   getAnnouncementFeedback,
   getAnnouncementRating,
   getUser,
} from './userThunk'

const initialState = {
   isLoading: false,
   error: null,
   user: {},
   announcement: {},
   feedbacks: [],
   rating: {},
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

export const userInfoSlice = createSlice({
   name: 'userInfo',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      addAsyncCases(builder, getUser, 'user')
      addAsyncCases(builder, getHouseById, 'announcement')
      addAsyncCases(builder, getAnnouncementFeedback, 'feedbacks')
      addAsyncCases(builder, getAnnouncementRating, 'rating')
   },
})
