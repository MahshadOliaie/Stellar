import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import MyHeader from './MyHeader'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)



function stickyHeader(){
  if(window.scrollY>100){
    document.querySelector(".header").classList.add("scroll")
    document.querySelector(".header__logo img").setAttribute("src" , "./src/assets/images/WhiteLogo.png")
  }else{
    document.querySelector(".header").classList.remove("scroll")
    document.querySelector(".header__logo img").setAttribute("src" , "./src/assets/images/StellarLogo.png")
  }
}

window.addEventListener("scroll", stickyHeader);