import MyHeader from "./MyHeader";
import MySlider from "./MySlider";
import Category from "./category";


function App() {
  return (
    <>
    <MyHeader />
    <MySlider />
    <div className="categories">
      <Category id="unisex" title="UNISEX"/>
      <Category id="women" title="WOMEN"/>
      <Category id="men" title="MEN"/>
      <Category id="bags" title="BAGS"/>
      <Category id="accessory" title="ACCESSORY"/>
    </div>
    </>
  )
}

export default App;