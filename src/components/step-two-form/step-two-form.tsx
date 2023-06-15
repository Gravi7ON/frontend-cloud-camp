import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/layout';
import { AppRoute } from 'src/constant';

export default function StepTwoForm(): JSX.Element {
  const navigate = useNavigate();

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
            <rect
              y="4"
              width="340"
              height="8"
              rx="4"
              fill="#5558FA"
            />
            <g clipPath="url(#clip0_5_29603)">
              <path
                d="M1.624 43V41.88H4.298V34.684L1.624 36.406V35.16L4.676 33.2H5.586V41.88H7.476V43H1.624Z"
                fill="#5558FA"
              />
              <rect
                width="16"
                height="16"
                rx="8"
                fill="#5558FA"
              />
              <path
                d="M7.66147 11.8737C7.56698 11.9987 7.41929 12.0723 7.26252 12.0723H6.68243C6.54729 12.0723 6.41791 12.0176 6.32376 11.9206L3.50413 9.01762C3.31569 8.8236 3.31569 8.51491 3.50413 8.32089L3.97572 7.83535C4.1721 7.63317 4.49669 7.63317 4.69306 7.83535L6.49489 9.69046C6.70845 9.91034 7.06776 9.88806 7.25251 9.64349L11.1512 4.48265C11.321 4.2579 11.6428 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.66147 11.8737Z"
                fill="white"
              />
              <path
                d="M336.741 43V41.81C339.275 39.374 341.235 38.226 341.235 36.392C341.235 35.23 340.675 34.684 339.471 34.684C338.491 34.684 337.581 35.09 336.923 35.664V33.662C337.651 33.284 338.673 33.018 339.793 33.018C342.243 33.018 343.083 34.194 343.083 35.944C343.083 38.128 341.641 39.332 339.275 41.404H343.125V43H336.741Z"
                fill="#5558FA"
              />
              <rect
                x="332"
                width="16"
                height="16"
                rx="8"
                fill="#5558FA"
              />
              <circle
                cx="340"
                cy="7.9999"
                r="1.6"
                fill="white"
              />
              <rect
                x="664"
                width="16"
                height="16"
                rx="8"
                fill="#A6A6A6"
              />
              <path
                d="M674.209 38.548V37.442H675.231C676.701 37.442 677.373 36.826 677.373 35.748C677.373 34.698 676.869 34.236 675.385 34.236C674.209 34.236 673.285 34.67 672.711 35.034V33.662C673.397 33.326 674.545 33.06 675.679 33.06C677.933 33.06 678.689 33.928 678.689 35.51C678.689 36.84 678.031 37.568 676.785 37.876C678.283 38.03 679.025 38.828 679.025 40.27C679.025 42.16 677.919 43.154 675.581 43.154C674.405 43.154 673.243 42.888 672.585 42.538V41.026C673.201 41.488 674.209 41.936 675.427 41.936C677.275 41.936 677.695 41.236 677.695 40.144C677.695 39.108 677.051 38.548 675.301 38.548H674.209Z"
                fill="#666666"
              />
            </g>
            <defs>
              <clipPath id="clip0_5_29603">
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
          <form>
            <label>
              <span className="input__label">Nickname</span>
              <input
                id="field-nickname"
                className="step-one"
                name="nickname"
                placeholder="Placeholder"
              />
              <span className="input-error_message"></span>
            </label>
            <label>
              <span className="input__label">Name</span>
              <input
                id="field-name"
                className="step-one"
                name="name"
                placeholder="Placeholder"
              />
              <span className="input-error_message"></span>
            </label>
            <label>
              <span className="input__label">Surname</span>
              <input
                id="field-surname"
                className="step-one"
                name="surmane"
                placeholder="Placeholder"
              />
              <span className="input-error_message"></span>
            </label>
            <label>
              <span className="input__label">Sex</span>
              <select
                id="field-sex"
                className="step-one"
                name="sex"
              >
                <option
                  selected
                  disabled
                >
                  Не выбрано
                </option>
                <option
                  id="field-sex-option-man"
                  value="man"
                >
                  man
                </option>
                <option
                  id="field-sex-option-woman"
                  value="woman"
                >
                  woman
                </option>
              </select>
              <span className="input-error_message"></span>
            </label>
          </form>
        </div>
        <div className="button-container">
          <button
            onClick={(evt) => {
              navigate(AppRoute.StepOne);
            }}
            id="button-back"
            className="popup-form__button-back"
          >
            Назад
          </button>
          <button
            onClick={(evt) => {
              navigate(AppRoute.StepThree);
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
