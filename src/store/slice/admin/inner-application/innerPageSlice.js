import { createSlice } from '@reduxjs/toolkit'
import { getInnerPages } from './InnerApplicationThunk'

export const pageSlice = createSlice({
   name: 'innerPage',
   initialState: {
      innerPage: {
         house: {},
         totalPages: null,
         loading: false,
         error: null,
      },
   },

   reducers: {},
   extraReducers: (builder) => {
      builder
         .addCase(getInnerPages.pending, (state) => {
            state.innerPage.loading = true
            state.innerPage.error = null
         })
         .addCase(getInnerPages.fulfilled, (state, { payload }) => {
            state.innerPage.house = payload
            state.innerPage.loading = false
         })
         .addCase(getInnerPages.rejected, (state, { payload }) => {
            state.innerPage.loading = false
            state.innerPage.error = payload
         })
   },
})

export default pageSlice.reducer
