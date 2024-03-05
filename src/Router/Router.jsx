import { createBrowserRouter } from "react-router-dom";
import Main from "../Main/Main";
import Home1 from "../Pages/Home1/Home1";
import AboutInnerPage from "../Pages/InnerPage/About/AboutInnerPage";
import ContactInnerPage from "../Pages/InnerPage/Contact/ContactInnerPage";
import BlogInnerPage from "../Pages/InnerPage/Blog/BlogInnerPage";
import BlogDetails from "../Pages/InnerPage/BlogDetails/BlogDetails";
import ServiceDetailsInner from "../Pages/InnerPage/ServiceDetails/ServiceDetailsInner";
import ProjectDetailsInner from "../Pages/InnerPage/ProjectDetails/ProjectDetailsInner";
import PricingInner from "../Pages/InnerPage/PricingInner/PricingInner";
import TeamInner from "../Pages/InnerPage/TeamInner/TeamInner";
import ServiceInner from "../Pages/InnerPage/Service/ServiceInner";

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
        path: "/pricinginner",
        element: <PricingInner />,
      },
      {
        path: "/projectdetails",
        element: <ProjectDetailsInner />,
      },
      {
        path: "/teaminner",
        element: <TeamInner />,
      },
      {
        path: "/serviceinner",
        element: <ServiceInner />,
      },
    ],
  },
]);

export default router;
