import axios from "axios"
import serverAddress from "../utils/serverAddress"

export const getProductsByTags=async(setProducts,tags)=>{
    try {
  
        const res=await axios.post(serverAddress+'api/product/getbytags',{
            tags:tags
        })
        console.log('hello')
        if(res.status===200){
            const resultData=res.data
            if(res.data.err===false){
        
                setProducts(res.data.data.result)
            }
        }
        
    } catch (error) {
   
        
    }
    
    
}