import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
  updateContact,
} from './contactsOperations';
import Notiflix from 'notiflix';
import { notifySettings } from '../utils/notifySettings';
// import { defaultContacts } from '../utils/defaultContacts';

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },

  extraReducers: builder => {
    builder
      .addCase(fetchContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchContacts.fulfilled, (state, { payload }) => {
        state.items = payload;
        state.isLoading = false;
        state.error = null;
      })
      .addCase(fetchContacts.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(addContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(addContact.fulfilled, (state, { payload }) => {
        state.items.push(payload);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.success(
          `${payload.name} was successfully added to your contacts`,
          notifySettings
        );
      })
      .addCase(addContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(deleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(deleteContact.fulfilled, (state, { payload }) => {
        state.items = state.items.filter(contact => contact.id !== payload.id);
        state.isLoading = false;
        state.error = null;
        Notiflix.Notify.info(
          `${payload.name} was successfully deleted from your contacts`,
          notifySettings
        );
      })
      .addCase(deleteContact.rejected, (state, { payload }) => {
        state.error = payload;
        state.isLoading = false;
      })
      .addCase(updateContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(updateContact.fulfilled, (state, { payload }) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(
          contact => contact.id === payload.id
        );
        state.items.splice(index, 1, payload);
        Notiflix.Notify.success(
          'Your contact was successfully updated',
          notifySettings
        );
      })
      .addCase(updateContact.rejected, (state, { payload }) => {
        state.isLoading = false;
        state.error = payload;
        // console.log(payload);
        Notiflix.Notify.failure(
          'Something went wrong, please try again',
          notifySettings
        );
      });
  },
});