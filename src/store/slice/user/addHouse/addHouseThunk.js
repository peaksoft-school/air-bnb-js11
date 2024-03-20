import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const postImageFile = createAsyncThunk(
   'post/imageFile',
   async ({ file }, { rejectWithValue }) => {
      try {
         const formData = new FormData()
         formData.append('file', file)

         const response = await axiosInstance.post('/api/file', formData, {
            headers: {
               'Content-Type': 'multipart/form-data',
            },
         })

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)

export const saveHouse = createAsyncThunk(
   'post/saveHouse',
   async (
      { newData, reset, dispatch, clearImage, showToast },
      { rejectWithValue }
   ) => {
      try {
         const response = await axiosInstance.post('/api/houses', newData)
         reset()
         dispatch(clearImage())

         showToast({
            title: 'Success',
            message: 'You have successfully added an image :)',
            type: 'success',
         })

         return response.data
      } catch (error) {
         return rejectWithValue(error)
      }
   }
)
