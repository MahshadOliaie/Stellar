

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
                <input className="options__qty__input bagQty" id="qty" name="qty" value={1} />
            </div>
        </div>
    )
}

export default BagProduct;