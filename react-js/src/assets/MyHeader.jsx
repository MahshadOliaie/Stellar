

function MyHeader(){
return(
    <header className="header">
        <div className="header__navbar">
            <p href="" className="header__navbar__link">دسته بندی</p>
            <p href="" className="header__navbar__link">سبد خرید</p>
            <p href="" className="header__navbar__link">ارتباط با ما</p>
            <img src="./src/assets/images/bars.svg" className="header__navbar__bar" alt="bars" />
        </div>
        <div className="header__logo"><img src="./src/assets/images/WhiteLogo.png" alt="logo" /></div>
        <div className="header__register"><p>ورود</p></div>
    </header>
)
}
export default MyHeader;