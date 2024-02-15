import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInnerPage from "../Pages/InnerPage/About/AboutInnerPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home1 />,
      },
      {
        path: "/about",
        element: <AboutInnerPage />
      }
    ],
  },
]);

export default router;
