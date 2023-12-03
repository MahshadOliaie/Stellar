import BagProduct from "./BagProduct";
import MyHeader from "./MyHeader";


function BagPage(){
    return(
        <>
        <MyHeader headerState="header sticky"/>
        <div className="bag">
            <BagProduct/>
            <BagProduct/>
            <BagProduct/>
            <BagProduct/>
            <BagProduct/>
        </div>
        </>

    )
}


export default BagPage;