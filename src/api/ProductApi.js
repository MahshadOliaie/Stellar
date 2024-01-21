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
            
        
                setProducts(resultData.data.result)
            }
        }
        
    } catch (error) {
   
        
    }
    
    
}
export const getFullDetailProduct=async(id,setProduct)=>{
    console.log('hello')
    const res=await axios.get(serverAddress+`api/product/getproduct/${id}`)
    if(res.status===200){
        const resultData=res.data
        if(res.data.err===false){
   
            let structuredProduct=res.data.data
            structuredProduct['size']={}
            for(let i of structuredProduct.colorsNSizes){
                structuredProduct['size'][i.size].push(i.color)

            }
     
            setProduct(structuredProduct)
        }
    }
    
} 