import React, { useEffect, useState } from "react"

import {jwtDecode} from "jwt-decode"
import { useCookies } from 'react-cookie'
import axios from 'axios'    

import { useLocation, useNavigate } from "react-router-dom"
const AuthContext=React.createContext()
const AuthProvider=(props)=>{
    const navigate=useNavigate()
    // const [windowSize,setWindowSize]=useState(window.screen.width)
    const [cookies,setCookie,removeCookie]=useCookies('access')
    const [registerErrM,setregisterErrM]=useState(null)
    const [access,setAccess]=useState(cookies?.access ? cookies?.access:null)
    const [userphoneNumber,setUserPhoneNumber]=useState(null)
    // error here
    const [user,setUser]=useState(cookies?.access? jwtDecode(cookies?.access):null)
    const [shoppingCartItems,setShoppingCartItems]=useState(null)

    const location=useLocation()
    topFunction()
    function topFunction() {
        console.log('hello')
        window.scrollTo(0, 0)
      }
      useEffect(()=>{

      },[location])
      
    
    // useEffect(()=>{
        
        
    //     // const authority=sessionStorage.getItem('Authority')
    //     try {
    //         // if(authority!==null){
    //         //     // sendcookie for method
    //         //     navigate('/transaction/verifytransaction?Authority='+authority)  
    //         // }
    //         setAccess(cookies?.access ? cookies?.access:null)
    //         setUser(cookies?.access? jwtDecode(cookies?.access):null)  
    //     } catch (error) {
    //         removeCookie('access',{path:'/'});
    //     }
        
  
  
      
    // },[])

    // useEffect(async()=>{
    //     setCookie('mycat','patman')
    //     fetch()
    // },[])
    // const userSetter=(access)=>{
    //     setCookie('access',access,{path:'/'})
            
    //     setAccess(access)
    //     setUser(jwtDecode(access))
    // }
        const getShoppingCart=async()=>{
        const res=await axios.post(serverAddress+'userapi/shoppingcart',{
            Headers:{'Content-Type':'Application/json'}
        })
        if(res.status===200){
            console.log(res.data)
            setShoppingCartItems(res.data.productsInCart)
            
        }
    }
    // const sendPhoneNumber=async(phoneNumber,setLoginErr)=>{

    //     // const response=await fetch('http://localhost:8000/api/register',{
    //     //     headers:{"Content-Type": 'application/json'},
    //     //     method:'POST',
    //     //     body:JSON.stringify({username:'prparsa'})

    //     // })
    //     try {  
    //         const formData=new FormData()
    //         // formData.append('phoneNumber',phoneNumber)
    //         // formData.append('profilePicture',profilePicture)
    //         const response = await axios.post(serverAddress+'userapi/register/firststep', {phoneNumber:phoneNumber.toString()} , {
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         console.log('daad')
    //         const data=response.data
            
            
    //         if(response.status===200){
    //             if(response.data.code===100){
    //                 setUserPhoneNumber(phoneNumber)
    //                 setregisterErrM(false)
    //                 console.log(response.status)
    //                 console.log(data.access)


    //             }
    //             else{
    //                 setLoginErr({err:{message:response.data.err.message}})
                    
    //             }
    //             // setCookie('access',data.access)
    //             // setUser(jwtDecode(data.access))
    //             // setAccess(data.access)
 
                
    //             // localStorage.setItem('access',JSON.stringify(data))
                
                
    
    //         }

            
    //     } catch (error) {
           

       
    //         setLoginErr({err:{message:'لطفا دوباره امتحان کنید'}})
                
     
            
            
    //     }

    // }
    // const login=async(code,setRegisterErr)=>{
    //     try {
    //         const response=await axios.post(serverAddress+'userapi/register/secondstep',{code:code,phoneNumber:userphoneNumber}, {
    //             headers: {
    //                 "Content-Type": "Application/Json",
    //             }
                
    //         }
    
    //         )
            
            
    //         console.log(response.status)
    //         if (response.status===200){
    //                 if(response.data.code===100){
                     
    //                     const access=response.data.access
    //                     userSetter(access)

    //                 }
    //                 else if(response.data.code===105){
    //                     window.location.reload()
                        
                        

    //                 }
    //                 else{
    //                     setRegisterErr({err:{message:response.data.err.message}})
                        
                        
    //                 }
       
      
    //                 // localStorage.setItem('access',JSON.stringify(data))    
        
    
    //         }
 
            
    //     } catch (error) {
    //         console.log(error.message)
    //         // window.location.reload()
            

            
    //     }




        
    // }
    // const logout=()=>{
    //     removeCookie('access',{path:'/'});
    //     setUserPhoneNumber(null)
    //     setUser(null)
    //     setAccess(null)
       
        
    
    // } 


// // needed var list 
//     user:user,
//     login:login,
//     sendPhoneNumber:sendPhoneNumber,
//     logout:logout,
//     shoppingCartItems:shoppingCartItems,
//     setShoppingCartItems:setShoppingCartItems,
//     windowSize:windowSize,
//     getShoppingCart:getShoppingCart,
//     userphoneNumber:userphoneNumber,
//     userSetter:userSetter,
    
    return(
        <AuthContext.Provider value={{
            
            user:user,
            shoppingCartItems:shoppingCartItems,
            setShoppingCartItems:setShoppingCartItems,
            getShoppingCart:getShoppingCart,
          
        }}>

            {props.children}
        </AuthContext.Provider>
        
    )
}
export {AuthProvider}
export default AuthContext