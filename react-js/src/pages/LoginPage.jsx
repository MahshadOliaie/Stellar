import { useNavigate } from "react-router-dom";

function LoginPage() {
    const Navigate = useNavigate()
    return (
        <div className="FormBg">
            <div className="form">
                <h1 className="form__title">login</h1>
                <input className="form__number" type="text" placeholder="phone number" maxLength={11} minLength={11} />
                <button type="submit" className="form__submit" onClick={() => Navigate('/codePage')}>send code</button>
                <p className="form__change" onClick={() => Navigate('/signUp')}>create an account</p>
            </div>
        </div>
    )
}

export default LoginPage;