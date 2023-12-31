import { useEffect } from 'react';
import ModalLayout from '../layouts/modal-layout';

type ErrorModalProps = {
  changeShowStatus: React.Dispatch<React.SetStateAction<boolean>>;
};

export default function ErrorModal({
  changeShowStatus,
}: ErrorModalProps): JSX.Element {
  useEffect(() => {
    const keyDownHandler = () => changeShowStatus((prev) => !prev);
    const clickOutModalHandler = (evt: Event) => {
      const modal = document.querySelector('.error-modal');

      if (modal) {
        const withinBoundaries = evt.composedPath().includes(modal);
        if (!withinBoundaries) {
          changeShowStatus((prev) => !prev);
        }
      }
    };

    document.addEventListener('keydown', keyDownHandler);
    document.addEventListener('click', clickOutModalHandler);

    return () => {
      document.removeEventListener('keydown', keyDownHandler);
      document.removeEventListener('click', clickOutModalHandler);
    };
  });

  return (
    <ModalLayout>
      <div className="modal__wrapper">
        <div className="error-modal">
          <div className="error-modal__header-wrapper">
            <div className="reject__title">
              <h2 className="error-modal__header">Ошибка</h2>
              <svg
                className="error-cross__close"
                xmlns="http://www.w3.org/2000/svg"
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                onClick={() => changeShowStatus((prev) => !prev)}
              >
                <rect
                  width="28"
                  height="28"
                  rx="14"
                  fill="black"
                  fillOpacity="0.04"
                />
                <path
                  d="M9.40385 8.6965C9.59911 8.50123 9.91569 8.50123 10.111 8.6965L14.0002 12.5857L17.8892 8.69665C18.0845 8.50138 18.4011 8.50138 18.5963 8.69665L19.3034 9.40375C19.4987 9.59902 19.4987 9.9156 19.3034 10.1109L15.4144 13.9999L19.3033 17.8889C19.4986 18.0841 19.4986 18.4007 19.3033 18.596L18.5962 19.3031C18.401 19.4984 18.0844 19.4984 17.8891 19.3031L14.0002 15.4141L10.111 19.3032C9.91577 19.4985 9.59919 19.4985 9.40393 19.3032L8.69682 18.5961C8.50156 18.4009 8.50156 18.0843 8.69682 17.889L12.5859 13.9999L8.69674 10.1107C8.50148 9.91545 8.50148 9.59886 8.69674 9.4036L9.40385 8.6965Z"
                  fill="#B3B3B3"
                />
              </svg>
            </div>
            <div className="reject__wrapper">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="80"
                height="80"
                viewBox="0 0 80 80"
                fill="none"
              >
                <rect
                  width="80"
                  height="80"
                  rx="40"
                  fill="#E84E58"
                  fillOpacity="0.15"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.9998 20.7998C29.4014 20.7998 20.7998 29.4014 20.7998 39.9998C20.7998 50.5982 29.4014 59.1998 39.9998 59.1998C50.5982 59.1998 59.1998 50.5982 59.1998 39.9998C59.1998 29.4014 50.5982 20.7998 39.9998 20.7998ZM32.4095 31.4835C32.7319 31.161 33.2548 31.161 33.5772 31.4835L40 37.9062L46.4225 31.4838C46.745 31.1613 47.2678 31.1613 47.5903 31.4838L48.758 32.6515C49.0805 32.974 49.0805 33.4968 48.758 33.8192L42.3355 40.2417L48.7579 46.6641C49.0804 46.9865 49.0804 47.5094 48.7579 47.8318L47.5902 48.9996C47.2677 49.322 46.7449 49.322 46.4224 48.9996L40 42.5772L33.5773 48.9998C33.2549 49.3223 32.7321 49.3223 32.4096 48.9998L31.2419 47.8321C30.9194 47.5096 30.9194 46.9868 31.2419 46.6643L37.6645 40.2417L31.2417 33.819C30.9193 33.4965 30.9193 32.9737 31.2417 32.6512L32.4095 31.4835Z"
                  fill="#E84E58"
                />
              </svg>
            </div>
            <button
              id="button-close"
              className="modal__button-close"
              onClick={() => changeShowStatus((prev) => !prev)}
            >
              Закрыть
            </button>
          </div>
        </div>
      </div>
    </ModalLayout>
  );
}
