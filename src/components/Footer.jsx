import React from 'react';
import {Link} from "react-router-dom";
import logo from '../assets/logo.png';
import telegram_img from '../assets/tg.png';
import vk from '../assets/vk.png';
import email from '../assets/email.png';
import instagram from '../assets/instagram.png';
import phone_footer from '../assets/phone_footer.png';
import geo from '../assets/geo.png';
import men from '../assets/footer_mans.png'

const Footer = () => {
    return (
        <footer className="bg-[#8E99BD] relative pt-11 pb-7 mt-20 flex flex-col items-center">
            <div className="flex gap-12 content-center">
                <div className="flex flex-col gap-5 text-[22px] items-start">
                    <img src={logo} alt="логотип" className="mb-7"/>
                    <Link to="">Оферта</Link>
                    <Link to="">Политика конфиденциальности</Link>
                    <Link to="">Пользовательское соглашение</Link>
                    <Link to="">Поддержка</Link>
                </div>
                <div className="flex flex-col gap-5 text-[22px] items-start pt-5">
                    <p className="text-2xl font-[UbuntuMedium]">Категории</p>
                    <div className="flex gap-20">
                        <div className="flex flex-col gap-6">
                            <Link to="">Палатки и тенты</Link>
                            <Link to="">Рюкзаки</Link>
                            <Link to="">Спальные мешки</Link>
                            <Link to="">Матрасы</Link>
                            <Link to="">Фонарики</Link>
                            <Link to="">Одежда</Link>
                        </div>
                        <div className="flex flex-col gap-6">
                            <Link to="">Туристические коврики</Link>
                            <Link to="">Посуда</Link>
                            <Link to="">Горелки и лампы</Link>
                            <Link to="">Ножи и инструменты</Link>
                            <Link to="">Палки для хотьбы</Link>
                            <Link to="">Обувь</Link>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4 items-center">
                        <img src={telegram_img} alt="telegram"/>
                        <p className="text-2xl">@campingparadise</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={vk} alt="telegram"/>
                        <p className="text-2xl">@campingparadise</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={email} alt="telegram"/>
                        <p className="text-2xl">@campingparadise</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={instagram} alt="telegram"/>
                        <p className="text-2xl">@campingparadise</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={phone_footer} alt="telegram"/>
                        <p className="text-2xl">+7 (967) 672 - 45 - 62</p>
                    </div>
                    <div className="flex gap-4 items-center">
                        <img src={geo} alt="telegram"/>
                        <p className="text-2xl">г. Вологда</p>
                    </div>
                </div>
            </div>
            <p className="text-opacity-55 text-xl text-black text-center mt-10">
                © 2008 - 2023 «CAMPING PARADISE». ВСЕ ПРАВА ЗАЩИЩЕНЫ. <br/>
                Веб-сайт не является основанием для предъявления претензий и рекламаций, информация является <br/>
                ознакомительной, технические характеристики товаров могут отличаться от указанных на сайте.
            </p>
            <img src={men} alt="люди" className="absolute right-0 bottom-0"/>
        </footer>
);
};

export default Footer;