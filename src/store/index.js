import { configureStore } from "@reduxjs/toolkit";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";
import reducers from "./slices";

let middleware = [];

if (process.env.NODE_ENV === "development") {
  middleware = [...middleware, thunk];
} else {
  middleware = [...middleware, thunk];
}

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["darkModeSlice"],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
  devTools: process.env.NODE_ENV !== "production",
  middleware: middleware,
});

export default store;
