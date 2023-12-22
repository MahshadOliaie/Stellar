
// const { Entity, Column, PrimaryGeneratedColumn }=require('typeorm') ;

import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToMany } from "typeorm"
import { ProductColorSize } from "./ProductColorSize";
import { Image } from "./Image";
import { Tag } from "./Tag";
import { ProductTag } from "./ProductTag";
import { name } from "@admin-bro/express";




@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length:15,nullable:false})
  name:string;
  @Column({nullable:false})
  price:number;
  @Column({nullable:false})
  descripion:string;
  @OneToMany(()=>ProductColorSize,(productColorSize)=>productColorSize.product)
  colorsNSizes:ProductColorSize[]
  @Column()
  mainImg:string
  @OneToMany(()=>Image,(image)=>image.product)
  images:Image[]
  @OneToMany(()=>ProductTag,(productTag)=>productTag.product)
  tags:ProductTag[]

}
