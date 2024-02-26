import { useState } from "react";
import "../index.css"
export default function PlusTov({quantityProp}) {
const [quantity, setQuantity] = useState(quantityProp || 1);
    return <>
        <div className="plusTov">
            <span className="change minus min cursor-pointer" onClick={() => setQuantity( quantity - 1)}>
                <span>-</span>
            </span>
            <input className="input-plus" type="text" name="productСount" value={quantity} disabled="" onChange={(e) => setQuantity(e.target.value)}/>
            <span className="change plus cursor-pointer" onClick={() => setQuantity( quantity + 1)}>
                <span>+</span>
            </span>
        </div>
    </>;
}