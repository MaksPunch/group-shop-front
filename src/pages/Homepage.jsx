import ProductCard from "../components/ProductCard.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import Loading from "../components/Loading.jsx";

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
        <Link to='/catalog' className='button-catalog'>ПЕРЕЙТИ В КАТАЛОГ</Link>
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
          {tents.length ? tents.map((product) =>
            <ProductCard key={product.id} title={product.name} price={product.price} image={"https://q9mthy-3000.csb.app/" + product.img} id={product.id}/>
          ) : <Loading/>}
        </div>
      </div>
    </div>
    <div className="fourScrean">
      <div className="BG4">
        <h1>Успей купить!</h1>
        <div className="flex gap-12 items-start">
          {catalog.length ? catalog.map((product) =>
              <ProductCard key={product.id} title={product.name} price={product.price} image={"https://q9mthy-3000.csb.app/" + product.img} id={product.id}/>
          ) : <Loading/>}
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
