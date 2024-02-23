import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../configs/axiosInstance'
import { showToast } from '../../../utils/helpers/toast'
import { routes } from '../../../utils/constants/routes'

export const signInRequest = createAsyncThunk(
   'auth/signIn',
   async (
      { data, navigate, onClose, reset, setDisabledBtn },
      { rejectWithValue }
   ) => {
      setDisabledBtn(true)
      try {
         const response = await axiosInstance.post('/api/auth/signIn', data)

         showToast({
            type: 'success',
            title: 'Success',
            message: 'You have just successfully registered as Admin',
         })

         onClose()
         reset()

         navigate(routes[response.data.role].index)

         return response.data
      } catch (error) {
         showToast({
            type: 'error',
            title: 'Reject',
            message: 'Sorry, registration failed, try again',
         })

         return rejectWithValue(error)
      } finally {
         setDisabledBtn(false)
      }
   }
)

export const authWithGoogleRequest = createAsyncThunk(
   'auth/authWithGoogle',
   async ({ tokenId, showToast }, { rejectWithValue }) => {
      try {
         const response = await axiosInstance.post(
            `/api/auth/authenticate/google?tokenId=${tokenId}`
         )

         showToast({
            type: 'success',
            title: 'Success',
            message: 'You have just successfully registered',
         })
         return response.data
      } catch (error) {
         showToast({
            type: 'error',
            title: 'Reject',
            message: 'Sorry, registration failed, try again',
         })

         return rejectWithValue(error)
      }
   }
)
