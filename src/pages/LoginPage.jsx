import { useContext, useState, useRef, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import AuthContext from "../context/AuthContext";



function LoginPage() {
    event.preventDefault()
    const Navigate = useNavigate()
    const context = useContext(AuthContext)
    const numberEl = useRef()
    const [qParams, setQParams] = useSearchParams()
    const [error, setError] = useState(false)
    const [inputValue, setInputValue] = useState("")


    useEffect(() => {
        if (context.user) {

            Navigate('/')
        }
        if (qParams.has('errmessage')) {

            setError({ err: true, message: qParams.get('errmessage') })
            setQParams((prevParam) => prevParam.delete('errmessage'))
        }


    }, [])




    function checkNumber() {
        let value = event.target.value;
        setInputValue(value)

        if ((value.length > 0 && value.length < 11) || !(value.match(/^\d{1,}$/)))
            setError(true)
        else
            setError(false)

        if (value.length == 0)
            setError(false)

    }


    return (
        <div className="FormBg">
            <p className="backBtn" onClick={() => Navigate('/')}>back to home</p>
            <div className="form">
                <h1 className="form__title">login</h1>
                <form action="">
                    <input className={error && "notValid"} ref={numberEl} value={inputValue} onChange={checkNumber} id="number" type="text" placeholder="phone number" maxLength={11} />
                    {(error) && <p className="wrong">wrong number!</p>}

                    {/* <p className="wrong">{loginErr.message}</p> */}

                    <button type="submit" className={((error) || (inputValue.length == 0)) ? "form__submit disabled" : "form__submit"} onClick={() => context.sendPhoneNumber(numberEl.current.value, setLoginErr)}>send code</button>

                </form>
                <p className="form__change" onClick={() => Navigate('/signUp')}>create an account</p>
            </div>
        </div>
    )
}

export default LoginPage;


