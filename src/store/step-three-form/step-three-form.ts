import { createSlice } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { StepThreeFormState } from 'src/types/global-state';

const initialState: StepThreeFormState = {
  about: '',
};

export const stepThreeForm = createSlice({
  name: NameSpaceStore.StepTwoForm,
  initialState,
  reducers: {
    setStepThreeFormValues(state, action) {
      state.about = action.payload.about;
    },
  },
});

export const { setStepThreeFormValues } = stepThreeForm.actions;
