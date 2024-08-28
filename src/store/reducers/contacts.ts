import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import ContactClass from "../../models/Contact";

type ContactsState = {
    contactsList: ContactClass[]
}

const initialState: ContactsState = {
    contactsList: [
      {
        name: 'Emily Johnson',
        email: 'emily.johnson@example.co.uk',
        phone: '+442083661177',
        avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
        description: 'Digital Marketer'
      },
      {
        name: 'Oliver Smith',
        email: 'oliver.smith@example.co.uk',
        phone: '+441632960961',
        avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
        description: 'UX/UI Designer'
      },
      {
        name: 'Charlotte Brown',
        email: 'charlotte.brown@example.co.uk',
        phone: '+441632960962',
        avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
        description: 'Software Engineer'
      },
      {
        name: 'Harry Davis',
        email: 'harry.davis@example.co.uk',
        phone: '+442083661178',
        avatar: 'https://png.pngtree.com/png-vector/20220611/ourmid/pngtree-person-gray-photo-placeholder-woman-in-shirt-on-gray-background-png-image_4826227.png',
        description: 'Project Manager'
      }
    ]
}

const contactsSlice = createSlice({
    name: 'contacts',
    initialState,
    reducers: {
        add: (state, action: PayloadAction<ContactClass>) => {
        const nameFound = state.contactsList.find((c) => c.name.toLowerCase() === action.payload.name.toLowerCase())
        const phoneFound = state.contactsList.find((c) => c.phone.toLowerCase() === action.payload.phone.toLowerCase())
        if (nameFound || phoneFound) {
            alert('Contact already added.')
        } else {
            state.contactsList.push({
              ...action.payload,
              name: action.payload.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
              description: action.payload.description.charAt(0).toUpperCase() + action.payload.description.slice(1).toLowerCase(),
              phone: action.payload.phone.replace(/\s+/g, '')
            });
            alert('Contact was successfully added.')
        }
        },
        remove: (state, action: PayloadAction<string>) => {
            state.contactsList = state.contactsList.filter(x => x.name !== action.payload)
            alert('Contact was removed.')
        },
        edit: (state, action: PayloadAction<{oldName: string, newContact: ContactClass}>) => {
          const index = state.contactsList.findIndex((x) => x.name.toLowerCase() === action.payload.oldName.toLowerCase())
          if (index >= 0) {
              state.contactsList[index] = {
                ...action.payload.newContact,
                name: action.payload.newContact.name.toLowerCase().split(' ').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' '),
                description: action.payload.newContact.description.charAt(0).toUpperCase() + action.payload.newContact.description.slice(1).toLowerCase(),
                phone: action.payload.newContact.phone.replace(/\s+/g, '')
              }
              alert('Contact was sucessfully edited.')
          } else if ((index === -1)) {
              alert('Contact was not found.')
          }
        }
    }
})

export const { add, remove, edit } = contactsSlice.actions
export default contactsSlice.reducer
