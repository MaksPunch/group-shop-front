import ProductCard from "../components/ProductCard.jsx";
import tov4 from '../assets/tov4.png';
import tov5 from '../assets/tov5.png';
import tov6 from '../assets/tov6.png';
import tov7 from '../assets/tov7.png';
import tov8 from '../assets/tov8.png';
import tov9 from '../assets/tov9.png';
import tov10 from '../assets/tov10.png';
import {useEffect, useState} from "react";
import axios from "axios";

export default function Homepage() {
  const [tents, setTents] = useState([]);
  const [catalog, setCatalog] = useState([]);

  useEffect(() => {
    axios.get('https://q9mthy-3000.csb.app/api/product?limit=3&categoryId=12').then(res => {
      setTents(res.data.products.rows);
    }).catch(e => console.log(e.message))
  }, []);

  useEffect(() => {
    axios.get('https://q9mthy-3000.csb.app/api/product?limit=4').then(res => {
      setCatalog(res.data.products.rows);
    }).catch(e => console.log(e.message))
  }, []);

  return <div className="center">
    <div className='oneScrean'>
      <div className='space-content'>
        <div className='space-text'>
          <h1>Куда бы вы ни отправились, у вас <br></br>будет все необходимое.</h1>
          <h2>Подготовьтесь к новым приключениям прямо сейчас.</h2>
        </div>
        <a href='./pages/catalog.jsx' className='button-catalog'>ПЕРЕЙТИ В КАТАЛОГ</a>
      </div>
    </div>
    <div className='twoScrean'>
      <div className='BG2'>
        <div className="start">
          <div className='text-TS1'>Что можно приобрести в нашем магазине?</div>
          <h3>В нашем магазине туристического снаряжения вы найдете все необходимое для активного отдыха на природе.
            Мы <br></br>гордимся качеством своих товаров, которые соответствуют высоким стандартам. У нас есть все, что
            нужно для <br></br>комфортного и безопасного отдыха на свежем воздухе.</h3>
        </div>
        <div className='catalog'>
          <div className='tov1'>
            <div className='text-tovB'>Одежда</div>
            <div className='text-tov'>адаптированная под различные погодные условия - от солнечной жары до холодного
              ветра и дождя
            </div>
          </div>
          <div className='tov2'>
            <div className='text-tovB'>Рюкзаки</div>
            <div className='text-tov'>разной вместимости и конструкции, подходящие для длительных походов и кратких
              прогулок
            </div>
          </div>
          <div className='tov3'>
            <div className='text-tovB'>Палатки</div>
            <div className='text-tov'>различных типов и размеров, подходящих для походов, кемпинга и <br></br>туризма
            </div>
          </div>
        </div>
        <button className="catalog-button">КАТАЛОГ ТОВАРОВ</button>
      </div>
    </div>
    <div className="thirdScrean">
      <div className="BG3">

        <div className="flex-start">
          <div className='text-TS1'>Туристические бестселлеры</div>
          <div className="arrow">
            <div className="arrowL"></div>
            <div className="arrowR"></div>
          </div>

        </div>
        <div className="flex gap-10 content-around">
          {tents.map((product) =>
            <ProductCard title={product.name} price={product.price} image={"https://q9mthy-3000.csb.app/" + product.img}/>
          )}
            {/*<ProductCard title={"Палатка BASK Bonzer 4 Голубой"} price={36990} image={tov4}/>*/}
            {/*<ProductCard title={"Спальный мешок Northland +15"} price={5390} image={tov5}/>*/}
            {/*<ProductCard title={"Термос SARGE, 1.8 л"} price={2490} image={tov6}/>*/}
        </div>
      </div>
    </div>
    <div className="fourScrean">
      <div className="BG4">
        <h1>Успей купить!</h1>
        <div className="flex gap-12 items-start">
          {catalog.map((product) =>
              <ProductCard title={product.name} price={product.price} image={"https://q9mthy-3000.csb.app/" + product.img}/>
          )}

        </div>
      </div>
    </div>
    <div className="fiveScrean">
      <div className="gor-otz">
        <div className="down-center">
          <div className="otz1"></div>
          <div>Мы работаем с проверенными поставщиками, чтобы предложить вам лучшее оборудование для походов и
            путешествий
          </div>
        </div>
        <div className="down-center">
          <div className="otz2"></div>
          <div>Мы работаем с проверенными поставщиками, чтобы предложить вам лучшее оборудование для походов и
            путешествий
          </div>
        </div>
        <div className="down-center">
          <div className="otz3"></div>
          <div>Мы работаем с проверенными поставщиками, чтобы предложить вам лучшее оборудование для походов и
            путешествий
          </div>
        </div>
      </div>
      <div className="gor-otz">
        <div className="down-center">
          <div className="otz4"></div>
          <div>Мы работаем с проверенными поставщиками, чтобы предложить вам лучшее оборудование для походов и
            путешествий
          </div>
        </div>
        <div className="down-center">
          <div className="otz5"></div>
          <div>Мы работаем с проверенными поставщиками, чтобы предложить вам лучшее оборудование для походов и
            путешествий
          </div>
        </div>
      </div>

    </div>
  </div>;
}
