import { Product } from "../models/Product";
import { ProductTag } from "../models/ProductTag";
import dataSource from "./dbConfiguration";



export const selectProdcutsByTagsQ=(tags)=>{
    const subQuery=dataSource.createQueryBuilder()
    const mainQuery=dataSource.createQueryBuilder()
    subQuery
    .select('productTag.id')
    .from(ProductTag,'productTag')
    .groupBy('productTag.id')
    .having(':tag_count=SUM(cast(productTag.tag in (:...specific_tags_list) as int))'
    ,{
        tag_count:tags.length
        ,specific_tags_list:tags})
    mainQuery
    .from(Product,'product')
    .select('product')
    .where('product.id in ('+subQuery.getQuery()+')')
    .setParameters(subQuery.getParameters())


    return mainQuery

}