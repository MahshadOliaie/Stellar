import BagPage from "./BagPage";
import React from 'react'
import ReactDOM from 'react-dom/client'
import MyHomePage from "./MyHomePage";
import Sidebar from "./Sidebar";

function MyHeader(Props) {
    return (
        <header className={Props.headerState}>
            <div className="header__register"><p>login</p></div>
            <div className="header__logo" onClick={renderHomePage}><img src="./src/assets/images/StellarLogo.png" alt="logo" /></div>
            <div className="header__navbar">
                <p className="header__navbar__link">home</p>
                <p className="header__navbar__link">products</p>
                <p className="header__navbar__link">favorite</p>
                <p className="header__navbar__link" onClick={renderBagPage}>bag</p>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={renderSidebar} height="1em" viewBox="0 0 512 512" className="header__navbar__bar"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <Sidebar/>
        </header>
    )
}
export default MyHeader;



function renderBagPage() {
    topFunction();
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
            <BagPage />
        </React.StrictMode>,
    )
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}


function renderHomePage() {
    topFunction();
    ReactDOM.createRoot(document.getElementById('root')).render(
        <React.StrictMode>
           <MyHomePage/>
        </React.StrictMode>,
    )
}


function renderSidebar(){
    document.querySelector(".sidebar").classList.remove("dnone")
}