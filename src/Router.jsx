import { useRoutes } from "react-router-dom";
import Home from "./Landing/Home.jsx";
import About from "./pages/About/About.jsx";

const Routes = () => {
  return useRoutes([
    {
      path: "/",
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
      ],
    },
  ]);
};

export default Routes;
