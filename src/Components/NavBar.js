export default function NavBar() {
  return (
    <nav id="up" className="p-5 w-screen flex-nowrap flex bg-white z-10">
      <ul className="flex w-full justify-between items-center">
        <li>
          <a href="/home">
            <img
              className="w-28 "
              src="https://i.imgur.com/wSCtx9T.png"
              alt=""
            />
          </a>
        </li>
        <li className="flex justify-around items-center min-w-max  ">
          <a href="/home">
            <svg
              className=" min-w-min w-6 h-6 m-4 sm:mx-10 sm:my-0 sm:w-auto sm:h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
            >
              <path
                d="M8.69471 0.292786C8.50718 0.105315 8.25288 0 7.98771 0C7.72255 0 7.46824 0.105315 7.28071 0.292786L0.280712 7.29279C0.0985537 7.48139 -0.00224062 7.73399 3.78026e-05 7.99619C0.00231622 8.25838 0.107485 8.5092 0.292893 8.6946C0.478301 8.88001 0.729114 8.98518 0.99131 8.98746C1.25351 8.98974 1.50611 8.88894 1.69471 8.70679L1.98771 8.41379V14.9998C1.98771 15.265 2.09307 15.5194 2.28061 15.7069C2.46814 15.8944 2.7225 15.9998 2.98771 15.9998H4.98771C5.25293 15.9998 5.50728 15.8944 5.69482 15.7069C5.88235 15.5194 5.98771 15.265 5.98771 14.9998V12.9998C5.98771 12.7346 6.09307 12.4802 6.28061 12.2927C6.46814 12.1051 6.7225 11.9998 6.98771 11.9998H8.98771C9.25293 11.9998 9.50728 12.1051 9.69482 12.2927C9.88235 12.4802 9.98771 12.7346 9.98771 12.9998V14.9998C9.98771 15.265 10.0931 15.5194 10.2806 15.7069C10.4681 15.8944 10.7225 15.9998 10.9877 15.9998H12.9877C13.2529 15.9998 13.5073 15.8944 13.6948 15.7069C13.8824 15.5194 13.9877 15.265 13.9877 14.9998V8.41379L14.2807 8.70679C14.4693 8.88894 14.7219 8.98974 14.9841 8.98746C15.2463 8.98518 15.4971 8.88001 15.6825 8.6946C15.8679 8.5092 15.9731 8.25838 15.9754 7.99619C15.9777 7.73399 15.8769 7.48139 15.6947 7.29279L8.69471 0.292786Z"
                fill="#165BA6"
              />
            </svg>
            <p className="mx-2 hidden sm:inline">Inicio</p>
          </a>

          <a href="/profile">
            <svg
              className=" min-w-min w-6 h-6 m-4 sm:mx-10 sm:my-0 sm:w-auto sm:h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="15"
              viewBox="0 0 14 15"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M7 6C7.79565 6 8.55871 5.68393 9.12132 5.12132C9.68393 4.55871 10 3.79565 10 3C10 2.20435 9.68393 1.44129 9.12132 0.87868C8.55871 0.316071 7.79565 0 7 0C6.20435 0 5.44129 0.316071 4.87868 0.87868C4.31607 1.44129 4 2.20435 4 3C4 3.79565 4.31607 4.55871 4.87868 5.12132C5.44129 5.68393 6.20435 6 7 6ZM0 15C-1.36979e-08 14.0807 0.18106 13.1705 0.532843 12.3212C0.884626 11.4719 1.40024 10.7003 2.05025 10.0503C2.70026 9.40024 3.47194 8.88463 4.32122 8.53284C5.1705 8.18106 6.08075 8 7 8C7.91925 8 8.8295 8.18106 9.67878 8.53284C10.5281 8.88463 11.2997 9.40024 11.9497 10.0503C12.5998 10.7003 13.1154 11.4719 13.4672 12.3212C13.8189 13.1705 14 14.0807 14 15H0Z"
                fill="#165BA6"
              />
            </svg>
            <p className="mx-2 hidden sm:inline ">Perfil</p>
          </a>
          <a href="/">
            <svg
              className=" min-w-min w-6 h-6 m-4 sm:mx-10 sm:my-0 sm:w-auto sm:h-auto"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="14"
              viewBox="0 0 16 14"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M1 0C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1V13C0 13.2652 0.105357 13.5196 0.292893 13.7071C0.48043 13.8946 0.734784 14 1 14C1.26522 14 1.51957 13.8946 1.70711 13.7071C1.89464 13.5196 2 13.2652 2 13V1C2 0.734784 1.89464 0.48043 1.70711 0.292893C1.51957 0.105357 1.26522 0 1 0ZM11.293 9.293C11.1108 9.4816 11.01 9.7342 11.0123 9.9964C11.0146 10.2586 11.1198 10.5094 11.3052 10.6948C11.4906 10.8802 11.7414 10.9854 12.0036 10.9877C12.2658 10.99 12.5184 10.8892 12.707 10.707L15.707 7.707C15.8945 7.51947 15.9998 7.26516 15.9998 7C15.9998 6.73484 15.8945 6.48053 15.707 6.293L12.707 3.293C12.6148 3.19749 12.5044 3.12131 12.3824 3.0689C12.2604 3.01649 12.1292 2.9889 11.9964 2.98775C11.8636 2.9866 11.7319 3.0119 11.609 3.06218C11.4861 3.11246 11.3745 3.18671 11.2806 3.2806C11.1867 3.3745 11.1125 3.48615 11.0622 3.60905C11.0119 3.73194 10.9866 3.86362 10.9877 3.9964C10.9889 4.12918 11.0165 4.2604 11.0689 4.3824C11.1213 4.50441 11.1975 4.61475 11.293 4.707L12.586 6H5C4.73478 6 4.48043 6.10536 4.29289 6.29289C4.10536 6.48043 4 6.73478 4 7C4 7.26522 4.10536 7.51957 4.29289 7.70711C4.48043 7.89464 4.73478 8 5 8H12.586L11.293 9.293Z"
                fill="#165BA6"
              />
            </svg>
            <p className="mx-2 hidden sm:inline ">Cerrar Sesión</p>
          </a>
        </li>
      </ul>
    </nav>
  );
}
