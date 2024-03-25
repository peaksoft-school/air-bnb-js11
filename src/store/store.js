import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import { persistReducer, persistStore } from 'redux-persist'
import { authSlice } from './slice/auth/authSlice'
import { applicationSlice } from './slice/admin/application/applicationSlice'
import { userSlice } from './slice/user/profile/userSlice'
import { pageSlice } from './slice/admin/inner-application/innerPageSlice'
import { allHousingSlice } from './slice/admin/allHousing/allHousingSlice'
import { addHouseSlice } from './slice/user/addHouse/addHouseSlice'
import { userInfoSlice } from './slice/admin/user/userInfoSlice'
import { houseSlice } from './slice/user/house/houseSlice'
import { favoriteSlice } from './slice/user/favoriteSlice'
import { userInnerRegionSlice } from './slice/user/userInner/userInnerRegionSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [applicationSlice.name]: applicationSlice.reducer,
   [userSlice.name]: userSlice.reducer,
   [pageSlice.name]: pageSlice.reducer,
   [allHousingSlice.name]: allHousingSlice.reducer,
   [addHouseSlice.name]: addHouseSlice.reducer,
   [userInfoSlice.name]: userInfoSlice.reducer,
   [houseSlice.name]: houseSlice.reducer,
   [favoriteSlice.name]: favoriteSlice.reducer,
   [userSlice.name]: userSlice.reducer,
   [userInnerRegionSlice.name]: userInnerRegionSlice.reducer,
})

const persistConfig = {
   key: 'AIR_BNB',
   storage,
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
   reducer: persistedReducer,
   middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
         serializableCheck: false,
      }),
})

export const persistor = persistStore(store)
