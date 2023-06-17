import { NameSpaceStore } from 'src/constant';
import { State, StepOneFormState } from 'src/types/global-state';

export const getStepOneFormValues = (state: State): StepOneFormState =>
  state[NameSpaceStore.StepOneForm];
