import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { IntroFormState } from 'src/types/global-state';

const initialState: IntroFormState = {
  phone: '',
  email: '',
};

export const introForm = createSlice({
  name: NameSpaceStore.IntroForm,
  initialState,
  reducers: {
    setFormValues(state, action) {
      state.phone = action.payload.phone;
      state.email = action.payload.email;
    },
  },
});

export const { setFormValues } = introForm.actions;
