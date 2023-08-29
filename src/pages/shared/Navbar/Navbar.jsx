import { useContext, useState } from "react";
import { HiMenuAlt1 } from "react-icons/hi";
import { IoClose } from "react-icons/io5";
import { Link, NavLink, useNavigate } from "react-router-dom";
import logo from "../../../assets/logo.avif";
import { AuthContext } from "../../../context/AuthProvider";
import { toast } from "react-hot-toast";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogOut = () => {
    logOut()
      .then(() => {
        navigate("/sign_in");
        toast.success("Logout successfully");
      })
      .catch((error) => console.log(error));
  };

  return (
    <header className="bg-base-100 py-4 border-b">
      <div className=" container mx-auto md:flex md:justify-between bg-white px-6">
        <div>
          <Link className="flex items-center gap-3" to="/">
            {/* <h3 className="text-xl font-semibold">Information</h3> */}
            <img src={logo} alt="" />
          </Link>
        </div>
        <div
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden"
          onClick={() => setOpen(!open)}
        >
          {open ? <IoClose /> : <HiMenuAlt1 />}
        </div>
        <ul
          className={`md:flex md:items-center md:pb-0 pb-10 absolute md:static bg-white md:z-auto  left-0 w-full md:w-auto md:pl-0 pl-7 transition-all-duration-500 z-50 ease-in ${
            open ? "top-16 opacity-100 bg-white" : "top-[-490px]"
          } md:opacity-100 opacity-0 `}
        >
          <li className="md:ml-8 text-base md:my-0 my-7">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#F86263] capitalize hover:text-[#F86263]"
                  : "text-gray-800 hover:text-[#F86263] capitalize duration-500 "
              }
              to="/"
            >
              Home
            </NavLink>
          </li>
          <li className="md:ml-8 text-base md:my-0 my-7">
            <NavLink
              className={({ isActive, isPending }) =>
                isPending
                  ? "pending"
                  : isActive
                  ? "text-[#F86263] capitalize hover:text-[#F86263]"
                  : "text-gray-800 hover:text-[#F86263] capitalize duration-500 "
              }
              to="/all_books"
            >
              All Books
            </NavLink>
          </li>

          {!user?.email ? (
            <>
              <li className="md:ml-8 text-base md:my-0 my-7">
                <NavLink
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? "text-[#F86263] capitalize hover:text-[#F86263]"
                      : "text-gray-800 hover:text-[#F86263] capitalize duration-500 "
                  }
                  to="/sign_in"
                >
                  Sign In
                </NavLink>
              </li>
            </>
          ) : (
            <>
              <li className="md:ml-8 text-base md:my-0 my-7">
                <NavLink
                  onClick={handleLogOut}
                  className={({ isActive, isPending }) =>
                    isPending
                      ? "pending"
                      : isActive
                      ? " capitalize hover:text-[#F86263]"
                      : "text-gray-800 hover:text-[#F86263] capitalize duration-500 "
                  }
                >
                  Sign Out
                </NavLink>
              </li>
            </>
          )}
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
