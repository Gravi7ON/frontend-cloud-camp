import { NameSpaceStore } from 'src/constant';
import { State, StepThreeFormState } from 'src/types/global-state';

export const getStepThreeFormValues = (state: State): StepThreeFormState =>
  state[NameSpaceStore.StepThreeForm];
