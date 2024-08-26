import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts";
import favoritesReducer from "./reducers/favorites";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    favorites: favoritesReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
