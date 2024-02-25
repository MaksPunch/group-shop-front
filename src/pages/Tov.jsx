import palatka1 from '../assets/palatka1.png';
import palatka2 from '../assets/palatka2.png';
import palatka3 from '../assets/palatka3.png';
import palatka4 from '../assets/palatka4.png';
import palatka5 from '../assets/palatka5.png';
import arrowR from '../assets/right.png';
import arrowl from '../assets/left.png';
import PlusTov from '../components/PlusTov';
import favorite from '../assets/favorite.png';
import elka from '../assets/elka.png';
import ProductCard from '../components/ProductCard.jsx';
import {useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';


export default function Tov() {

    const [catalog, setCatalog] = useState([]);


    useEffect(() => {
        axios.get('https://q9mthy-3000.csb.app/api/product?limit=4').then(res => {
            setCatalog(res.data.products.rows);
        }).catch(e => console.log(e.message))
    }, []);

    const [product, setProduct] = useState([]);
    const {id} = useParams()


    useEffect(() => {
        axios.get('https://q9mthy-3000.csb.app/api/product/' + id).then(res => {
            setProduct(res.data.product);
        }).catch(e => console.log(e.message))
    }, [id]);

    const wordDeclension = (number, titles) => {
        number = Math.abs(number);
        if (Number.isInteger(number)) {
            let cases = [2, 0, 1, 1, 1, 2];
            return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
        }
        return titles[1];
    }


    return <div>
        <div className="catalog-Screan1">
            <div className="gor">
                <h2>Туристическое снаряжение &#62; Палатки и тенты</h2>
            </div>
            <div className="gor">
                <div className="tabl">
                    <div className="gor-catalog">
                        <img src={arrowl} width={19} height={33}></img>
                        <img src={"https://q9mthy-3000.csb.app/" + product.img}></img>
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
                    <h1>{product.name}</h1>
                    <p>Цвет: жёлтый, синий</p>
                    <p>Количество:</p>
                    <div className='gor'>
                        <PlusTov/>
                    </div>
                    <h1>{product.price + " " + wordDeclension(product.price, ["рубль", "рубля", "рублей"])}</h1>
                    <button className="gor-catalog">
                        <div className="button-cart">
                            <div className="cart-img"></div>
                            <div>В корзину</div>
                        </div>
                        <img src={favorite}></img>
                    </button>
                </div>
            </div>

        </div>
        <div className='text-tov-center'>
            <div>Легкая трехместная палатка Marmot — прекрасный вариант для пеших походов. Продуманная конструкция
                оптимизирует внутреннее пространство, делая его максимально удобным для сна и размещения вещей, не
                увеличивая размеры и вес палатки. Большая часть внутренней палатки состоит из легкой сетчатой ткани,
                которая обеспечивает превосходную вентиляцию и снижает вероятность конденсата. Отличный выбор для летних
                походов в теплом климате.
            </div>
            <img src={elka}></img>
        </div>
        <div className="fourScrean">
            <div className="BG5">
                <h1>Вас может заинтересовать</h1>
                <div className="flex gap-12 items-start">
                    {catalog.map((product) =>
                        <ProductCard key={product.id} title={product.name} price={product.price}
                                     image={"https://q9mthy-3000.csb.app/" + product.img} id={product.id}/>
                    )}
                </div>
            </div>
        </div>
    </div>;
}