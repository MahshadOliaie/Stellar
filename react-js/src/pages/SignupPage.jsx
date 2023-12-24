import { useNavigate } from "react-router-dom";


function SignupPage() {
    const Navigate = useNavigate()
    return (
        <div className="FormBg">
            <div className="form">
                <h1 className="form__title">sign up</h1>
                <input type="text" className="form__username" placeholder="username" />
                <input className="form__number" type="text" placeholder="phone number" maxLength={11} minLength={11} />
                <button type="submit" className="form__submit" onClick={() => Navigate('/codePage')}>send code</button>
                <p className="form__change" onClick={() => Navigate('/login')}>already have an account?</p>
            </div>
        </div>
    )
}

export default SignupPage;