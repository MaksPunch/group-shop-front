import React, {useEffect, useState} from 'react';
import axios from "axios";
import ProductCart from "../components/ProductCart.jsx";
import {useNavigate} from "react-router-dom";
import Loading from "../components/Loading.jsx";

const Cart = () => {
    const [products, setProducts] = useState([]);
    const [quantity, setQuantity] = useState(1);
    const [price, setPrice] = useState(1);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate()
    useEffect(() => {
        axios.get('https://q9mthy-3000.csb.app/api/user/basket').then(res => {
            if (res.data.basketProducts) {
                setProducts(res.data.basketProducts);
                setQuantity(res.data.basketProducts.length);
                let price = res.data.basketProducts[0].product.price;
                if (res.data.basketProducts.length > 1) {
                    price = res.data.basketProducts.reduce((curr, prev) => {
                        return curr.product.price * curr.quantity + prev.product.price * prev.quantity;
                    })
                }
                setLoading(false);
                setPrice(price);
            } else {
                setLoading(false);
            }
        }).catch(e => {
            console.log(e)
            if (e.response.data.message === 'Не авторизован') {
                navigate('/not_authorized');
            } else {
                console.log(e)
            }
        })
    }, []);

    const wordDeclension = (number, titles) => {
        number = Math.abs(number);
        if (Number.isInteger(number)) {
            let cases = [2, 0, 1, 1, 1, 2];
            return titles[(number % 100 > 4 && number % 100 < 20) ? 2 : cases[(number % 10 < 5) ? number % 10 : 5]];
        }
        return titles[1];
    }

    if (loading) {
        return <Loading/>
    }

    if (!products.length) {
        return <h1 className="mt-52 text-center">Корзина пуста!</h1>;
    }

    return (
        <div>
            <h1 className="text-5xl mt-36 text-center font-[UbuntuMedium]">КОРЗИНА</h1>
            <div className="flex gap-14 justify-between px-32 mt-12">
                <div className="flex flex-col gap-7 w-[563px] p-8">
                    <div className="text-2xl w-full flex justify-between">
                        <p>Товаров {quantity} на сумму:</p>
                        <div>
                            <span
                                className="font-bold">{price}</span> {wordDeclension(price, ["рубль", "рубля", "рублей"])}
                        </div>
                    </div>
                    <div className="text-2xl w-full flex justify-between">
                        <input type="text" name="promocode" placeholder="Промокод"
                               className="border border-[#964500] py-3 px-7 w-full"/>
                    </div>
                    <div className="text-[40px] w-full flex justify-between mt-12">
                        <p>Итого</p>
                        <div>
                            <span
                                className="font-bold">{price}</span> {wordDeclension(price, ["рубль", "рубля", "рублей"])}
                        </div>
                    </div>
                    <button className="bg-[#2C3550] text-4xl text-white w-full py-3 rounded-3xl">ОФОРМИТЬ ЗАКАЗ</button>
                </div>
                <div className="flex flex-col gap-8">
                    {products.map((product) =>
                        <ProductCart
                            key={product.id}
                            id={product.id}
                            price={product.product.price + " " + wordDeclension(product.product.price, ["рубль", "рубля", "рублей"])}
                            img={"https://q9mthy-3000.csb.app/" + product.product.img}
                            name={product.product.name}
                            productId={product.product.id}
                            quantity={product.quantity}
                            setProducts={setProducts}
                            products={products}
                        />
                    )}
                </div>
            </div>
        </div>
    );
};

export default Cart;