

const bgs = ["yellow", "purple", "green", "pink", "lightblue"];
let i = 0;


function Greeting() {
    return (
        <p className="btn" onClick={() => {changeBg(bgs[i]); i++}}>Click me!!!</p>
    )
}
export default Greeting;


function changeBg(color) {
    document.body.style.backgroundColor = color
}