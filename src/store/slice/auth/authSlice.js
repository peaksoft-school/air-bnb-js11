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
      logOut: (state) => {
         state.role = ROLES.GUEST
         state.isAuth = false
         state.email = null
         state.isLoading = false
         state.accessToken = null

         localStorage.removeItem('AIR_BNB')
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

export const AUTH_ACTIONS = authSlice.actions
