import {useRoutes} from "react-router-dom";
import Homepage from "./pages/Homepage";
import Cart from "./pages/Cart.jsx";
import Tov from "./pages/Tov";
import NotAuthorized from "./pages/NotAuthorized.jsx";

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
            element: <Homepage/>,
        },
        {
            path: "/product/:id",
            element: <Tov/>,
        },
        {
            path: "/cart",
            element: <Cart/>,
        },
        {
            path: "/not_authorized",
            element: <NotAuthorized/>
        },
        {path: "*", element: <NotFound/>},
    ]);
}
