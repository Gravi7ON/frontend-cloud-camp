import { store } from 'src/store/store';

export type IntroFormState = {
  phone: string;
  email: string;
};

export type StepOneFormState = {
  nickname: string;
  name: string;
  surname: string;
  sex: string;
};

export type StepTwoFormState = {
  advantages: { value: string }[];
  checkbox: string[];
  radio: string;
};

export type StepThreeFormState = {
  about: string;
};

export type State = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
