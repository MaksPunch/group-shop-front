import palatka1 from '../assets/palatka1.png';
import palatka2 from '../assets/palatka2.png';
import palatka3 from '../assets/palatka3.png';
import palatka4 from '../assets/palatka4.png';
import palatka5 from '../assets/palatka5.png';
import arrowR from '../assets/right.png';
import arrowl from '../assets/left.png';
import PlusTov from '../components/PlusTov';
export default function Catalog() {
    return <div>
        <div className="catalog-Screan1">
            <div className="gor">
                <h2>Туристическое снаряжение &#62; Палатки и тенты</h2>
            </div>
            <div className="gor">
                <div className="tabl">
                    <div className="gor-catalog">
                        <img src={arrowl} width={19} height={33}></img>
                        <img src={palatka1}></img>
                        <img src={arrowR} width={19} height={33}></img>
                    </div>
                    <div className="gor-catalog">
                        <img src={palatka2}></img>
                        <img src={palatka3}></img>
                        <img src={palatka4}></img>
                        <img src={palatka5}></img>
                    </div>
                </div>
                <div className="tabl2">
                    <h1>Палатка 3-местная <br></br>Marmot Tungsten 3P</h1>
                    <div className='gor-text'>
                        <p>1005 заказов</p>
                        <p>Отзывы</p>
                    </div>
                    <p>Цвет: жёлтый, синий</p>
                    <p>Количество:</p>
                    <div className='gor'>
                        <PlusTov />
                    </div>
                    <h1>70 000 рублей</h1>
                    <div className="gor">
                        <div className="button-cart">
                            <div className="cart-img"></div>
                            <div>В корзину</div>
                        </div>
                        <img src={Heart}></img>
                    </div>
                </div>
            </div>
        </div>
    </div>;
}