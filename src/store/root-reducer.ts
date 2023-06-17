import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { introForm } from './intro-form/intro-form';
import { stepOneForm } from './step-one-form/step-one-form';
import { stepTwoForm } from './step-two-form/step-two-form';
import { stepThreeForm } from './step-three-form/step-three-form';

export const rootReducer = combineReducers({
  [NameSpaceStore.IntroForm]: introForm.reducer,
  [NameSpaceStore.StepOneForm]: stepOneForm.reducer,
  [NameSpaceStore.StepTwoForm]: stepTwoForm.reducer,
  [NameSpaceStore.StepThreeForm]: stepThreeForm.reducer,
});
