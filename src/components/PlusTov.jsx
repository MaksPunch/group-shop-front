import {useState} from "react";
import "../index.css"

export default function PlusTov({quantity, setQuantity}) {
    if (quantity < 1) {
        setQuantity(1);
    }
    if (quantity > 10000) {
        setQuantity(10000)
    }
    return <>
        <div className="plusTov">
            <span className="change minus min cursor-pointer" onClick={() => setQuantity(quantity - 1)}>
                <span>-</span>
            </span>
            <input className="w-20 text-center" type="text" name="productСount" value={quantity} disabled=""
                   onChange={(e) => setQuantity(e.target.value)}/>
            <span className="change plus cursor-pointer" onClick={() => setQuantity(quantity + 1)}>
                <span>+</span>
            </span>
        </div>
    </>;
}