import MySlider from "../components/MySlider";
import Category from "../components/Category";
import { useNavigate } from 'react-router-dom'
import MyHeader from "../components/MyHeader";


function MyHomePage() {
    const navigate = useNavigate()

    return (
        <>
            <MyHeader position="fixed" />
            <MySlider />
            <div className="categories">
                <Category id="unisex" insideId="unisexIn" title="UNISEX" clickevent={() => { navigate('/clothes?category_id=3&&category=UNISEX') }} />
                <Category id="women" insideId="womenIn" title="WOMEN" clickevent={() => { navigate('/clothes?category_id=2&&category=WOMEN') }} />
                <Category id="men" insideId="menIn" title="MEN" clickevent={() => { navigate('/clothes?category_id=1&&category=MEN') }} />
                <Category id="bags" insideId="bagsIn" title="BAGS" />
                <Category id="accessory" insideId="accessoryIn" title="ACCESSORY" />
            </div>
        </>
    )
}

export default MyHomePage;