import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { StepTwoFormState } from 'src/types/global-state';

const initialState: StepTwoFormState = {
  advantages: [{ value: '' }],
  checkbox: [],
  radio: '',
};

export const stepTwoForm = createSlice({
  name: NameSpaceStore.StepTwoForm,
  initialState,
  reducers: {
    setStepTwoFormValues(state, action) {
      state.advantages = action.payload.advantages;
      state.checkbox = action.payload.checkbox;
      state.radio = action.payload.radio;
    },
  },
});

export const { setStepTwoFormValues } = stepTwoForm.actions;
