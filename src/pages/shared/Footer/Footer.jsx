import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer-image">
        <div className="container px-6 py-12 mx-auto">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            <div>
              <p className="font-bold text-white text-lg ">Quick Link</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Who We Are
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Our Philosophy
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white text-lg ">Industries</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Retail & E-Commerce
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Information Technology
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Finance & Insurance
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white text-lg ">Services</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Translation
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Proofreading & Editing
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  Content Creation
                </a>
              </div>
            </div>

            <div>
              <p className="font-semibold text-white text-lg ">Contact Us</p>

              <div className="flex flex-col items-start mt-5 space-y-2">
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  +880 768 473 4978
                </a>
                <a
                  href="#"
                  className="text-gray-200 transition-colors duration-300  hover:underline hover:text-blue-500"
                >
                  info@merakiui.com
                </a>
              </div>
            </div>
          </div>

          <hr className="my-6 border-gray-200 md:my-10 " />

          <div className="flex flex-col items-center justify-center ">
            <p className="mt-4 text-sm text-gray-100 sm:mt-0 ">
              © Copyright 2023. All Rights Reserved Noyon Podder.
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
