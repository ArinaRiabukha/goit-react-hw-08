import { createAsyncThunk } from "@reduxjs/toolkit";
import { api, setAuthHeader } from "../auth/operations";

  export const fetchContacts = createAsyncThunk('contacts/fetchAll', async (_, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      setAuthHeader(token);
    } else {
      return thunkAPI.rejectWithValue("Unauthorized");
    }
    try {
      const { data } = await api.get(`/contacts`);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const addContact = createAsyncThunk('contacts/addContact', async (newContact, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      setAuthHeader(token);
    } else {
      return thunkAPI.rejectWithValue("Unauthorized");
    }
    
    try {
      const response = await api.post('/contacts', newContact);
      return response.data; 
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });

  export const deleteContact = createAsyncThunk('contacts/deleteContact', async (id, thunkAPI) => {
    const token = thunkAPI.getState().auth.token;
    if (token) {
      setAuthHeader(token);
    } else {
      return thunkAPI.rejectWithValue("Unauthorized");
    }
    try {
      await api.delete(`/contacts/${id}`);
      return id;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  });
  