import { SubmitHandler, useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import Layout from 'src/components/layouts/layout';
import { AppRoute } from 'src/constant';

const validationSchema = yup
  .object({
    phone: yup
      .string()
      .matches(/^\+7\s\(\d{3}\)\s\d{3}-\d{2}-\d{2}$/g, 'enter your phone')
      .required(),
    email: yup
      .string()
      .matches(/.+@.+\..+/gi, 'email must be a valid email')
      .required(),
  })
  .required();
type FormData = yup.InferType<typeof validationSchema>;

export default function IntroForm(): JSX.Element {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    mode: 'all',
    resolver: yupResolver(validationSchema),
  });

  const onSubmit: SubmitHandler<FormData> = (data) => console.log(data);

  return (
    <Layout>
      <div className="popup-form__content">
        <div className="popup-form__user-info">
          <div className="popup-form__avatar">
            <span className="popup-form__avatar-initials">АИ</span>
          </div>
          <div className="popup-form__user-data">
            <h3 className="popup-form__user-name">Иван Иванов</h3>
            <div className="popup-form__user-links">
              <div className="popup-form__user-link">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </span>
                <Link
                  className="popup-form__user-links_text"
                  to="#"
                >
                  Telegram
                </Link>
              </div>
              <div className="popup-form__user-link">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </span>
                <Link
                  className="popup-form__user-links_text"
                  to="#"
                >
                  GitHub
                </Link>
              </div>
              <div className="popup-form__user-link">
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    height="12"
                    viewBox="0 0 14 12"
                    fill="none"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M0.710016 1.96935L2.08181 0.524489C2.15733 0.444944 2.26221 0.399902 2.37189 0.399902H4.83441C4.9405 0.399902 5.04224 0.442045 5.11725 0.51706L6.48294 1.88275C6.55795 1.95776 6.6597 1.9999 6.76578 1.9999H12.4344C12.5405 1.9999 12.6422 2.04205 12.7173 2.11706L13.2829 2.68275C13.358 2.75776 13.4001 2.8595 13.4001 2.96559V10.6342C13.4001 10.7403 13.358 10.842 13.2829 10.9171L12.7173 11.4827C12.6422 11.5578 12.5405 11.5999 12.4344 11.5999H1.59C1.46983 11.5999 1.35602 11.5459 1.28005 11.4528L0.690151 10.7296C0.631907 10.6582 0.600098 10.5689 0.600098 10.4768V2.24476C0.600098 2.14227 0.639443 2.04368 0.710016 1.96935Z"
                      fill="#CCCCCC"
                    />
                  </svg>
                </span>
                <Link
                  className="popup-form__user-links_text"
                  to="#"
                >
                  Resume
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="popup-form__divider-container">
          <span className="popup-form__divider"></span>
        </div>
        <div className="popup-form__form">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label>
              <span className="input__label">Номер телефона</span>
              <InputMask
                mask="+7 (999) 999-99-99"
                alwaysShowMask
                maskPlaceholder="+7 (___) ___-__-__"
                {...register('phone')}
              />
              {errors.phone && (
                <span className="input__error-message">
                  {errors.phone.message}
                </span>
              )}
            </label>
            <label>
              <span className="input__label">Email</span>
              <input {...register('email')} />
              {errors.email && (
                <span className="input__error-message">
                  {errors.email.message}
                </span>
              )}
            </label>
            <button
              type="submit"
              id="button-start"
              className="popup-form__button-start"
            >
              Начать
            </button>
          </form>
        </div>
      </div>
    </Layout>
  );
}
