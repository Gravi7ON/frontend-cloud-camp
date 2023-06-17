import { NameSpaceStore } from 'src/constant';
import { State, IntroFormState } from 'src/types/global-state';

export const getIntroFormValues = (state: State): IntroFormState =>
  state[NameSpaceStore.IntroForm];
