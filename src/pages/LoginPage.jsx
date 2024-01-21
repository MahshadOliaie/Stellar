import { useContext, useState,useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";



function LoginPage() {
    const Navigate = useNavigate()
    const context=useContext(AuthContext)
    const numberEl=useRef()
    const [loginErr,setLoginErr]=useState({err:false})
    const [qParams,setQParams]=useSearchParams()
    useEffect(()=>{
        if(context.user){
      
            Navigate('/')
        }
        if(qParams.has('errmessage')){

            setLoginErr({err:true,message:qParams.get('errmessage')})
            setQParams((prevParam)=>prevParam.delete('errmessage'))
        }
        

    },[])


    return (
        <div className="FormBg">
            <p className="backBtn" onClick={() => Navigate('/')}>back to home</p>
            <div className="form">
                <h1 className="form__title">login</h1>
                <input ref={numberEl} onKeyUp={checkNumber} className="form__number" id="number" type="number" placeholder="phone number"/>
                <p className="wrong dnone">wrong number!</p>
                <p className="wrong">{loginErr.message}</p>

                <button type="submit" className="form__submit disabled" onClick={() => context.sendPhoneNumber(numberEl.current.value,setLoginErr)}>send code</button>
                <p className="form__change" onClick={() => Navigate('/signUp')}>create an account</p>
            </div>
        </div>
    )
}

export default LoginPage;



export function checkNumber() {
    let value = event.target.value;

    if (value.length > 0 && value.length < 11) {
        event.target.style.boxShadow = "inset 0px 2px 4px rgba(255, 0, 0, 0.5)";
        document.querySelector(".wrong").classList.add("dnone")
        document.querySelector(".form__submit").classList.add("disabled")

    } else {
        event.target.style.boxShadow = "inset 0px 2px 4px rgba(0, 0, 0, 0.25)";
        document.querySelector(".wrong").classList.add("dnone")
    }

    if (value.length > 11) {
        event.target.style.boxShadow = "inset 0px 2px 4px rgba(255, 0, 0, 0.5)";
        document.querySelector(".wrong").classList.remove("dnone")
        document.querySelector(".form__submit").classList.add("disabled")
    }
    if(value.length == 11){
        document.querySelector(".form__submit").classList.remove("disabled")
        phoneNumber = value;
    }

   

}