import React from 'react'
import ReactDOM from 'react-dom/client'
import MyHeader from './MyHeader'
import MyHomePage from './MyHomePage'
import CategoryPage from './CategoryPage'
import ProductPage from './ProductPage'
import BagPage from './BagPage'




function renderHomePage(){
  topFunction()
  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <MyHomePage />
    </React.StrictMode>,
  )
}


function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}



function stickyHeader(){
  if(window.scrollY>95){
    document.querySelector(".header").classList.add("scroll")
    document.querySelector(".header__logo img").setAttribute("src" , "./src/assets/images/WhiteLogo.png")
  }else{
    document.querySelector(".header").classList.remove("scroll")
    document.querySelector(".header__logo img").setAttribute("src" , "./src/assets/images/StellarLogo.png")
  }
}

window.addEventListener("scroll", stickyHeader);


renderHomePage();