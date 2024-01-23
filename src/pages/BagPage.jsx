import { useContext, useEffect, useState } from "react";
import BagProduct from "../components/BagProduct";
import AuthContext from "../context/AuthContext";
import MyHeader from "../components/MyHeader";
import Bag from "../Bag";


function BagPage(){
    // const [bagItems,setBagItems]=useState(null)
    // const context=useContext(AuthContext)
    // useEffect(()=>{
    //     context.getBag(setBagItems)
        

    // },[])
    
    return(
        <>
        <MyHeader />
        <div className="bag">   
            {/* {bagItems?.map((bagItem)=>{
                return(
                    <BagProduct bagItem={bagItem} id="b1"/>
                    
                )
            })} */}
            {Bag.map(item =>{
                return  <BagProduct {...item}/>
            })}
        </div>
        </>

    )
}


export default BagPage;