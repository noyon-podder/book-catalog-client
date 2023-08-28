import { Link } from "react-router-dom";
import "./Banner.css";

const Banner = () => {
  return (
    <div className="banner-image flex items-center px-20 justify-center">
      <div className="container mx-auto py-10 lg:px-20 px-5 flex items-center justify-center">
        <div className="text-center w-full">
          <h3 className="uppercase text-white text-2xl lg:text-5xl font-extrabold text-center mb-4 lg:mb-8">
            Book Reading
          </h3>
          <h6 className="flex items-center gap-x-2 text-white justify-center text-2xl capitalize font-semibold">
            <span className="w-10 h-1 bg-white inline-block"></span> best book
            available
            <span className="w-10 h-1 bg-white inline-block"></span>
          </h6>
          <p className="text-gray-200 text-lg w-3/4 mx-auto mt-2 hidden lg:block">
            Authoritatively recaptiualize dynamic technology after ubiquitous
            metrics. Rapidiously promote dynamic materials rather.
          </p>
          <div className="flex items-center justify-center mt-6">
            <div className=" w-full md:w-2/4 flex search-field">
              {/* //TODO: search value to get react hook form  */}
              <input
                type="text"
                className="w-full py-2  px-4 outline-none "
                placeholder="Search your favorite book"
              />
              <Link
                to="/search"
                className=" px-4 py-2 text-white bg-[#F86263] text-lg font-semibold"
              >
                Search
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:mt-10 mt-5"></div>
      </div>
    </div>
  );
};

export default Banner;
