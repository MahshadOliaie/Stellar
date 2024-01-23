import { useState } from "react";
import Bag from "../Bag";


function BagProduct(Props) {

    const { id, name, price, images, color, qty, size, hasGift, hasFreeShipping } = Props;
    const [newQty, setNewQty] = useState(qty)

    function handleQty(op) {
        if (op == "plus") {
            setNewQty((newQty + 1))
        }
        if (op == "minus" && newQty > 1) {
            setNewQty((newQty - 2))
        }
        Bag.map(item => {
            if (item.id == id) {
                item.qty = newQty;
            }
        })
        console.log(Bag)
        localStorage.setItem("Bag", JSON.stringify(Bag))
    }

    return (
        <div className="bag__product">
            <div className="bag__product__image">
                <img src={images[0]} alt="product" />
            </div>
            <div className="bag__product__about">
                <h3 className="bag__product__about__title">{name}</h3>
                <div className="bag__product__about__color" style={{ backgroundColor: color }}></div>
                <p className="bag__product__about__size">Size: <span>{size}</span></p>
                <p className="bag__product__about__price">{price * newQty}$</p>

                <div className="controlQty">
                    <input className="options__qty__input bagQty" name="qty" id="bagQty" value={newQty} />
                    <div className="controlQty__operation">
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className="plus" onClick={() => handleQty("plus")}><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z" /></svg>
                        <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512" className="minus" onClick={() => handleQty("minus")}><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z" /></svg>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BagProduct;


