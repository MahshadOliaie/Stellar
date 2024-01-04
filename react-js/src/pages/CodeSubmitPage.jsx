import { useContext, useEffect, useRef, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";


function CodeSubmitPage() {
    const Navigate = useNavigate()
    const context=useContext(AuthContext)
    const codeEl=useRef()
    const [registerErr,setRegisterErr]=useState()
    const [qParams,setQParams]=useSearchParams()
    useEffect(()=>{
        if(context.user){
            Navigate('/')
        }
    },[])

    return (
        <div className="FormBg">
            <div className="form">
                <h1 className="form__title">enter code</h1>
                <input ref={codeEl} className="form__code" id="codeInput" type="text" placeholder="code"/>
                <button onClick={()=>context.login(codeEl.current.value,qParams?.get('phonenumber'),setRegisterErr)} type="submit" className="form__submit">done</button>
                <p className="form__change" onClick={()=>Navigate('/login')}>didn't get the code?</p>
            </div>
        </div>
    )
}

export default CodeSubmitPage;