

function BagProduct() {
    return (
        <div className="bag__product">
            <div className="bag__product__image">
                <img src="/src/assets/images/jacketProduct.jpg" alt="product" />
            </div>
            <div className="bag__product__about">
                <h3 className="bag__product__about__title">jeans jacket</h3>
                <div className="bag__product__about__color"></div>
                <p className="bag__product__about__size">Size: <span>XS</span></p>
                <p className="bag__product__about__price"><span>780,000</span> T</p>
                
                <div className="controlQty">
                <input className="options__qty__input bagQty" id="qty" name="qty" value={1} />
               <div className="controlQty__operation">
               <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" height="16" width="14" viewBox="0 0 448 512"><path d="M432 256c0 17.7-14.3 32-32 32L48 288c-17.7 0-32-14.3-32-32s14.3-32 32-32l352 0c17.7 0 32 14.3 32 32z"/></svg>
               </div>
                </div>
            </div>
        </div>
    )
}

export default BagProduct;