import { useRoutes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Catalog from "./pages/Catalog";

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
      path: "/catalog",
      element: <Catalog />,
    },
    { path: "*", element: <NotFound /> },
  ]);
}
