import { combineReducers, configureStore } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'
import {
   persistReducer,
   persistStore,
   FLUSH,
   REHYDRATE,
   PAUSE,
   PERSIST,
   PURGE,
   REGISTER,
} from 'redux-persist'
import { authSlice } from './slice/auth/authSlice'
import { applicationSlice } from './slice/admin/application/applicationSlice'
import { userSlice } from './slice/user/userSlice'
import { allHousingSlice } from './slice/admin/allHousing/allHousingSlice'

const rootReducer = combineReducers({
   [authSlice.name]: authSlice.reducer,
   [applicationSlice.name]: applicationSlice.reducer,
   [userSlice.name]: userSlice.reducer,
   [allHousingSlice.name]: allHousingSlice.reducer,
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
         serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
         },
      }),
})

export const persistor = persistStore(store)
