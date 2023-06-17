import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { StepOneFormState } from 'src/types/global-state';

const initialState: StepOneFormState = {
  nickname: '',
  name: '',
  surname: '',
  sex: 'Не выбрано',
};

export const stepOneForm = createSlice({
  name: NameSpaceStore.IntroForm,
  initialState,
  reducers: {
    setStepOneFormValues(state, action) {
      state.nickname = action.payload.nickname;
      state.name = action.payload.name;
      state.surname = action.payload.surname;
      state.sex = action.payload.sex;
    },
  },
});

export const { setStepOneFormValues } = stepOneForm.actions;
