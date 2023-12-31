import { useNavigate } from 'react-router-dom';
import { SubmitHandler, useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Layout from '../layouts/layout';
import { AppRoute, ButtonNavigateMarker } from 'src/constant';
import { useAppDispatch, useAppSelector } from 'src/hooks/store.hooks';
import { getStepOneFormValues } from 'src/store/step-one-form/selectors';
import { setStepOneFormValues } from 'src/store/step-one-form/step-one-form';

const MAX_NICKNAME_CHAR = 30;
const MAX_NAME_CHAR = 50;

const enum Sex {
  Man = 'man',
  Woman = 'woman',
}

const userNameValidationSchema = yup
  .string()
  .max(MAX_NAME_CHAR)
  .required()
  .matches(/^[a-zа-яё]+$/gi, 'only letters');

const validationSchema = yup
  .object({
    nickname: yup
      .string()
      .max(MAX_NICKNAME_CHAR)
      .required()
      .matches(/^[0-9a-zа-яё]+$/gi, 'only letters or number'),
    name: userNameValidationSchema,
    surname: userNameValidationSchema,
    sex: yup
      .string()
      .required()
      .matches(/(man|woman)/, 'only man or woman'),
  })
  .required();
type FormData = yup.InferType<typeof validationSchema>;

export default function StepOneForm(): JSX.Element {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const { nickname, name, surname, sex } = useAppSelector(getStepOneFormValues);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (formData, event) => {
    dispatch(setStepOneFormValues(formData));

    const detail = (event?.nativeEvent as CustomEvent).detail;
    if (detail === ButtonNavigateMarker.Back) {
      navigate(AppRoute.Intro);
    } else {
      navigate(AppRoute.StepTwo);
    }
  };

  return (
    <Layout>
      <div className="popup-form-step-one__content">
        <div className="popup-form-step-one__steps">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="680"
            height="48"
            viewBox="0 0 680 48"
            fill="none"
          >
            <rect
              y="4"
              width="680"
              height="8"
              rx="4"
              fill="black"
              fillOpacity="0.08"
            />
            <g clipPath="url(#clip0_5_29552)">
              <path
                d="M1.456 41.502H4.004V35.202L1.456 36.868V35.202L4.536 33.2H5.782V41.502H7.644V43H1.456V41.502Z"
                fill="#5558FA"
              />
              <rect
                width="16"
                height="16"
                rx="8"
                fill="#5558FA"
              />
              <circle
                cx="7.9999"
                cy="7.9999"
                r="1.6"
                fill="white"
              />
              <rect
                x="332"
                width="16"
                height="16"
                rx="8"
                fill="#A6A6A6"
              />
              <path
                d="M336.755 42.104C337.604 41.3107 338.337 40.6433 338.953 40.102C339.569 39.5513 340.077 39.066 340.479 38.646C340.889 38.2167 341.193 37.8153 341.389 37.442C341.585 37.0593 341.683 36.6347 341.683 36.168C341.683 35.5053 341.51 35.02 341.165 34.712C340.829 34.404 340.301 34.25 339.583 34.25C339.079 34.25 338.607 34.3433 338.169 34.53C337.73 34.7073 337.338 34.9313 336.993 35.202V33.69C337.375 33.494 337.809 33.34 338.295 33.228C338.78 33.1067 339.284 33.046 339.807 33.046C340.936 33.046 341.748 33.2933 342.243 33.788C342.747 34.2827 342.999 34.992 342.999 35.916C342.999 36.4573 342.91 36.9427 342.733 37.372C342.565 37.8013 342.299 38.2353 341.935 38.674C341.58 39.1127 341.127 39.584 340.577 40.088C340.026 40.5827 339.373 41.166 338.617 41.838H343.111V43H336.755V42.104Z"
                fill="#666666"
              />
              <rect
                x="664"
                width="16"
                height="16"
                rx="8"
                fill="#A6A6A6"
              />
              <path
                d="M674.209 37.442H675.231C675.969 37.442 676.51 37.2973 676.855 37.008C677.201 36.7093 677.373 36.2893 677.373 35.748C677.373 35.2253 677.224 34.8427 676.925 34.6C676.636 34.3573 676.123 34.236 675.385 34.236C674.797 34.236 674.275 34.3247 673.817 34.502C673.369 34.67 673.001 34.8473 672.711 35.034V33.662C673.057 33.494 673.495 33.354 674.027 33.242C674.559 33.1207 675.11 33.06 675.679 33.06C676.239 33.06 676.711 33.116 677.093 33.228C677.485 33.3307 677.798 33.4847 678.031 33.69C678.265 33.8953 678.433 34.152 678.535 34.46C678.638 34.768 678.689 35.118 678.689 35.51C678.689 36.182 678.526 36.7047 678.199 37.078C677.882 37.4513 677.411 37.7173 676.785 37.876C678.279 38.0253 679.025 38.8233 679.025 40.27C679.025 41.222 678.745 41.9407 678.185 42.426C677.625 42.9113 676.757 43.154 675.581 43.154C674.993 43.154 674.429 43.098 673.887 42.986C673.346 42.8647 672.912 42.7153 672.585 42.538V41.026C672.893 41.2593 673.29 41.4693 673.775 41.656C674.261 41.8427 674.811 41.936 675.427 41.936C675.885 41.936 676.258 41.894 676.547 41.81C676.846 41.726 677.079 41.6093 677.247 41.46C677.415 41.3013 677.532 41.11 677.597 40.886C677.663 40.662 677.695 40.4147 677.695 40.144C677.695 39.6213 677.513 39.2247 677.149 38.954C676.795 38.6833 676.179 38.548 675.301 38.548H674.209V37.442Z"
                fill="#666666"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_29552">
                <rect
                  width="680"
                  height="48"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="popup-form__form-step-one">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span className="input__label">Nickname</span>
              <input
                id="field-nickname"
                className="step-one"
                placeholder="Placeholder"
                defaultValue={nickname}
                {...register('nickname')}
              />
              <span className="input-error_message input__error-message">
                {errors.nickname && `${errors.nickname.message}`}
              </span>
            </label>
            <label>
              <span className="input__label">Name</span>
              <input
                id="field-name"
                className="step-one"
                placeholder="Placeholder"
                defaultValue={name}
                {...register('name')}
              />
              <span className="input-error_message input__error-message">
                {errors.name && `${errors.name.message}`}
              </span>
            </label>
            <label>
              <span className="input__label">Surname</span>
              <input
                id="field-surname"
                className="step-one"
                placeholder="Placeholder"
                defaultValue={surname}
                {...register('surname')}
              />
              <span className="input-error_message input__error-message">
                {errors.surname && `${errors.surname.message}`}
              </span>
            </label>
            <label>
              <span className="input__label">Sex</span>
              <select
                id="field-sex"
                className="step-one"
                defaultValue={sex}
                {...register('sex')}
              >
                <option disabled>Не выбрано</option>
                <option
                  id="field-sex-option-man"
                  value="man"
                >
                  {Sex.Man}
                </option>
                <option
                  id="field-sex-option-woman"
                  value="woman"
                >
                  {Sex.Woman}
                </option>
              </select>
              <span className="input-error_message input__error-message">
                {errors.sex && `${errors.sex.message}`}
              </span>
            </label>
          </form>
        </div>
        <div className="button-container">
          <button
            onClick={(evt) => {
              const form = document.querySelector('form');
              const event = new CustomEvent('submit', {
                detail: ButtonNavigateMarker.Back,
                bubbles: true,
                cancelable: true,
              });
              form?.dispatchEvent(event);
            }}
            id="button-back"
            className="popup-form__button-back"
          >
            Назад
          </button>
          <button
            onClick={(evt) => {
              const form = document.querySelector('form');
              const event = new CustomEvent('submit', {
                detail: ButtonNavigateMarker.Next,
                bubbles: true,
                cancelable: true,
              });
              form?.dispatchEvent(event);
            }}
            id="button-next"
            className="popup-form__button-next"
          >
            Далее
          </button>
        </div>
      </div>
    </Layout>
  );
}
