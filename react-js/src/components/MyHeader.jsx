import React, { useContext } from 'react'
import Sidebar from "./Sidebar";
import { useNavigate } from "react-router-dom";
import AuthContext from '../context/AuthContext';
function MyHeader(Props) {
    const Navigate = useNavigate()
    const context=useContext(AuthContext)
    function renderSidebar() {
        document.querySelector(".sidebar").classList.remove("dnone")
    }
    return (
        <header className={Props.headerState}>
            {context.user===null ?
                <div className="header__register" onClick={() => Navigate('/login')}><p>login</p></div>
                :
                null
            }
           
            <div className="header__logo" onClick={() => Navigate('/')}><img src="/src/images/StellarLogo.png" alt="logo" /></div>
            <div className="header__navbar">
                <p className="header__navbar__link" onClick={() => Navigate('/')}>home</p>
                <p className="header__navbar__link">products</p>
                <p className="header__navbar__link" onClick={() => Navigate('/favorite')}>favorite</p>
                <p className="header__navbar__link" onClick={() => Navigate('/mybag')} >bag</p>
                <svg xmlns="http://www.w3.org/2000/svg" onClick={renderSidebar} height="1em" viewBox="0 0 512 512" className="header__navbar__bar"><path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" /></svg>
            </div>
            <Sidebar />
        </header>
    )
}
export default MyHeader;



