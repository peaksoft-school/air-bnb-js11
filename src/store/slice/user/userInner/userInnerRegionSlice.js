import { createSlice } from '@reduxjs/toolkit'
import { getUserThunk } from './userInnerRegionThunk'

const initialState = {
   regionsHouse: [],
   totalPages: null,
   loading: false,
   error: null,
}

export const userInnerRegionSlice = createSlice({
   name: 'regionsHouses',
   initialState,
   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getUserThunk.pending, (state) => {
            state.loading = true
            state.error = null
         })
         .addCase(getUserThunk.fulfilled, (state, { payload }) => {
            state.regionsHouse = payload.houseResponses
            state.totalPages = payload.totalPages
            state.loading = false
         })
         .addCase(getUserThunk.rejected, (state, { payload }) => {
            state.loading = false
            state.error = payload
         })
   },
})

export default userInnerRegionSlice.reducer
