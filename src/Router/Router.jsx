import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInnerPage from "../Pages/InnerPage/About/AboutInnerPage";
import ContactInnerPage from "../Pages/InnerPage/Contact/ContactInnerPage";
import BlogInnerPage from "../Pages/InnerPage/Blog/BlogInnerPage";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";
import ServiceDetailsInner from "../Pages/InnerPage/ServiceDetails/ServiceDetailsInner";
import ProjectDetailsInner from "../Pages/InnerPage/ProjectDetails/ProjectDetailsInner";

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
        element: <AboutInnerPage />,
      },
      {
        path: "/contact",
        element: <ContactInnerPage />,
      },
      {
        path: "/blog",
        element: <BlogInnerPage />,
      },
      {
        path: "/blogdetails",
        element: <BlogDetails />,
      },
      {
        path: "/servicedetails",
        element: <ServiceDetailsInner />,
      },
      {
        path: "/projectdetails",
        element: <ProjectDetailsInner />,
      },
    ],
  },
]);

export default router;
