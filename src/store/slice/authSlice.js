import { createSlice } from '@reduxjs/toolkit'

const initialState = {
   accessToken: null,
   isAuth: false,
   role: null,
   email: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
})
