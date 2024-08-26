import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContactClass from "../../models/Contact";

type favoritesState = {
    favoritesList: ContactClass[]
}

const initialState: favoritesState = {
  favoritesList: []
}

const favoritesSlice = createSlice({
    name: 'favorites',
    initialState,
    reducers: {
        updateFavorites: (state, action: PayloadAction<ContactClass>) => {
          const contactFound = state.favoritesList.some(contact => contact.name === action.payload.name)
          if (!contactFound) {
            state.favoritesList.push(action.payload)
            alert('Contact sucessfully added as favorite.')
          } else {
            state.favoritesList.filter(contact => contact.name !== action.payload.name)
            alert('Contact removed of favorites.')
          }
        }
    }
})

export const { updateFavorites } = favoritesSlice.actions
export default favoritesSlice.reducer
