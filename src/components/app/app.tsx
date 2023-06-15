import { Route, Routes } from 'react-router-dom';
import { AppRoute } from 'src/constant';
import IntroForm from '../intro-form/intro-form';
import StepOneForm from '../step-one-form/step-one-form';
import StepTwoForm from '../step-two-form/step-two-form';
import StepThreeForm from '../step-three-form/step-three-form';
import NotFound from '../not-found/not-found';

export default function App(): JSX.Element {
  return (
    <Routes>
      <Route
        path={AppRoute.Intro}
        element={<IntroForm />}
      />
      <Route
        path={AppRoute.StepOne}
        element={<StepOneForm />}
      />
      <Route
        path={AppRoute.StepTwo}
        element={<StepTwoForm />}
      />
      <Route
        path={AppRoute.StepThree}
        element={<StepThreeForm />}
      />
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}
