import { configureStore } from '@reduxjs/toolkit';
import { rootReducer } from './root-reducer';
import { api } from 'src/services/api';

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [
          'profileApi/executeMutation/fulfilled',
          'profileApi/executeMutation/rejected',
        ],
        ignoredActionPaths: ['payload'],
      },
    }).concat(api.middleware),
});
