import HomePage from "./MyHomePage";
import MyHeader from "./MyHeader";
import MyHomePage from "./MyHomePage";
import Title from "./Title";
import Category from "./category";


function App() {
  return (
    <>
      <MyHeader />
      {/* <MyHomePage /> */}
      <Title title="UNISEX" />
      <div className="categories">
        <Category id="jacket" insideId="jacketIn" title="JACKET" />
        <Category id="hoodies" insideId="hoodiesIn" title="HOODIES" />
        <Category id="tshirt" insideId="tshirtIn" title="T-SHIRT" />
      </div>
      <Title title="ALL" />
    </>
  )

}

export default App;