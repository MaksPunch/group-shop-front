import { Fragment, useContext, useState } from "react";
import { Dialog, Transition } from "@headlessui/react";
import {
  ExclamationTriangleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import { ModalContext } from "../App";
import logo from "../assets/logo.png";
import Input from "./Input";
import axios from "axios";

export default function RegisterModal() {
  const {
    openRegister: open,
    setOpenRegister: setOpen,
    setOpenLogin,
    setSuccessAlertText,
  } = useContext(ModalContext);
  const [alert, setAlert] = useState("");

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [login, setLogin] = useState("");
  const [surname, setSurname] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");

  function handleFormSubmit(e) {
    e.preventDefault();
    if (password !== passwordConfirm) {
      return setAlert("Пароли не совпадают");
    }
    axios
      .post("https://q9mthy-3000.csb.app/api/user/register", {
        name,
        email,
        login,
        phone,
        surname,
        password,
        password2: passwordConfirm,
      })
      .then((res) => {
        localStorage.setItem("Token", res.token);
        axios.defaults.headers.common["Authorization"] = res.token;
        setSuccessAlertText("Вы успешно зарегистрированы!");
        setOpen(false);
      })
      .catch((e) => setAlert(e.response.data.message || e.message));
  }

  function handleModalChange() {
    setOpen(false);
    setOpenLogin(true);
  }
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative transform overflow-hidden rounded-lg bg-white px-4 pb-4 pt-5 text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg sm:p-6">
                <div className="absolute right-0 top-0 hidden pr-4 pt-4 sm:block">
                  <button
                    type="button"
                    className="rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                    onClick={() => setOpen(false)}
                  >
                    <span className="sr-only">Close</span>
                    <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>
                <div className="flex flex-col items-center">
                  <img src={logo} alt="Camping Paradise" className="mb-12" />
                  <form
                    action="#"
                    className="flex flex-col gap-7"
                    onSubmit={handleFormSubmit}
                  >
                    {alert ? (
                      <div className="bg-red-500 text-white p-3 rounded-xl text-center">
                        {alert}
                      </div>
                    ) : (
                      ""
                    )}

                    <Input
                      id="register_name"
                      label="Имя"
                      name="name"
                      type="text"
                      value={name}
                      setValue={(e) => setName(e.target.value)}
                      required={true}
                    />
                    <Input
                      id="register_surname"
                      label="Фамилия"
                      name="surname"
                      type="text"
                      value={surname}
                      setValue={(e) => setSurname(e.target.value)}
                      required={true}
                    />
                    <Input
                      id="register_login"
                      label="Логин"
                      name="login"
                      type="text"
                      value={login}
                      setValue={(e) => setLogin(e.target.value)}
                      required={true}
                    />
                    <Input
                      id="register_email"
                      label="Почта"
                      name="email"
                      type="email"
                      value={email}
                      setValue={(e) => setEmail(e.target.value)}
                      required={true}
                    />
                    <Input
                      id="register_phone"
                      label="Номер телефона"
                      name="phone"
                      type="tel"
                      value={phone}
                      setValue={(e) => setPhone(e.target.value)}
                      required={true}
                    />
                    <Input
                      id="register_password"
                      label="Пароль"
                      name="password"
                      type="password"
                      value={password}
                      setValue={(e) => setPassword(e.target.value)}
                      required={true}
                    />
                    <Input
                      id="register_password2"
                      label="Повторите пароль"
                      name="password2"
                      type="password"
                      value={passwordConfirm}
                      setValue={(e) => setPasswordConfirm(e.target.value)}
                      required={true}
                    />
                    <input
                      className="bg-blue-950 text-white rounded-3xl text-3xl h-16 shadow-xl"
                      type="submit"
                      value="Зарегистрироваться"
                    />
                    <p className="font-[UbuntuMedium] text-xl text-opacity-80 text-center">
                      Уже есть аккаунт?{" "}
                      <span
                        className="border-b border-b-black border-opacity-80 cursor-pointer"
                        onClick={handleModalChange}
                      >
                        Войти
                      </span>
                    </p>
                  </form>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}
