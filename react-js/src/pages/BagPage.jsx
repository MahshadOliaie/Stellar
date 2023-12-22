import BagProduct from "../components/BagProduct";
import MyHeader from "../components/MyHeader";


function BagPage(){
    return(
        <>
        <MyHeader headerState="header sticky"/>
        <div className="bag">   
            <BagProduct id="b1"/>
            <BagProduct id="b2"/>
            <BagProduct id="b3"/>
            <BagProduct id="b4"/>
            <BagProduct id="b5"/>
        </div>
        </>

    )
}


export default BagPage;