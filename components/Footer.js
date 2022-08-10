import React from "react";

export default function Footer() {
  return (
    <footer className="bg-yankee-blue px-4 py-6">
      <div className="container mx-auto md:max-w-screen-2xl lg:max-w-screen-xl">
        <div className="flex flex-row justify-between items-center :">
          <svg
            width="88"
            height="23"
            viewBox="0 0 88 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.532 22.336C5.852 22.336 4.38667 21.944 3.136 21.16C1.904 20.3573 1.064 19.284 0.616 17.94L3.696 16.484C4.088 17.3053 4.62 17.9493 5.292 18.416C5.964 18.8827 6.71067 19.116 7.532 19.116C8.12933 19.116 8.58667 18.9947 8.904 18.752C9.22133 18.5093 9.38 18.1733 9.38 17.744C9.38 17.52 9.324 17.3333 9.212 17.184C9.1 17.016 8.932 16.8667 8.708 16.736C8.484 16.6053 8.204 16.4933 7.868 16.4L5.264 15.672C4.01333 15.3173 3.052 14.748 2.38 13.964C1.708 13.1613 1.372 12.2187 1.372 11.136C1.372 10.184 1.61467 9.35333 2.1 8.644C2.58533 7.93467 3.26667 7.384 4.144 6.992C5.02133 6.58133 6.02933 6.376 7.168 6.376C8.66133 6.376 9.968 6.73067 11.088 7.44C12.2267 8.13067 13.0293 9.11067 13.496 10.38L10.388 11.836C10.164 11.2013 9.75333 10.6973 9.156 10.324C8.57733 9.932 7.91467 9.736 7.168 9.736C6.62667 9.736 6.19733 9.848 5.88 10.072C5.58133 10.296 5.432 10.604 5.432 10.996C5.432 11.2013 5.488 11.388 5.6 11.556C5.712 11.724 5.88933 11.8733 6.132 12.004C6.39333 12.1347 6.71067 12.256 7.084 12.368L9.52 13.096C10.7893 13.4693 11.76 14.0387 12.432 14.804C13.104 15.5507 13.44 16.4747 13.44 17.576C13.44 18.528 13.188 19.3587 12.684 20.068C12.1987 20.7773 11.5173 21.3373 10.64 21.748C9.76267 22.14 8.72667 22.336 7.532 22.336ZM15.9502 22V0.803999H20.1502V14.384L18.5822 13.88L25.3302 6.712H30.5102L24.9662 12.872L30.4822 22H25.7222L21.1022 14.244L23.5382 13.628L18.8622 18.724L20.1502 16.288V22H15.9502ZM32.3564 22V6.712H36.5564V22H32.3564ZM32.3564 5.34V1.14H36.5564V5.34H32.3564ZM39.6298 22V0.803999H43.8298V22H39.6298ZM46.9033 22V0.803999H51.1033V22H46.9033ZM61.5407 22.336C59.9167 22.336 58.5074 21.9813 57.3127 21.272C56.1181 20.544 55.1941 19.5733 54.5407 18.36C53.8874 17.1467 53.5607 15.8027 53.5607 14.328C53.5607 12.7973 53.8967 11.4347 54.5687 10.24C55.2594 9.04533 56.1834 8.10267 57.3407 7.412C58.4981 6.72133 59.8047 6.376 61.2607 6.376C62.4741 6.376 63.5474 6.572 64.4807 6.964C65.4141 7.33733 66.1981 7.86933 66.8327 8.56C67.4861 9.25067 67.9807 10.0533 68.3167 10.968C68.6527 11.864 68.8207 12.844 68.8207 13.908C68.8207 14.2067 68.8021 14.5053 68.7647 14.804C68.7461 15.084 68.6994 15.3267 68.6247 15.532H57.1727V12.452H66.2447L64.2567 13.908C64.4434 13.1053 64.4341 12.396 64.2287 11.78C64.0234 11.1453 63.6594 10.6507 63.1367 10.296C62.6327 9.92267 62.0074 9.736 61.2607 9.736C60.5327 9.736 59.9074 9.91333 59.3847 10.268C58.8621 10.6227 58.4701 11.1453 58.2087 11.836C57.9474 12.5267 57.8447 13.3667 57.9007 14.356C57.8261 15.2147 57.9287 15.9707 58.2087 16.624C58.4887 17.2773 58.9181 17.7907 59.4967 18.164C60.0754 18.5187 60.7754 18.696 61.5967 18.696C62.3434 18.696 62.9781 18.5467 63.5007 18.248C64.0421 17.9493 64.4621 17.5387 64.7607 17.016L68.1207 18.612C67.8221 19.3587 67.3461 20.012 66.6927 20.572C66.0581 21.132 65.3021 21.5707 64.4247 21.888C63.5474 22.1867 62.5861 22.336 61.5407 22.336ZM78.4899 22.336C76.9966 22.336 75.6619 21.9813 74.4859 21.272C73.3099 20.5627 72.3766 19.6013 71.6859 18.388C71.0139 17.1747 70.6779 15.8307 70.6779 14.356C70.6779 12.8627 71.0232 11.5187 71.7139 10.324C72.4046 9.11067 73.3379 8.14933 74.5139 7.44C75.6899 6.73067 77.0059 6.376 78.4619 6.376C79.5819 6.376 80.5712 6.59067 81.4299 7.02C82.3072 7.43067 82.9979 8.01867 83.5019 8.784L82.8579 9.624V0.803999H87.0579V22H83.1379V19.2L83.5299 20.068C83.0072 20.8147 82.2979 21.384 81.4019 21.776C80.5059 22.1493 79.5352 22.336 78.4899 22.336ZM78.9939 18.556C79.7592 18.556 80.4312 18.3787 81.0099 18.024C81.5886 17.6693 82.0366 17.1747 82.3539 16.54C82.6899 15.9053 82.8579 15.1773 82.8579 14.356C82.8579 13.5347 82.6899 12.8067 82.3539 12.172C82.0366 11.5373 81.5886 11.0427 81.0099 10.688C80.4312 10.3333 79.7592 10.156 78.9939 10.156C78.2286 10.156 77.5379 10.3427 76.9219 10.716C76.3246 11.0707 75.8579 11.5653 75.5219 12.2C75.1859 12.816 75.0179 13.5347 75.0179 14.356C75.0179 15.1773 75.1859 15.9053 75.5219 16.54C75.8579 17.1747 76.3246 17.6693 76.9219 18.024C77.5379 18.3787 78.2286 18.556 78.9939 18.556Z"
              fill="white"
            />
          </svg>
          <button
            type="button"
            className="inline-flex items-center px-7 py-3 text-base font-medium rounded-full shadow-sm text-white bg-gradient-to-t from-frost-bite to-dark-blue-gray"
          >
            Get Started
          </button>
        </div>
      </div>
    </footer>
  );
}
