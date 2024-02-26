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

export const ModalContext = createContext(null);

function App() {
    const [openRegister, setOpenRegister] = useState(false);
    const [openLogin, setOpenLogin] = useState(false);
    const [successAlertText, setSuccessAlertText] = useState("");
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
                token,
                setToken,
            }}
        >
            <Router>
                <Header/>
                <SuccessAlert/>
                <LoginModal/>
                <RegisterModal/>
                <AppRoutes/>
                <Footer/>
            </Router>
        </ModalContext.Provider>
    );
}

export default App;
