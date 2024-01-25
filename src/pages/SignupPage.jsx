import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";


function SignupPage() {
    const Navigate = useNavigate()
    const [error, setError] = useState(false)
    const [inputValue, setInputValue] = useState("")
    const [username, setUsername] = useState("")

    // useEffect(()=>{
    //     if(context.user){

    //         Navigate('/')
    //     }

    // },[])

    function numberValidation() {
        let value = event.target.value;
        setInputValue(value)

        if ((value.length > 0 && value.length < 11) || !(value.match(/^\d{1,}$/)))
            setError(true)
        else
            setError(false)

        if (value.length == 0)
            setError(false)

    }

    function handleUsername() {
        let value = event.target.value
        setUsername(value)
    }

    return (
        <div className="FormBg">
            <p className="backBtn" onClick={() => Navigate('/')}>back to home</p>
            <div className="form">
                <h1 className="form__title">sign up</h1>
                <form action="">
                    <input type="text" className="form__username" value={username} placeholder="username" onChange={handleUsername} />
                    <input className={error && "notValid"} onChange={numberValidation} value={inputValue} type="text" placeholder="phone number" maxLength={11} />
                    {(error) && <p className="wrong">wrong number!</p>}
                    <button type="submit" className={((error) || (inputValue.length == 0)) ? "form__submit form__submitSignup disabled" : "form__submit form__submitSignup"} onClick={() => Navigate('/codePage')}>send code</button>
                </form>
                <p className="form__change" onClick={() => Navigate('/login')}>already have an account?</p>
            </div>
        </div>
    )
}

export default SignupPage;

