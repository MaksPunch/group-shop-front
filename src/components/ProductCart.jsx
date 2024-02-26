import {useContext, useEffect, useState} from "react";
import "../index.css"
import trashIcon from '../assets/trash.png'
import favorite from '../assets/favorite.png'
import PlusTov from "./PlusTov.jsx";
import axios from "axios";
import {ModalContext} from "../App.jsx";
export default function ProductCart({id, img, price, name, productId, quantityProp, setProducts, products, handleChangeQuantity}) {
    const {setSuccessAlertText} = useContext(ModalContext);
    const [quantity, setQuantity] = useState(quantityProp)
    function handleDeleteFromBasket() {
        axios.delete('https://q9mthy-3000.csb.app/api/user/basket', {
            data: {
                productId
            }
        }).then(res => {
            setSuccessAlertText(res.data.message);
            setProducts(products.filter(el => el.id !== id));
        }).catch(e => console.log(e.message));
    }


    useEffect(() => {
        if (quantity !== quantityProp) {
            handleChangeQuantity(productId, quantity);
        }
    }, [quantity]);

    return <div className="flex flex-col gap-6">
        <div className="relative w-full bg-[#D9D9D9] py-4">
            <img className="mx-auto" src={img} alt={name}/>
            <button className="absolute top-6 left-6" onClick={() => handleDeleteFromBasket()}><img src={trashIcon} alt="Удалить из корзины"/></button>
            <img src={favorite} alt="Добавить в избранную" className="absolute top-6 right-6"/>
        </div>
        <div className="flex justify-between px-5 gap-5">
            <p className="text-3xl text-[UbuntuMedium]">{price}</p>
            <PlusTov quantity={quantity} setQuantity={setQuantity}/>
        </div>
        <div className="flex justify-between px-5 text-lg gap-5">
            <p>{name}</p>
            <p>Цвет: серый</p>
        </div>
    </div>;
}