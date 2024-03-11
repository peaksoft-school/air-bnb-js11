import { createSlice } from '@reduxjs/toolkit'
import { fetchProfile } from './userThunk'

const initialState = {
   name: null,
   image: null,
   email: null,
   isLoading: false,
   error: null,
}

export const userSlice = createSlice({
   name: 'user',
   initialState,
   reducers: {
      clearUserInfo: (state) => {
         state.email = null
         state.error = null
         state.image = null
         state.isLoading = false
         state.name = null
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchProfile.fulfilled, (state, { payload }) => {
            state.name = payload.name
            state.image = payload.iamge
            state.email = payload.email
            state.isLoading = false
         })
         .addCase(fetchProfile.pending, (state) => {
            state.isLoading = true
         })
         .addCase(fetchProfile.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
         })
   },
})

export const { clearUserInfo } = userSlice.actions
