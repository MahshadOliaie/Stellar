import React, { useEffect, useState } from "react"

import {jwtDecode} from "jwt-decode"
import { useCookies } from 'react-cookie'
import axios from 'axios'    

import { useLocation, useNavigate } from "react-router-dom"
import serverAddress from "../utils/serverAddress"
const AuthContext=React.createContext()
const AuthProvider=(props)=>{
    const navigate=useNavigate()
    // const [windowSize,setWindowSize]=useState(window.screen.width)
    const [cookies,setCookie,removeCookie]=useCookies('access')
    const [registerErrM,setregisterErrM]=useState(null)
    const [access,setAccess]=useState(cookies?.access ? cookies?.access:null)
    // const [userphoneNumber,setUserPhoneNumber]=useState(null)
    // error here
    const [user,setUser]=useState(cookies?.access? jwtDecode(cookies?.access):null)


    const location=useLocation()
  
    function topFunction() {
        window.scrollTo(0, 0)
      }
    useEffect(()=>{
    topFunction()

    },[location])
      
    
    useEffect(()=>{
        
        
        // const authority=sessionStorage.getItem('Authority')
        try {
            // if(authority!==null){
            //     // sendcookie for method
            //     navigate('/transaction/verifytransaction?Authority='+authority)  
            // }
            setAccess(cookies?.access ? cookies?.access:null)
            setUser(cookies?.access? jwtDecode(cookies?.access):null)  
            
        } catch (error) {
            removeCookie('access',{path:'/'});
        }
        
  
  
      
    },[])

    // useEffect(async()=>{
    //     setCookie('mycat','patman')
    //     fetch()
    // },[])
    const userSetter=(access)=>{
        setCookie('access',access,{path:'/'})
            
        setAccess(access)
        setUser(jwtDecode(access))
    }
    const getBag=async(setBagItems)=>{
        const res=await axios.post(serverAddress+'api/user/bag',{
            Headers:{'Content-Type':'Application/json'}
        })
        if(res.status===200){
            console.log(res.data)
            setBagItems(res.data.productsInCart)
            
            
    }
    }
    const sendPhoneNumber=async(phoneNumber,setLoginErr)=>{

        // const response=await fetch('http://localhost:8000/api/register',{
        //     headers:{"Content-Type": 'application/json'},
        //     method:'POST',
        //     body:JSON.stringify({username:'prparsa'})

        // })
        try {  

  
            // formData.append('phoneNumber',phoneNumber)
            // formData.append('profilePicture',profilePicture)
            const response = await axios.post(serverAddress+'api/user/register/firststep', {phoneNumber:phoneNumber.toString()} , {
                headers: {
                    "Content-Type": "application/json",
                },
            });
       
            const data=response.data
            
            
            if(response.status===200){
                if(response.data.code===100){
                 
                    setLoginErr({err:false})
                    navigate('/codepage?phonenumber='+phoneNumber)

                }
                else{
                    console.log('hello')
                    setLoginErr({err:true,message:response.data.message})
                    
                }
                // setCookie('access',data.access)
                // setUser(jwtDecode(data.access))
                // setAccess(data.access)
 
                
                // localStorage.setItem('access',JSON.stringify(data))
                
                
    
            }

            
        } catch (error) {
            console.log(error.message)
           

       
            setLoginErr({err:true,message:'لطفا دوباره امتحان کنید'})
                
     
            
            
        }

    }
    const login=async(code,phonenumber,setRegisterErr)=>{
        try {
            const response=await axios.post(serverAddress+'api/user/register/secondstep',{code:code,phoneNumber:phonenumber}, {
                headers: {
                    "Content-Type": "Application/Json",
                }
                
            }
    
            )
            
            
    
            if (response.status===200){
                    if(response.data.code===100){
                        console.log('hello')
                        const access=response.data.access
                        userSetter(access)

                    }
                    else if(response.data.code===105){
                        navigate('/login?errmessage='+response.data.message)
                        
                        

                    }
                    else{
                        navigate('/login?errmessage='+response.data.message)
                      
                        
                        
                    }
       
      
                    // localStorage.setItem('access',JSON.stringify(data))    
        
    
            }
 
            
        } catch (error) {
            console.log(error)
            console.log(error.message)
            // window.location.reload()
       
            setRegisterErr({err:true,message:'تلاش نا موفق'})
            navigate('/login?errmessage='+error.data.message)
            

            
        }




        
    }
    const logout=()=>{
        removeCookie('access',{path:'/'});
        setUserPhoneNumber(null)
        setUser(null)
        setAccess(null)
       
        
    
    } 


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

            getBag:getBag,
            sendPhoneNumber:sendPhoneNumber,
            login:login
          
        }}>

            {props.children}
        </AuthContext.Provider>
        
    )
}
export {AuthProvider}
export default AuthContext