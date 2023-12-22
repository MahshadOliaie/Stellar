

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, PrimaryColumn, JoinColumn } from "typeorm"
import { size } from "../utils/productSizeEnum";
import { Color } from "./Color";
import { Product } from "./Product";



@Entity()
export class ProductColorSize {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:false})
  stock:number;
  @Column({type:'enum',enum:size,nullable:true})
  size:string;
  @ManyToOne(()=>Product,(product)=>product.colorsNSizes)

  product:Product
  @ManyToOne(()=>Color)
  color:Color
  
}
