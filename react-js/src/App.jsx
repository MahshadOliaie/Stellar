
import ReactDOM from 'react-dom/client'
import MyHeader from './components/MyHeader'
import MyHomePage from './pages/MyHomePage'

import ProductPage from './pages/ProductPage'
import BagPage from './pages/BagPage'

import React, { Suspense, lazy, useEffect } from 'react';
import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    useNavigate
} from "react-router-dom";

import { AuthProvider } from './context/AuthContext';
import Clothes from './pages/Clothes'
import FavoritePage from './pages/FavoritePage'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

const App = () => {



    function stickyHeader() {
        if (window.scrollY > 95) {
            document.querySelector(".header").classList.add("scroll")
            document.querySelector(".header__logo img").setAttribute("src", "./src/images/WhiteLogo.png")
        } else {
            document.querySelector(".header").classList.remove("scroll")
            document.querySelector(".header__logo img").setAttribute("src", "./src/images/StellarLogo.png")
        }
    }

    useEffect(() => {

        window.addEventListener("scroll", stickyHeader);


    }, [])
    return (
        <BrowserRouter>
            <AuthProvider>
                <Routes>
                    <Route path='/' element={
                        <Suspense>
                            <MyHomePage />

                        </Suspense>
                    } />
                    <Route path='/clothes' element={
                        <Suspense>
                            <Clothes />

                        </Suspense>
                    } />
                    <Route path='/product/:id' element={
                        <Suspense>
                            <ProductPage />

                        </Suspense>
                    } />
                    <Route path='/mybag' element={
                        <Suspense>
                            <BagPage />

                        </Suspense>
                    } />
                    <Route path='/favorite' element={
                        <Suspense>
                            <FavoritePage />

                        </Suspense>
                    } />

                    <Route path='/login' element={
                        <Suspense>
                            <LoginPage />

                        </Suspense>
                    } />

                    <Route path='/signUp' element={
                        <Suspense>
                            <SignupPage />

                        </Suspense>
                    } />
                </Routes>

            </AuthProvider>

        </BrowserRouter>

    )
}
export default App