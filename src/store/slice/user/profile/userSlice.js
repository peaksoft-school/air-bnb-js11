import { createSlice } from '@reduxjs/toolkit'
import { USER_THUNKS } from './userThunk'

const { getUserInfo } = USER_THUNKS

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
         .addCase(getUserInfo.fulfilled, (state, { payload }) => {
            state.name = payload.name
            state.image = payload.image
            state.email = payload.email
            state.isLoading = false
         })

         .addCase(getUserInfo.pending, (state) => {
            state.isLoading = true
         })

         .addCase(getUserInfo.rejected, (state, { payload }) => {
            state.isLoading = false
            state.error = payload
         })
   },
})

export const USER_ACTIONS = userSlice.actions
