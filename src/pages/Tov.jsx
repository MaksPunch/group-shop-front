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
import {useContext, useState} from 'react';
import {useEffect} from 'react';
import axios from 'axios';
import {useParams} from 'react-router-dom';
import Loading from "../components/Loading.jsx";
import {ModalContext} from "../App.jsx";


export default function Tov() {
    const {id} = useParams()
    const [catalog, setCatalog] = useState([]);
    const [product, setProduct] = useState([]);
    const [productLoading, setProductLoading] = useState(true);
    const [quantity, setQuantity] = useState(1);
    const {setSuccessAlertText, setErrorAlertText} = useContext(ModalContext)

    useEffect(() => {
        axios.get('https://q9mthy-3000.csb.app/api/product?limit=4').then(res => {
            setCatalog(res.data.products.rows);
            setProductLoading()
        }).catch(e => console.log(e.message))
    }, []);

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

    if (productLoading) {
        return <Loading/>
    }

    function handleAddToBasket(quantity, productId) {
        axios.post('https://q9mthy-3000.csb.app/api/user/basket', {
            quantity, productId
        }).then(res => {
            setSuccessAlertText('Товары успешно добавлен в корзину, количество: ' + quantity);
        }).catch(e => {
            if (e.response.status === 401) {
                setErrorAlertText('Вы не авторизованы')
            }
        })
    }

    return <div>
        <div className="catalog-Screan1">
            <div className="gor">
                <h2>Туристическое снаряжение &#62; Палатки и тенты</h2>
            </div>
            <div className="gor">
                <div className="tabl">
                    <div className="gor-catalog">
                        {/*<img src={arrowl} width={19} height={33}></img>*/}
                        <img src={"https://q9mthy-3000.csb.app/" + product.img}></img>
                        {/*<img src={arrowR} width={19} height={33}></img>*/}
                    </div>
                    {/*<div className="gor-catalog">*/}
                    {/*    <img src={palatka2}></img>*/}
                    {/*    <img src={palatka3}></img>*/}
                    {/*    <img src={palatka4}></img>*/}
                    {/*    <img src={palatka5}></img>*/}
                    {/*</div>*/}
                </div>
                <div className="tabl2 w-1/2">
                    <h1>{product.name}</h1>
                    <p>Цвет: жёлтый, синий</p>
                    <p>Количество:</p>
                    <div className='gor'>
                        <PlusTov quantity={quantity} setQuantity={setQuantity}/>
                    </div>
                    <h1>{product.price + " " + wordDeclension(product.price, ["рубль", "рубля", "рублей"])}</h1>
                    <div className="gor-catalog">
                        <button onClick={() => handleAddToBasket(quantity, product.id)} className="button-cart">
                            <div className="cart-img"></div>
                            <div>В корзину</div>
                        </button>
                        <img src={favorite} alt="Добавить в избранное"></img>
                    </div>
                </div>
            </div>

        </div>
        <div className='text-tov-center flex justify-between w-full'>
            <div>
                {product.description}
            </div>
            <img src={elka} alt={"Елка"}></img>
        </div>
        <div className="fourScrean">
            <div className="BG5">
                <h1>Вас может заинтересовать</h1>
                <div className="flex gap-12 items-start">
                    {catalog.length ? catalog.map((product) =>
                        <ProductCard key={product.id} title={product.name} price={product.price}
                                     image={product.img} id={product.id}/>
                    ) : <Loading/>}
                </div>
            </div>
        </div>
    </div>;
}