

const bgs = ["yellow", "purple", "green", "pink", "lightblue"];
let i = 0;


function Greeting() {
    return (
        <p className="btn" onClick={() => {changeBg(bgs[i]); if(i<4){i++}}}>click me!!!</p>
    )
}
export default Greeting;


function changeBg(color) {
    event.target.textContent = color
    document.body.style.backgroundColor = color
}