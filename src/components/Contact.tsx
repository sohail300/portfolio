const Contact = () => {
  return (
      <div
        className=" flex flex-col justify-center items-center z-0 px-24 py-8"
        id="contact"
        style={{
          backgroundImage: "url(https://res.cloudinary.com/dwuzfbivo/image/upload/f_auto/v1711872115/portfolio/grid_ffmr1k.svg)",
          backgroundPosition: "center",
        }}
      >
        <img
          src="https://res.cloudinary.com/dwuzfbivo/image/upload/v1711872073/portfolio/contact/contact1_j2rkzp.jpg"
          alt=""
          className=" rounded-full w-40 h-40 object-cover "
          style={{ border: "3px solid #bbbbbb", filter: "grayscale(25%)" }}
        />
        <div className=" font-heading text-heading heading text-center mt-2">
          Md Sohail Ansari
        </div>
        <div
          className=" text-center mt-1"
          style={{ color: "#ff3f3f", fontSize: "14px" }}
        >
          Connect With Me
        </div>
        <div className=" flex flex-row justify-between mt-4">
          <a
            href="https://www.linkedin.com/in/md-sohail-ansari-b51201278/"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#3dfffc"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-linkedin"
            >
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect width="4" height="12" x="2" y="9"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>

          <a href="https://github.com/sohail300" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffe53d"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-github mx-6"
            >
              <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
              <path d="M9 18c-4.51 2-5-2-7-2"></path>
            </svg>
          </a>

          <a href="mailto:sohailatwork10@gmail.com" target="_blank">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#fe7676"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              className="lucide lucide-mail"
            >
              <rect width="20" height="16" x="2" y="4" rx="2"></rect>
              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
            </svg>
          </a>

          <a href="https://twitter.com/sohail_twts" target="_blank" className=" ml-5">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
            >
              <g fill="white">
                <path d="M1 2h2.5L18.5 22h-2.5z" />
                <path d="M5.5 2h2.5L23 22h-2.5z" />
                <path d="M3 2h5v2h-5z" />
                <path d="M16 22h5v-2h-5z" />
                <path d="M18.5 2h3.5L5 22h-3.5z" />
              </g>
            </svg>
          </a>
        </div>
      </div>
  );
};

export default Contact;
