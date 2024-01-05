import { useContext, useEffect, useState } from "react";
import BagProduct from "../components/BagProduct";
import MyHeader from "../components/MyHeader";
import AuthContext from "../context/AuthContext";


function BagPage(){
    const [bagItems,setBagItems]=useState(null)
    const context=useContext(AuthContext)
    useEffect(()=>{
        context.getBag(setBagItems)
        

    },[])
    
    return(
        <>
        <MyHeader headerState="header sticky"/>
        <div className="bag">   
            {bagItems?.map((bagItem)=>{
                return(
                    <BagProduct bagItem={bagItem} id="b1"/>
                    
                )
            })}
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