import { createSlice } from '@reduxjs/toolkit';
import { addContact, deleteContact, fetchContacts } from './contactsOps';
import { logoutThunk } from '../auth/AuthOps';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice= createSlice({
    name: "contacts",
    initialState,
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

          .addCase(logoutThunk.fulfilled, () => initialState);
      },
    });

export const contactsReducer = contactsSlice.reducer;
