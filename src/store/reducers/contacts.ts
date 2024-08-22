import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ContactType } from "../../App";

type ContactsState = {
    contactsList: ContactType[]
}

const initialState: ContactsState = {
    contactsList: [
        {
            name: 'Gabriela Zimmermann',
            email: 'zmngabriela@gmail.com',
            phone: '+34 605 145 486',
            avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
            description: 'Front-end developer'
        },
        {
            name: 'Guilherme Coninch',
            email: 'guilhermekonnin@gmail.com',
            phone: '+34 600 0098 626',
            avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
            description: 'Real State Agent'
        },
        {
            name: 'Leonardo Cadore',
            email: 'leonardocadore@gmail.com',
            phone: '+34 622 896 471',
            avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
            description: 'Content creator'
        }
    ]
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ContactType>) => {
        const contactFound = state.contactsList.find((c) => c.name.toLowerCase() === action.payload.name.toLowerCase())
        if (contactFound) {
            alert('Contact already added')
        } else (
            state.contactsList.push(action.payload)
        )
        },
        remove: (state, action: PayloadAction<string>) => {
          state.contactsList = state.contactsList.find(x => x.name !== action.payload)
        }
    }
})

export const { add, remove } = contactsSlice.actions
export default contactsSlice.reducer
