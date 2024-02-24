import { createAsyncThunk } from '@reduxjs/toolkit'
import { axiosInstance } from '../../../../configs/axiosInstance'

export const deleteHouseAsync = createAsyncThunk(
   'user/deleteHouse',
   async ({ id, setIsLoading, showToast, getUserHouses }) => {
      setIsLoading(true)
      try {
         await axiosInstance.delete(`api/houses/${id}`)
         showToast({
            title: 'Delete',
            message: 'Successfully deleted',
            type: 'success',
         })
         return getUserHouses()
      } catch (error) {
         showToast({
            title: 'Delete',
            message: error.response?.message,
            type: 'error',
         })
         return error
      } finally {
         setIsLoading(false)
      }
   }
)

export const blockedHouses = createAsyncThunk(
   'user/blockedHouses',
   async ({ id, setIsLoading, showToast, getUserHouses }) => {
      setIsLoading(true)
      try {
         await axiosInstance.post(`api/houses/blockedHousesById?houseId=${id}`)
         showToast({
            title: 'Block',
            message: 'Successfully blocked',
            type: 'success',
         })
         return getUserHouses()
      } catch (error) {
         showToast({
            title: 'Delete',
            message: error.response?.message,
            type: 'error',
         })
         return error
      } finally {
         setIsLoading(false)
      }
   }
)
