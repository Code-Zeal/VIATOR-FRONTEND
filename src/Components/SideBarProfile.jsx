import { Link } from "react-router-dom";

export default function SideBarProfile() {
  return (
    <div className="h-screen w-1/4 bg-[#F8FBFB]">
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
            <a
              href="/myTickets"
              className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-azulClaro"
            >
              <svg
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
            </a>
            <a
              href="/profile"
              className="flex items-center gap-2 rounded-lg px-4 py-2 hover:bg-azulClaro"
            >
              <details class="group [&_summary::-webkit-details-marker]:hidden">
                <summary class="flex cursor-pointer items-center justify-between rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700">
                  <div class="flex items-center gap-2">
                    <svg
                      width="27"
                      height="27"
                      viewBox="0 0 27 27"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M14.2076 21.8821C13.7622 21.6526 13.2378 21.6526 12.7924 21.8821L7.08254 24.8237C5.87328 25.4467 4.51169 24.3214 4.83961 22.9699L6.17467 17.4675C6.30232 16.9414 6.16776 16.3843 5.81568 15.9812L1.40855 10.9357C0.530067 9.93003 1.15409 8.32304 2.46343 8.21927L8.61147 7.73198C9.18657 7.68639 9.69206 7.32202 9.93074 6.78097L12.0593 1.95581C12.6215 0.681396 14.3785 0.681396 14.9407 1.95581L17.0693 6.78097C17.3079 7.32202 17.8135 7.68639 18.3885 7.73198L24.5365 8.21927C25.8458 8.32304 26.47 9.93003 25.5914 10.9357L21.1843 15.9812C20.8322 16.3843 20.6976 16.9414 20.8253 17.4675L22.1604 22.9699C22.4883 24.3214 21.1267 25.4467 19.9175 24.8237L14.2076 21.8821Z"
                        stroke="black"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>

                    <span class="text-sm font-medium"> Favoritos </span>
                  </div>
                </summary>
              </details>
            </a>

            <a
              href="/profile"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                width="33"
                height="32"
                viewBox="0 0 33 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="33" height="32" fill="#F8FBFB" />
                <path
                  d="M26.7287 26.435C26.2453 26.9226 24.0448 28.5833 16.5001 28.5833C8.94443 28.5833 6.74823 26.9178 6.27037 26.433C6.34 25.8886 6.63776 24.5482 7.91119 23.3151C9.24345 22.0252 11.7502 20.75 16.5001 20.75C21.2499 20.75 23.7566 22.0252 25.0887 23.3151C26.3641 24.5502 26.6603 25.893 26.7287 26.435ZM21.9376 9.41734C21.9376 11.3978 21.3195 13.2133 20.323 14.5175C19.3295 15.8179 17.9876 16.5833 16.5001 16.5833C15.0111 16.5833 13.6692 15.8178 12.6762 14.5175C11.6801 13.2132 11.0626 11.3974 11.0626 9.416C11.0626 7.41496 11.5979 5.92953 12.4948 4.95113C13.3834 3.98171 14.7123 3.41667 16.5001 3.41667C18.2879 3.41667 19.6167 3.98144 20.5053 4.9508C21.4021 5.92913 21.9376 7.41485 21.9376 9.41734Z"
                  fill="#F8FBFB"
                  stroke="#000000"
                  stroke-width="1.5"
                />
              </svg>

              <span class="text-sm font-medium"> Mis Datos </span>
            </a>

            <a
              href="/profile"
              className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
            >
              <svg
                width="25"
                height="25"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M8.02783 11.1422L15.543 18.5494C15.9618 18.9622 16.6457 18.9622 17.0657 18.5494L18.5271 17.1079C18.7307 16.9071 18.8429 16.6414 18.8429 16.3586C18.8429 16.0746 18.7307 15.8089 18.5271 15.6082L11.1427 8.32991L11.2641 7.99006C11.9353 6.12887 11.4574 4.02704 10.0458 2.63571C8.73827 1.34816 6.82102 0.854357 5.06112 1.29912L7.93874 4.13539C8.28239 4.47295 8.47099 4.92343 8.47099 5.40355C8.47099 5.88253 8.28239 6.333 7.93874 6.67172L6.76895 7.82469C6.05851 8.52264 4.90492 8.52264 4.19563 7.82469L1.31801 4.98843C0.867909 6.72303 1.36776 8.61274 2.6741 9.90143C3.98158 11.1901 5.9104 11.6965 7.70502 11.2266L8.02783 11.1422ZM16.3032 20C15.7316 20 15.16 19.7845 14.7249 19.3557L7.67377 12.4058C5.57949 12.8403 3.37528 12.2051 1.85605 10.7077C0.00474324 8.88303 -0.520567 6.07071 0.547407 3.71115L0.889892 2.9539L5.01368 7.01841C5.2717 7.27159 5.69288 7.27159 5.9509 7.01841L7.1207 5.86543C7.24566 5.74112 7.31393 5.57803 7.31393 5.40355C7.31393 5.22907 7.24565 5.06485 7.1207 4.94168L2.99691 0.877159L3.76521 0.539586C6.16034 -0.513039 9.01366 0.0047218 10.8638 1.82828C12.5022 3.44428 13.1131 5.84034 12.4687 8.02427L19.3451 14.8019C19.7674 15.217 20 15.7701 20 16.3586C20 16.9459 19.7674 17.499 19.3451 17.9141L17.8837 19.3557C17.4475 19.7845 16.8759 20 16.3032 20Z"
                  fill="black"
                />
              </svg>

              <span class="text-sm font-medium"> Admin </span>
            </a>
          </nav>
        </div>

        <div class="sticky inset-x-0 bottom-0 border-t border-gray-100">
          <a
            href="/profile"
            className="flex items-center gap-2 rounded-lg px-4 py-2 text-gray-500 hover:bg-gray-100 hover:text-gray-700"
          >
            <img
              alt="Man"
              src="https://images.unsplash.com/photo-1600486913747-55e5470d6f40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
              class="h-10 w-10 rounded-full object-cover"
            />

            <div>
              <p class="text-xs">
                <strong class="block font-medium">Eric Frusciante</strong>

                <span> eric@frusciante.com </span>
              </p>
            </div>
          </a>
        </div>
      </div>
    </div>
  );
}
