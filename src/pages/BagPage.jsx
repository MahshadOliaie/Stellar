import { useContext, useEffect, useState } from "react";
import BagProduct from "../components/BagProduct";
import AuthContext from "../context/AuthContext";
import MyHeader from "../components/MyHeader";


function BagPage(){
    const [bagItems,setBagItems]=useState(null)
    const context=useContext(AuthContext)
    useEffect(()=>{
        context.getBag(setBagItems)
        

    },[])
    
    return(
        <>
        <MyHeader />
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