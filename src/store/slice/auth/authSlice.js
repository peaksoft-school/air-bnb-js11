import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../../utils/constants/routes'
import { authWithGoogleRequest, signInRequest } from './authThunk'

const initialState = {
   accessToken: null,
   isAuth: false,
   role: ROLES.GUEST,
   email: null,
   isLoading: false,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {
      logout: (state) => {
         state.role = ROLES
         state.isAuth = false
         state.email = null
         state.isLoading = false
         state.accessToken = null
      },
   },

   extraReducers: (builder) => {
      builder
         .addCase(signInRequest.fulfilled, (state, { payload }) => {
            state.accessToken = payload.accessToken
            state.isAuth = true
            state.role = payload.role
            state.email = payload.email
         })
         .addCase(signInRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(signInRequest.rejected, (state) => {
            state.isAuth = false
            state.isLoading = false
         })

      builder
         .addCase(authWithGoogleRequest.fulfilled, (state, { payload }) => {
            state.accessToken = payload.accessToken
            state.isAuth = true
            state.role = payload.role
            state.email = payload.email
         })
         .addCase(authWithGoogleRequest.pending, (state) => {
            state.isLoading = true
         })
         .addCase(authWithGoogleRequest.rejected, (state) => {
            state.isAuth = false
            state.isLoading = false
         })
   },
})

export const { logout } = authSlice.actions
