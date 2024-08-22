import { configureStore } from "@reduxjs/toolkit";
import contactsReducer from "./reducers/contacts";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer
  }
})

export type RootReducer = ReturnType<typeof store.getState>
