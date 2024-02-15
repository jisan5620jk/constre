import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInnerPage from "../Pages/InnerPage/About/AboutInnerPage";
import ContactInnerPage from "../Pages/InnerPage/Contact/ContactInnerPage";
import BlogInnerPage from "../Pages/InnerPage/Blog/BlogInnerPage";

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
      },
      {
        path: "/contact",
        element: <ContactInnerPage />
      },
      {
        path: "/blog",
        element: <BlogInnerPage />
      }
    ],
  },
]);

export default router;
