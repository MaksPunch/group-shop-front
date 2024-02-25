import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <footer className="bg-[#8E99BD] pt-11 px-20 pb-7 mt-20">
            <div className="flex flex-col">
                <div className="flex gap-12">
                    <div className="flex flex-col gap-5 text-[22px] items-start">
                        <img src={logo} alt="логотип" className="mb-7"/>
                        <Link to="">Оферта</Link>
                        <Link to="">Политика конфиденциальности</Link>
                        <Link to="">Пользовательское соглашение</Link>
                        <Link to="">Поддержка</Link>
                    </div>
                    <div className="flex flex-col gap-5 text-[22px] items-start pt-5">
                        <p className="text-2xl font-[UbuntuMedium]">Категории</p>
                        <Link to="">Палатки и тенты</Link>
                        <Link to="">Рюкзаки</Link>
                        <Link to="">Пользовательское соглашение</Link>
                        <Link to="">Поддержка</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;