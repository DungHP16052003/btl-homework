import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from '@/features/auth/authSlice'
import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage"
import persistStore from "redux-persist/es/persistStore";
const rootConfig = {
    key: 'root',
    storage,
}
const rootReducer = combineReducers({
    auth: authReducer
})
export const store = configureStore({
    reducer:persistReducer(rootConfig, rootReducer),
    middleware: (getDefaultMiddleware) => getDefaultMiddleware({serializableCheck:false}).concat(logger),

  })

  export const persistor = persistStore(store)