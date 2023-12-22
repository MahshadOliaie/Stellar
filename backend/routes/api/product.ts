import { Router } from "express";
import dataSource from "../../utils/dbConfiguration";
import { ProductTag } from "../../models/ProductTag";
import { Product } from "../../models/Product";
import { selectProdcutsByTagsQ } from "../../utils/Queries";

const productRouter=Router()
const productTagRepo=dataSource.getRepository('ProductTag')
const prodctRepo=dataSource.getRepository('Product')

productRouter.post('/getbytags',async(req,res)=>{
    try {
       
        const body=req.body
        
        
        if(body.tags===null){
      
            return res.json({err:true,message:'no result found'})
   

        }
        const query=selectProdcutsByTagsQ(body.tags)


        // const subquery=query
        // .select('product.*')
        // .from(Product,'product')
        // .addFrom(ProductTag,'productTag')
        // .where('product.id=productTag.product')
        // .groupBy('product.id')
        // .having(':tag_count=SUM(cast(productTag.tag in (:...specific_tags_list) as int))',{tag_count:body.tags.length,specific_tags_list:body.tags})

        const result=await query.getMany()
       
        

        return res.json({err:false,data:{result}})
        



        
        
        
    } catch (error) {
      
        res.json({err:true,message:'INTERNAL ERROR'})
        
    }
})
productRouter.get('/getproduct/:id',async(req,res)=>{
    try {
        const productId=(+req.params.id)||null
        console.log(productId)
        if(productId!==null){
            const product=await prodctRepo.findOne({
                relations:['colorsNSizes','images','colorsNSizes.color'],
                where:{
                    id:productId
        
                }
            })
            
            return res.json({err:false,message:'محصول مورد نظر پیدا شد',data:product})
            
        }
        return res.json({err:true,message:'محصول مورد نظر پیدا نشد'})
        
        
    } catch (error) {
        return res.json({err:true,message:'محصول مورد نظر پیدا نشد'})
        
        
    }


    
    
})
export default productRouter