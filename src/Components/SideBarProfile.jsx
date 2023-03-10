import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function SideBarProfile() {
  const data = useSelector((state) => state?.userData);
  const admin = useSelector((state) => state?.isAdm);
  console.log();
  return (
    <div className="h-screen w-1/5 bg-[#F8FBFB]">
      <div class="flex h-screen flex-col justify-between border-r bg-white">
        <div class="px-4 ">
          <span class="grid h-10 w-32 my-12 place-content-center rounded-lg bg-gray-100 text-xs text-gray-600">
            <img
              className="w-32 h-32"
              src="https://cdn.discordapp.com/attachments/1073592184344948758/1075861657273782332/Viator-logo-PNG.png"
              alt=""
            />
          </span>

          <nav aria-label="Main Nav" class="mt-24 flex flex-col space-y-1">
            <Link
              to="/myTickets"
              className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-azulClaro"
            >
              <svg
                className="bg-blanco rounded-[4px]"
                width="30"
                height="20"
                viewBox="0 0 30 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M26.4595 0H3.54041C1.58813 0 0 1.72026 0 3.83453V7.38572V8.52281L1.03904 8.68425C1.63975 8.77753 2.09279 9.34325 2.09279 10.0002C2.09279 10.6566 1.63998 11.2223 1.03957 11.3156L0 11.4766V12.6142V16.1659C0 18.2797 1.58813 20 3.54041 20H26.4595C28.4118 20 30 18.2797 30 16.1659V12.6378V11.3859L28.8452 11.3274C28.189 11.2942 27.6746 10.7109 27.6746 10.0002C27.6746 9.2895 28.189 8.70633 28.8457 8.67257L30 8.61362V7.36224V3.83459C30 1.72026 28.4119 0 26.4595 0ZM28.7887 7.36224C27.4946 7.42836 26.4633 8.58233 26.4633 10.0002C26.4633 11.4182 27.4946 12.5721 28.7887 12.6378V16.1659C28.7887 17.5587 27.7458 18.6881 26.4595 18.6881H3.54041C2.2541 18.6881 1.21131 17.5587 1.21131 16.1659V12.6142C2.39396 12.4307 3.3041 11.332 3.3041 10.0002C3.3041 8.66838 2.39396 7.56968 1.21131 7.38572V3.83453C1.21131 2.44126 2.25416 1.31185 3.54041 1.31185H26.4595C27.7458 1.31185 28.7887 2.44126 28.7887 3.83453V7.36224Z"
                  fill="black"
                />
                <path
                  d="M7.75616 14.833H6.95483V17.0965H7.75616V14.833Z"
                  fill="black"
                />
                <path
                  d="M7.75616 10.8565H6.95483V13.12H7.75616V10.8565Z"
                  fill="black"
                />
                <path
                  d="M7.75616 6.87949H6.95483V9.14339H7.75616V6.87949Z"
                  fill="black"
                />
                <path
                  d="M7.75616 2.90347H6.95483V5.16693H7.75616V2.90347Z"
                  fill="black"
                />
              </svg>

              <span class="text-sm font-medium"> Mis Boletos </span>
            </Link>

            <Link
              to="/data"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro"
            >
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="32" fill="none" />
                <path
                  d="M26.7287 26.435C26.2453 26.9226 24.0448 28.5833 16.5001 28.5833C8.94443 28.5833 6.74823 26.9178 6.27037 26.433C6.34 25.8886 6.63776 24.5482 7.91119 23.3151C9.24345 22.0252 11.7502 20.75 16.5001 20.75C21.2499 20.75 23.7566 22.0252 25.0887 23.3151C26.3641 24.5502 26.6603 25.893 26.7287 26.435ZM21.9376 9.41734C21.9376 11.3978 21.3195 13.2133 20.323 14.5175C19.3295 15.8179 17.9876 16.5833 16.5001 16.5833C15.0111 16.5833 13.6692 15.8178 12.6762 14.5175C11.6801 13.2132 11.0626 11.3974 11.0626 9.416C11.0626 7.41496 11.5979 5.92953 12.4948 4.95113C13.3834 3.98171 14.7123 3.41667 16.5001 3.41667C18.2879 3.41667 19.6167 3.98144 20.5053 4.9508C21.4021 5.92913 21.9376 7.41485 21.9376 9.41734Z"
                  fill="#F8FBFB"
                  stroke="#000000"
                  stroke-width="1.5"
                />
              </svg>

              <span class="text-sm font-medium"> Mis Datos </span>
            </Link>

            {admin === "admin" ? (
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 gap-2  text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro">
                  <div class="flex items-center gap-2">
                    <svg
                      width="25px"
                      height="25px"
                      viewBox="0 0 25 25"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M9.6164 14.9622L9.80791 15.1537L18.4952 23.841C18.9338 24.2796 19.5092 24.5 20.0861 24.5C20.6643 24.5 21.24 24.2796 21.6802 23.8407C21.6802 23.8406 21.6803 23.8406 21.6803 23.8405L23.4801 22.0393L23.4808 22.0386C23.9069 21.6136 24.1407 21.0497 24.1407 20.4482C24.1407 19.8452 23.9068 19.2813 23.4808 18.8564L23.4803 18.8559L15.0083 10.3839L14.7991 10.1747L14.8817 9.8907C15.6253 7.33439 14.9195 4.52877 13.031 2.63891C13.031 2.63887 13.031 2.63882 13.0309 2.63878M9.6164 14.9622L13.0309 2.63878M9.6164 14.9622L9.35137 15.018C6.93499 15.5267 4.39147 14.7823 2.64027 13.0311C0.506243 10.8971 -0.100559 7.60341 1.13105 4.84264L1.1311 4.84251L1.257 4.5601L5.82347 9.12657L5.82427 9.12736C6.33724 9.63804 7.17151 9.63804 7.68448 9.12736L7.68527 9.12657L9.12651 7.68535L9.12814 7.6837C9.37448 7.43507 9.51101 7.1049 9.51101 6.75444C9.51101 6.40529 9.37532 6.07239 9.12652 5.82356L9.12651 5.82355L4.56002 1.25706L4.84245 1.13116L4.84249 1.13114C7.6048 -0.100554 10.8984 0.506369 13.0309 2.63878M9.6164 14.9622L13.0309 2.63878"
                        fill="white"
                        stroke="black"
                      />
                    </svg>

                    <span class="text-sm font-medium "> Admin </span>
                  </div>

                  <span class="shrink-0 transition duration-300 group-open:-rotate-180">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="h-5 w-5"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </span>
                </summary>

                <nav aria-label="Account Nav" class="mt-2 flex flex-col px-4">
                  <Link
                    to="/createAirport"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro"
                  >
                    <svg
                      width="25"
                      height="25"
                      viewBox="0 0 57 65"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M17.2209 24.936H20.4449V45.3488V46.0988H21.1949H53.562V64.25H48.4386V51.3953V50.6453H47.6886H41.0652H40.3152V51.3953V64.25H0.75V46.0988H5.29873H6.04873V45.3488V24.936H9.27278H10.5145L9.93661 23.837L6.04873 16.4428V11.3314H11.9221H12.6721V10.5814V0.75H13.8215V10.5814V11.3314H14.5715H20.4449V16.4428L16.557 23.837L15.9792 24.936H17.2209ZM44.1588 13.6119L45.0394 13.1839L44.3968 12.4452L37.7213 4.77043L50.0344 10.4447L50.357 10.5934L50.6763 10.438L55.5016 8.09087L55.503 8.09017C55.7039 7.99195 56.0337 8.04797 56.1916 8.47029C56.3616 8.92517 56.1432 9.36939 55.8757 9.49927L55.875 9.49962L51.0472 11.8497L50.7704 11.9845L50.6681 12.2748L45.8058 26.0722L45.608 15.6836L45.5856 14.51L44.53 15.0235L39.8807 17.285L39.6427 17.4007L39.5301 17.6402L37.622 21.6965L37.1225 18.0898L37.0991 17.9211L37.0052 17.779L34.9168 14.621L38.9561 15.9105L39.2421 16.0018L39.5121 15.8705L44.1588 13.6119ZM5.29873 50.6453H4.54873V51.3953V57.4419V58.1919H5.29873H19.8702H20.6202V57.4419V51.3953V50.6453H19.8702H5.29873ZM22.5196 50.6453H21.7696V51.3953V57.4419V58.1919H22.5196H37.0911H37.8411V57.4419V51.3953V50.6453H37.0911H22.5196Z"
                        fill="white"
                        stroke="black"
                        stroke-width="1.5"
                      />
                    </svg>

                    <span class="text-sm font-medium"> Crear Aeropuerto </span>
                  </Link>

                  <Link
                    to="/createAirline"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      xlink="http://www.w3.org/1999/xlink"
                      fill="#000000"
                      width="30px"
                      height="30px"
                      viewBox="0 0 512 512"
                      enable-background="new 0 0 512 512"
                      id="pilot_x5F_captain"
                      version="1.1"
                      space="preserve"
                    >
                      <path d="M256,317.615l8.79-6.02l20.507-14.045v-22.95c19.198-9.237,33.347-27.276,37.257-48.879h7.027  c11.118,0,20.13-9.013,20.13-20.13v-1.759c0-11.118-9.012-20.131-20.13-20.131h-5.923v-12.896c-28.72,9.248-59.02,9.92-67.049,9.92  c-1.049,0-1.715-0.011-1.951-0.016c-28.922,0-50.432-3.382-66.316-7.915v10.906h-6.077c-11.118,0-20.13,9.013-20.13,20.131v1.759  c0,11.117,9.012,20.13,20.13,20.13h7.182c3.91,21.603,18.059,39.642,37.257,48.879v22.95L256,317.615z M285.297,193.471  c3.637,0,6.585,2.948,6.585,6.585c0,3.636-2.948,6.584-6.585,6.584c-3.636,0-6.584-2.948-6.584-6.584  C278.713,196.419,281.661,193.471,285.297,193.471z M226.703,193.471c3.637,0,6.584,2.948,6.584,6.585  c0,3.636-2.947,6.584-6.584,6.584s-6.585-2.948-6.585-6.584C220.118,196.419,223.066,193.471,226.703,193.471z M222.047,228.832  c0-2.021,1.639-3.659,3.659-3.659h60.588c2.021,0,3.659,1.639,3.659,3.659c0,18.752-15.201,33.953-33.953,33.953  S222.047,247.584,222.047,228.832z" />
                      <path d="M400.512,468.354c0,0-6.155-53.659-21.646-102.091c-6.369-19.912-20.064-36.658-38.297-46.888  c-6.063-3.402-12.786-7.008-19.752-10.451l-1.14,2.678l-38.837,91.285l-10.784-58.322c-0.621-3.359-3.553-5.799-6.97-5.799h-14.171  c-3.418,0-6.35,2.439-6.971,5.799l-10.784,58.322l-38.837-91.285l-1.14-2.678c-6.966,3.443-13.689,7.049-19.752,10.451  c-18.232,10.229-31.927,26.976-38.296,46.888c-15.492,48.432-21.647,102.091-21.647,102.091H256H400.512z M303.15,397.908h14.964  c2.448,0,4.555,1.527,5.572,3.755c2.629,5.753,11.043,6.353,11.043,6.353s8.413-0.6,11.042-6.353  c1.019-2.228,3.124-3.755,5.572-3.755h14.965c2.065,0,3.226,2.377,1.955,4.006l-6.856,8.785c-1.581,2.027-4.009,3.213-6.58,3.213  h-5.378c-2.79,0-5.499,0.933-7.697,2.65l-4.641,3.629c-1.399,1.094-3.365,1.094-4.765,0l-4.641-3.629  c-2.198-1.718-4.907-2.65-7.696-2.65h-5.379c-2.57,0-4.998-1.186-6.58-3.213l-6.855-8.785  C299.925,400.285,301.085,397.908,303.15,397.908z" />
                      <path d="M143.276,137.223c23.124-6.964,65.557-17.577,109.965-17.818v-0.013c0.257,0,0.515,0.006,0.771,0.006  c0.255,0,0.508-0.006,0.763-0.006v0.013c45.037,0.237,88.071,10.868,111.494,17.834c0.546-1.368,0.979-2.705,1.308-4  c2.218-8.713-1.692-17.883-8.916-21.446c-6.514-3.214-17.772-11.682-34.817-33.71c-0.298-0.385-0.597-0.767-0.896-1.145  c-35.22-44.389-101.124-44.389-136.344,0c-0.3,0.378-0.599,0.76-0.896,1.145c-17.045,22.028-28.304,30.496-34.818,33.71  c-7.224,3.563-11.133,12.733-8.916,21.446C142.302,134.528,142.732,135.859,143.276,137.223z M220.779,72.507h16.109  c2.636,0,4.902,1.906,5.998,4.686c2.831,7.178,11.889,7.926,11.889,7.926s9.058-0.748,11.888-7.926  c1.096-2.779,3.362-4.686,5.999-4.686h16.108c2.224,0,3.473,2.966,2.105,4.997l-7.381,10.964c-1.703,2.528-4.316,4.007-7.084,4.007  h-5.79c-3.003,0-5.92,1.165-8.285,3.309l-4.996,4.527c-1.507,1.365-3.622,1.365-5.129,0l-4.996-4.527  c-2.366-2.144-5.283-3.309-8.286-3.309h-5.79c-2.768,0-5.381-1.479-7.084-4.007l-7.381-10.964  C217.307,75.473,218.556,72.507,220.779,72.507z" />
                      <path d="M323.658,141.508c-0.637-0.072-1.287-0.144-1.936-0.216c-18.74-2.073-42.207-3.857-67.71-3.893  c-40.928,0.058-76.562,4.734-95.41,7.771c3.486,3.35,12.166,10.066,29.739,15.548c14.951,4.664,36.321,8.426,66.434,8.426  c0.576,0.008,37.126,0.533,68.883-10.568c9.563-3.343,18.682-7.74,26.262-13.527C343.068,143.971,334.151,142.7,323.658,141.508z" />
                    </svg>

                    <span class="text-sm font-medium"> Crear Aerolinea </span>
                  </Link>
                  <Link
                    to="/conectAir"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M50 15.9096V2.27234C50 1.01702 48.9819 0 47.7266 0H34.0915C32.8351 0 31.8181 1.01808 31.8181 2.27234V7.95426C20.716 7.95426 11.3883 15.5851 8.73511 25.8702L6.37234 25.4543C5.94787 25.3809 5.51809 25.5511 5.2617 25.8968C5.00638 26.2426 4.96596 26.7043 5.16064 27.0883L7.62234 31.9489C3.30745 32.6521 0 36.3968 0 40.9096C0 45.9223 4.07872 50 9.09149 50C13.7191 50 17.5404 46.5213 18.1032 42.0457H26.1362V44.3181C26.1362 44.7489 26.3798 45.1415 26.7649 45.3351C27.15 45.5266 27.6106 45.4862 27.9564 45.2266L31.9287 42.2457C32.5777 46.6245 36.3521 49.9989 40.9074 49.9989C45.9213 50 50 45.9223 50 40.9096C50 36.2819 46.5213 32.4596 42.0436 31.8979V23.8638H44.3181C44.7468 23.8638 45.1415 23.6202 45.333 23.2362C45.5266 22.8521 45.4862 22.3904 45.2266 22.0457L42.3277 18.183H47.7234C48.9819 18.1819 50 17.1638 50 15.9096ZM9.09149 45.4543C6.58511 45.4543 4.54574 43.416 4.54574 40.9106C4.54574 38.4053 6.58511 36.3649 9.09149 36.3649C11.5979 36.3649 13.6362 38.4053 13.6362 40.9106C13.6362 43.416 11.5979 45.4543 9.09149 45.4543ZM45.4564 40.9096C45.4564 43.4149 43.416 45.4532 40.9106 45.4532C38.4053 45.4532 36.367 43.4149 36.367 40.9096C36.367 38.4043 38.4053 36.3638 40.9106 36.3638C43.416 36.3638 45.4564 38.4043 45.4564 40.9096ZM36.484 23.2351C36.6777 23.6202 37.0702 23.8628 37.5 23.8628H39.7734V31.8957C35.7372 32.4043 32.5245 35.5628 31.9298 39.5713L27.9553 36.5894C27.6117 36.3319 27.1511 36.2915 26.766 36.4819C26.3819 36.6766 26.1372 37.0681 26.1372 37.4989V39.7713H18.1043C17.5894 35.6628 14.3245 32.4021 10.2128 31.8936C10.216 31.8681 10.2287 31.8457 10.2287 31.8181C10.2287 31.8128 10.2287 31.8106 10.2287 31.8064L13.6681 28.5862C13.9819 28.2926 14.1021 27.8457 13.9809 27.433C13.8564 27.0191 13.5128 26.7117 13.0883 26.6372L10.9787 26.2649C13.4383 17.0468 21.8362 10.2266 31.8191 10.2266V15.9085C31.8191 17.1638 32.8362 18.1809 34.0926 18.1809H39.4894L36.5915 22.0447C36.3319 22.3894 36.2904 22.85 36.484 23.2351ZM45.4564 13.6362H36.3638V4.54574H45.4564V13.6362Z"
                        fill="black"
                      />
                    </svg>

                    <span class="text-sm font-medium text-center">
                      Conexi??n Aeropuerto/Aerolinea
                    </span>
                  </Link>

                  <Link
                    to="/createFlight"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro"
                  >
                    <svg
                      width="30"
                      height="30"
                      viewBox="0 0 52 36"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        width="50"
                        height="34"
                        transform="translate(1 1)"
                        fill="white"
                      />
                      <path
                        d="M49 3H3V33H49V3Z"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M33.9583 8.0625V23.9583"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M29.9792 25.9583L33.9584 23.9583"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M37.9374 25.9583L33.9583 23.9583"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M33.9583 14.0208L26 18"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M33.9583 14.0208L41.9166 18"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M18.0417 10.0417H22.0209"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M18.0417 18H22.0209"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                      <path
                        d="M18.0417 25.9583H22.0209"
                        stroke="#020202"
                        stroke-width="5"
                        stroke-miterlimit="10"
                      />
                    </svg>

                    <span class="text-sm font-medium"> Crear Vuelo </span>
                  </Link>
                  <Link
                    to="/flights"
                    class="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700 hover:bg-azulClaro"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="30px"
                      height="30px"
                      viewBox="0 0 512 512"
                    >
                      <path
                        fill="#000000"
                        d="M480 40L32 296l112.148 37.383L448 72 209.404 355.135 320 392 480 40zM208 376l-16 96 49.932-83.863L208 376z"
                      />
                    </svg>

                    <span class="text-sm font-medium"> Vuelos </span>
                  </Link>
                </nav>
              </details>
            ) : (
              <></>
            )}
          </nav>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <Link
            to="/data"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <img
              alt="Man"
              src={data.picture}
              class="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p class="text-xs">
                <strong class="block font-medium">{data.nickName}</strong>

                <span>{data.email}</span>
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
