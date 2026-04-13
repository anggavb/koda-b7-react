import { configureStore } from "@reduxjs/toolkit";
import {
  persistStore,
  persistCombineReducers,
  FLUSH,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
  REHYDRATE
} from "redux-persist";
import storage from "redux-persist/es/storage";

import surveyReducer from "./slices/survey"
import productReducer from "./slices/product"
import getEnv from "@/utils/getEnv";

const persistConfig = {
  key: "app",
  storage,
  blacklist: ["survey"]
};

const store = configureStore({
  reducer: persistCombineReducers(persistConfig, {
    survey: surveyReducer,
    product: productReducer
  }),
  devTools: getEnv.mode === "development",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export const persistor = persistStore(store);
export default store