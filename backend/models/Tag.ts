
import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, ManyToOne, OneToMany } from "typeorm"
import { Product } from "./Product";
import { ProductTag } from "./ProductTag";




@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length:10,nullable:false})
  value:string;

  @Column({nullable:false})
  descripion:string;
  @OneToMany(()=>ProductTag,(productTag)=>productTag.tag)
  products:Product[]
  
}
