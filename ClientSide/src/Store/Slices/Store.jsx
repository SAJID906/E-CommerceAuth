import { configureStore } from "@reduxjs/toolkit";
import ProductSlice from "./ProductSlice";
import CartSlice from "./CartSlice";
import AuthSlice from "../AuthSlice";
import { persistStore, PERSIST, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistconfig = {
  key: "root",
  storage: storage,
};
// Create the persisted reducer for AuthSlice
const persistreducer = persistReducer(persistconfig, AuthSlice);

// Configure the store
const store = configureStore({
  reducer: {
    cart: CartSlice,
    product: ProductSlice,
    Auth: persistreducer, // Apply persistence to AuthSlice
  },
  //This use to remove PERSIST ERROR IN CONSOLE.LOG SHOW
  //RUN PROJECT WITH OUT MIDDLEWARE
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore redux-persist action types that contain non-serializable values
        ignoredActions: [PERSIST],
      },
    }),
});
export const persistor = persistStore(store);
export default store;
