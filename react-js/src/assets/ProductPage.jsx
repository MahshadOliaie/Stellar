import MyHeader from "./MyHeader";

function ProductPage() {
    return (
        <>
             <MyHeader headerState="header sticky" />
            <div className="photos">
                <div className="photos__main">
                    <img src="/src/assets/images/jacketProduct.jpg" alt="" />

                    <div className="photos__main__dots">
                        <div className="photos__main__dots__dot" id="dot1"></div>
                        <div className="photos__main__dots__dot" id="dot2"></div>
                        <div className="photos__main__dots__dot" id="dot3"></div>
                        <div className="photos__main__dots__dot" id="dot4"></div>
                        <div className="photos__main__dots__dot" id="dot5"></div>
                    </div>
                </div>

                <div className="photos__picker">
                    <img src="/src/assets/images/jacket1.jpg" id="p1" alt="" className="photos__picker__image" />
                    <img src="/src/assets/images/jacketProduct.jpg" id="p2" alt="" className="photos__picker__image" />
                    <img src="/src/assets/images/jacket2.jpg" id="p3" alt="" className="photos__picker__image" />
                    <img src="/src/assets/images/jacket2.jpg" id="p4" alt="" className="photos__picker__image" />
                    <img src="/src/assets/images/jacket2.jpg" id="p5" alt="" className="photos__picker__image" />
                </div>
            </div>

            <div className="about">
                <div className="about__title">
                    <p className="about__title__name">jeans jacket</p>
                    <p className="about__title__price">780,000 T</p>
                </div>

                <div className="about__colorPicker">
                    <div className="about__colorPicker__color" id="color1"></div>
                    <div className="about__colorPicker__color" id="color2"></div>
                    <div className="about__colorPicker__color" id="color3"></div>
                    <div className="about__colorPicker__color" id="color4"></div>
                </div>

                <div className="options">
                    <div className="options__size">
                        <label className="options__size__lable" htmlFor="size">size</label>
                        <select name="size" id="size">
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="XXL">XXL</option>
                        </select>
                        <a href="#" className="sizeGuide">Size Guide</a>
                    </div>

                    <div className="options__qty">
                        <label className="options__qty__lable" htmlFor="qty">Qty</label>
                        <input className="options__qty__input" type="number" id="qty" name="qty" defaultValue={1} min={1} contentEditable />
                    </div>
                </div>


                <div className="addBtn">
                    <p className="addBtn__text">ADD TO BAG</p>
                    <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAyUlEQVR4nO3YrUpEURSG4QcVRLAojJOmDUybOuAV2r0Au8EueKLa/AmCzSRYLHoBWnaaLMhafA/stNMLZ5+z9iEiIiIiIv7XDZ5worhb/OAZxwqb4WXEPOJIYXO8jpg7HCpsgbcRM+FAYUu8j5hr7CtshY8Rc4U9ha3xOWIusauwDb5GzAV2FHaK7xFzvr05jY2K62x7JGgR0ubRqmLT4bCvO7x+Vx0+iMsOI8qiw9A47zDGz7pcrO67XHUnPHT4+RARERER4c/9AoxmkwPuIygtAAAAAElFTkSuQmCC"></img>
                </div>

            </div>



        </>


    )
}

export default ProductPage;