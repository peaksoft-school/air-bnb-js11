import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../utils/constants/routes'

const initialState = {
   accessToken: null,
   isAuth: true,
   role: ROLES.USER,
   email: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
})
