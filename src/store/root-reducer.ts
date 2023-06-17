import { combineReducers } from '@reduxjs/toolkit';
import { NameSpaceStore } from 'src/constant';
import { introForm } from './intro-form/intro-form';

export const rootReducer = combineReducers({
  [NameSpaceStore.IntroForm]: introForm.reducer,
});
