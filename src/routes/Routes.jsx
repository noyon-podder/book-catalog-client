import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from "../pages/home/Home/Home";
import SearchValue from "../pages/shared/SarchValue/SearchValue";
import SignIn from "../pages/SignIn/SignIn";
import SignUp from "../pages/SignUp/SignUp";
import AllBooks from "../pages/AllBooks/AllBooks";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/all_books",
        element: <AllBooks />,
      },
      {
        path: "/search",
        element: <SearchValue />,
      },
      {
        path: "/sign_in",
        element: <SignIn />,
      },
      {
        path: "/sign_up",
        element: <SignUp />,
      },
    ],
  },
]);
