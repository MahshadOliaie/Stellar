
import ReactDOM from 'react-dom/client'
// import MyHeader from './components/MyHeader'
// import MyHomePage from './pages/MyHomePage'

// import ProductPage from './pages/ProductPage'
// import BagPage from './pages/BagPage'
import React, { Suspense, lazy, useEffect } from 'react';
const MyHomePage=lazy(()=>import('./pages/MyHomePage'))
const ProductPage=lazy(()=>import('./pages/ProductPage'))
const BagPage=lazy(()=>import('./pages/BagPage'))
import { AuthProvider } from './context/AuthContext';
const Clothes=lazy(()=>import('./pages/Clothes'))
const FavoritePage=lazy(()=>import('./pages/FavoritePage'))
const LoginPage=lazy(()=>import('./pages/LoginPage'))
const SignupPage=lazy(()=>import('./pages/SignupPage'))
const CodeSubmitPage=lazy(()=>import('./pages/CodeSubmitPage'))

import {
    BrowserRouter,
    Routes,
    Route,
    useLocation,
    useNavigate
} from "react-router-dom";


// import Clothes from './pages/Clothes'
// import FavoritePage from './pages/FavoritePage'
// import LoginPage from './pages/LoginPage'
// import SignupPage from './pages/SignupPage'
// import CodeSubmitPage from './pages/CodeSubmitPage'

const App = () => {


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

                    <Route path='/codePage' element={
                        <Suspense>
                            <CodeSubmitPage />

                        </Suspense>
                    } />
                </Routes>

            </AuthProvider>

        </BrowserRouter>

    )
}
export default App