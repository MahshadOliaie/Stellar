import { useState } from "react";
import { useNavigate } from "react-router-dom";

let phoneNumber = "";

function LoginPage() {
    const Navigate = useNavigate()
    return (
        <div className="FormBg">
            <p className="backBtn" onClick={() => Navigate('/')}>back to home</p>
            <div className="form">
                <h1 className="form__title">login</h1>
                <input onKeyUp={checkNumber} className="form__number" id="number" type="number" placeholder="phone number"/>
                <p className="wrong dnone">wrong number!</p>
                <button type="submit" className="form__submit disabled" onClick={() => Navigate('/codePage')}>send code</button>
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