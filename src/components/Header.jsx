import { useContext } from "react";
import { ModalContext } from "../App";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import catalog from "../assets/catalog.png";
import sales from "../assets/sales.png";
import cart from "../assets/cart.png";
import contacts from "../assets/contacts.png";
import Search from "./Search.jsx";

export default function Header() {
  const { setOpenRegister, token, setOpenLogin, setToken } = useContext(ModalContext);

  function handleLogout() {
    setToken('');
    localStorage.removeItem('Token');
  }

  return (
      <div className="fixed top-0 flex flex-col gap-5 w-full z-10">
        <header className="flex justify-around items-center">
          <div className="bg-neutral-300 opacity-50 rounded-b-full absolute w-full h-20"></div>
          <div className="flex justify-around items-center relative z-10 w-full">
            <Link to={"/"}><img src={logo} alt="logo"/></Link>
            <nav className="header-nav">
              <ul className="flex xl:gap-11 lg:gap-4">
                <li>
                  <Link to="catalog" className="flex gap-1">
                    <img src={catalog} alt="картинка"/>
                    Каталог
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex gap-1">
                    <img src={sales} alt="картинка"/>
                    Скидки
                  </Link>
                </li>
                <li>
                  <Link to="cart" className="flex gap-1">
                    <img src={cart} alt="картинка"/>
                    Корзина
                  </Link>
                </li>
                <li>
                  <Link to="#" className="flex gap-1">
                    <img src={contacts} alt="картинка"/>
                    Контакты
                  </Link>
                </li>
              </ul>
            </nav>
            <Search/>
            {token === '' ? (
                <div className="flex gap-3">
                  <p className="cursor-pointer" onClick={() => setOpenRegister(true)}>Регистрация</p>
                  <p className="cursor-pointer" onClick={() => setOpenLogin(true)}>Вход</p>
                </div>
            ) : (
                <div className="flex gap-3">
                  <Link to="/profile">Личный кабинет</Link>
                  <p className="cursor-pointer" onClick={() => handleLogout()}>Выход</p>
                </div>
            )}
          </div>
        </header>
        <div className='right px-40'>
          <div className='right gap-3'>
            <div className='icons-loco'></div>
            <h4>г. Вологда</h4>
          </div>
          <div className='right gap-3'>
            <div className='icons-phone'></div>
            <h4>+7 (967) 672 - 45 - 62</h4>
          </div>
        </div>
      </div>
  );
}
