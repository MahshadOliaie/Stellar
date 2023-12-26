import { useNavigate } from "react-router-dom";
import { checkNumber } from "./LoginPage";


function SignupPage() {
    const Navigate = useNavigate()
    return (
        <div className="FormBg">
            <p className="backBtn" onClick={() => Navigate('/')}>back to home</p>
            <div className="form">
                <h1 className="form__title">sign up</h1>
                <input type="text" className="form__username" placeholder="username" />
                <input className="form__number" onKeyUp={checkNumber} type="number" placeholder="phone number"/>
                <p className="wrong dnone">wrong number!</p>
                <button type="submit" className="form__submit form__submitSignup disabled" onClick={() => Navigate('/codePage')}>send code</button>
                <p className="form__change" onClick={() => Navigate('/login')}>already have an account?</p>
            </div>
        </div>
    )
}

export default SignupPage;

