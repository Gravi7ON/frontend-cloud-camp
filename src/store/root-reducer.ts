import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { introForm } from './intro-form/intro-form';
import { stepOneForm } from './step-one-form/step-one-form';

export const rootReducer = combineReducers({
  [NameSpaceStore.IntroForm]: introForm.reducer,
  [NameSpaceStore.StepOneForm]: stepOneForm.reducer,
});
