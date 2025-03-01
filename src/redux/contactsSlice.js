import { createSlice, createSelector } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';

const contactsSlice= createSlice({
    name: "contacts",
    loading: false,
    error: null,
    initialState: {
        items: [],
      },
      extraReducers: builder => {
        builder
          .addCase(fetchContacts.fulfilled, (state, action) => {
            state.items = action.payload;
            state.isLoading = false;
          })
          .addCase(fetchContacts.pending, (state) => {
            state.isLoading = true;
          })
          .addCase(fetchContacts.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
          })

          .addCase(addContact.fulfilled, (state, action) => {
            state.items.push(action.payload); 
            state.isLoading = false;
          })
          .addCase(addContact.pending, (state) => {
            state.isLoading = true; 
          })
          .addCase(addContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
          })

          .addCase(deleteContact.fulfilled, (state, action) => {
            state.items = state.items.filter(item => item.id !== action.payload);
            state.isLoading = false;
          })
          .addCase(deleteContact.pending, (state) => {
            state.isLoading = true; 
          })
          .addCase(deleteContact.rejected, (state, action) => {
            state.isLoading = false;
            state.isError = action.payload;
          })
      },
    });

export const contactsReducer = contactsSlice.reducer;

export const selectContacts = state => state.contacts.items;
export const selectLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;
export const selectFilter = state => state.filters.name; 

export const selectFilteredContacts = createSelector(
    [selectContacts, selectFilter],
    (contacts, filter) => {
        return contacts.filter(contact =>
            contact.name.toLowerCase().includes(filter.toLowerCase())
        );
    }
);