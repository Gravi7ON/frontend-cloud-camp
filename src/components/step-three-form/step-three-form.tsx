import { useNavigate } from 'react-router-dom';
import Layout from '../layouts/layout';
import { AppRoute } from 'src/constant';

export default function StepThreeForm(): JSX.Element {
  const navigate = useNavigate();

  return (
    <Layout>
      <div className="popup-form-step-three__content">
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
              width="670"
              height="8"
              rx="4"
              fill="#5558FA"
            />
            <g clipPath="url(#clip0_10_29638)">
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
                d="M7.6615 11.8737C7.56701 11.9987 7.41932 12.0723 7.26255 12.0723H6.68246C6.54732 12.0723 6.41794 12.0176 6.32379 11.9206L3.50416 9.01762C3.31572 8.8236 3.31572 8.51491 3.50416 8.32089L3.97576 7.83535C4.17213 7.63317 4.49672 7.63317 4.69309 7.83535L6.49492 9.69046C6.70848 9.91034 7.06779 9.88806 7.25254 9.64349L11.1512 4.48265C11.321 4.2579 11.6429 4.21769 11.8627 4.39375L12.3864 4.81309C12.5976 4.98226 12.6359 5.28881 12.4728 5.50476L7.6615 11.8737Z"
                fill="white"
              />
              <path
                d="M337.255 43V42.104C340.643 38.912 342.183 38.03 342.183 36.168C342.183 34.852 341.511 34.25 340.083 34.25C339.075 34.25 338.179 34.67 337.493 35.202V33.69C338.249 33.298 339.271 33.046 340.307 33.046C342.561 33.046 343.499 34.082 343.499 35.916C343.499 38.072 342.141 39.15 339.117 41.838H343.611V43H337.255Z"
                fill="#5558FA"
              />
              <rect
                x="332"
                width="16"
                height="16"
                rx="8"
                fill="#5558FA"
              />
              <path
                d="M339.662 11.8737C339.567 11.9987 339.419 12.0723 339.263 12.0723H338.682C338.547 12.0723 338.418 12.0176 338.324 11.9206L335.504 9.01762C335.316 8.8236 335.316 8.51491 335.504 8.32089L335.976 7.83535C336.172 7.63317 336.497 7.63317 336.693 7.83535L338.495 9.69046C338.708 9.91034 339.068 9.88806 339.253 9.64349L343.151 4.48265C343.321 4.2579 343.643 4.21769 343.863 4.39375L344.386 4.81309C344.598 4.98226 344.636 5.28881 344.473 5.50476L339.662 11.8737Z"
                fill="white"
              />
              <path
                d="M674.223 38.758V37.288H675.175C676.463 37.288 676.939 36.812 676.939 35.874C676.939 35.062 676.561 34.67 675.245 34.67C674.209 34.67 673.271 35.048 672.641 35.468V33.648C673.411 33.312 674.629 33.046 675.679 33.046C678.101 33.046 678.801 33.97 678.801 35.538C678.801 36.798 678.185 37.568 676.981 37.904C678.451 38.086 679.095 38.898 679.095 40.228C679.095 42.076 678.087 43.154 675.497 43.154C674.391 43.154 673.243 42.916 672.515 42.538V40.606C673.159 41.096 674.181 41.516 675.273 41.516C676.883 41.516 677.233 40.97 677.233 40.06C677.233 39.22 676.785 38.758 675.301 38.758H674.223Z"
                fill="#5558FA"
              />
              <rect
                x="664"
                width="16"
                height="16"
                rx="8"
                fill="#5558FA"
              />
              <circle
                cx="672"
                cy="7.9999"
                r="1.6"
                fill="white"
              />
            </g>
            <defs>
              <clipPath id="clip0_10_29638">
                <rect
                  width="680"
                  height="48"
                  fill="white"
                />
              </clipPath>
            </defs>
          </svg>
        </div>
        <div className="popup-form__form-step-three">
          <form>
            <label>
              <span className="input__label">About</span>
              <textarea
                id="field-about"
                name="about"
                placeholder="Placeholder"
              ></textarea>
              <span className="input-error_message"></span>
            </label>
          </form>
        </div>
        <div className="button-container">
          <button
            onClick={(evt) => {
              navigate(AppRoute.StepTwo);
            }}
            id="button-back"
            className="popup-form__button-back"
          >
            Назад
          </button>
          <button
            id="button-next"
            className="popup-form__button-submit"
          >
            Отправить
          </button>
        </div>
      </div>
    </Layout>
  );
}
