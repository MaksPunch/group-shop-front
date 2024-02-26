import {useState, createContext} from "react";
import {BrowserRouter as Router} from "react-router-dom";

import "./App.css";
import AppRoutes from "./AppRoutes";
import Header from "./components/Header";
import RegisterModal from "./components/RegisterModal";
import LoginModal from "./components/LoginModal";
import SuccessAlert from "./components/SuccessAlert";
import Footer from "./components/Footer.jsx";
import axios from "axios";
import ErrorAlert from "./components/ErrorAlert.jsx";
import AddProductModal from "./components/AddProductModal.jsx";

export const ModalContext = createContext(null);

function App() {
    const [openRegister, setOpenRegister] = useState(false);
    const [openAddProduct, setOpenAddProduct] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [successAlertText, setSuccessAlertText] = useState("");
    const [errorAlertText, setErrorAlertText] = useState("");
    const [token, setToken] = useState(localStorage.getItem("Token") || "");
    if (localStorage.getItem('Token')) {
        axios.defaults.headers.common["Authorization"] = "Bearer " + localStorage.getItem('Token');
    }
    return (
        <ModalContext.Provider
            value={{
                openRegister,
                setOpenRegister,
                openLogin,
                setOpenLogin,
                successAlertText,
                setSuccessAlertText,
                errorAlertText,
                setErrorAlertText,
                token,
                setToken,
                openAddProduct,
                setOpenAddProduct
            }}
        >
            <Router>
                <Header/>
                <SuccessAlert/>
                <ErrorAlert/>
                <LoginModal/>
                <RegisterModal/>
                <AddProductModal />
                <AppRoutes/>
                <Footer/>
            </Router>
        </ModalContext.Provider>
    );
}

export default App;
