

function ProductPage() {
    return (
        <>
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
        </div>


        
        </>
        
        
    )
}

export default ProductPage;