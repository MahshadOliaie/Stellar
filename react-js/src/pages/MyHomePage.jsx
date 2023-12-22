import MySlider from "../components/MySlider";
import Category from "../components/Category";
import MyHeader from "../components/MyHeader";
import {useNavigate} from 'react-router-dom'


function MyHomePage() {
    const navigate = useNavigate()

    return (
        <>
            <MyHeader headerState="header" />
            <MySlider />
            <div className="categories">
                <Category id="unisex" insideId="unisexIn" title="UNISEX" clickevent={()=>{navigate('/clothes?category_id=3&&category=UNISEX')}}   />
                <Category id="women" insideId="womenIn" title="WOMEN" clickevent={()=>{navigate('/clothes?category_id=2&&category=WOMEN')}} />
                <Category id="men" insideId="menIn" title="MEN" clickevent={()=>{navigate('/clothes?category_id=1&&category=MEN')}}/>
                <Category id="bags" insideId="bagsIn" title="BAGS" />
                <Category id="accessory" insideId="accessoryIn" title="ACCESSORY" />
            </div>
        </>
    )
}

export default MyHomePage;