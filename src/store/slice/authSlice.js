import { createSlice } from '@reduxjs/toolkit'
import { ROLES } from '../../utils/constants/routes'

const initialState = {
   accessToken: null,
   isAuth: false,
   role: ROLES.GUEST,
   email: null,
}

export const authSlice = createSlice({
   name: 'auth',
   initialState,
   reducers: {},
})
