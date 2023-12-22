
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, JoinColumn } from "typeorm"
import { Product } from "./Product";
import { Tag } from "./Tag";




@Entity()
export class ProductTag {
  @PrimaryGeneratedColumn()
  id: number;
  @ManyToOne(()=>Product,(product)=>product.tags)
  @JoinColumn()
  product:Product
  @ManyToOne(()=>Tag,(tag)=>tag.products)
  @JoinColumn()
  tag:Tag
//   @Column({name:'prodcut'})
//   product_id:number
//   @Column({name:'tag'})
//   tag_id:number  
  
}
