import { store } from 'src/store/store';

export type IntroFormState = {
  phone: string;
  email: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
