import { combineReducers, configureStore } from "@reduxjs/toolkit";
import authReducer from "@/features/auth/authSlice";
// import logger from "redux-logger";
import persistReducer from "redux-persist/es/persistReducer";
import storage from "redux-persist/lib/storage";
import persistStore from "redux-persist/es/persistStore";
import { profileApi } from "@/services/profile";
import { setupListeners } from "@reduxjs/toolkit/query";

// const rootConfig = {
//   key: "root",
//   storage,
//   whitelist: ["auth"],
// };

const rootReducer = combineReducers({
  auth: authReducer,
  [profileApi.reducerPath]: profileApi.reducer,
});

export const store = configureStore({
  // reducer: persistReducer(rootConfig, rootReducer),
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      // logger,
      profileApi.middleware
    ),
});

setupListeners(store.dispatch);
// export const persistor = persistStore(store);
