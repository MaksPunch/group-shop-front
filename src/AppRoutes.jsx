import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Tov from "./pages/Tov";

const NotFound = () => {
  return (
    <div className="not_found text-center mt-52">
      <h1 className="display-4">404</h1>
      <p>страница не доступна</p>
    </div>
  );
};

export default function AppRoutes() {
  return useRoutes([
    {
      path: "/",
      element: <Homepage />,
    },
    {
      path: "/tov/:id",
      element: <Tov />,
    },
    { path: "*", element: <NotFound /> },
  ]);
}
