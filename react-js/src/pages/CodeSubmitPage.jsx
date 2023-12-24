import { useNavigate } from "react-router-dom";


function CodeSubmitPage() {
    const Navigate = useNavigate()
    return (
        <div className="FormBg">
            <div className="form">
                <h1 className="form__title">enter code</h1>
                <input className="form__code" id="codeInput" type="text" placeholder="code"/>
                <button type="submit" className="form__submit">done</button>
                <p className="form__change">didn't get the code?</p>
            </div>
        </div>
    )
}

export default CodeSubmitPage;