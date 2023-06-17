import { NameSpaceStore } from 'src/constant';
import { State, StepTwoFormState } from 'src/types/global-state';

export const getStepTwoFormValues = (state: State): StepTwoFormState =>
  state[NameSpaceStore.StepTwoForm];
