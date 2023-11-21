import MySlider from "./MySlider";
import Category from "./category";

function MyHomePage() {
    return (
        <>
            <MySlider />
            <div className="categories">
                <Category id="unisex" insideId="unisexIn" title="UNISEX" />
                <Category id="women" insideId="womenIn" title="WOMEN" />
                <Category id="men" insideId="menIn" title="MEN" />
                <Category id="bags" insideId="bagsIn" title="BAGS" />
                <Category id="accessory" insideId="accessoryIn" title="ACCESSORY" />
            </div>
        </>
    )
}

export default MyHomePage;