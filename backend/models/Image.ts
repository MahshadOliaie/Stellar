
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm"
import { Product } from "./Product";


@Entity()
export class Image {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length:30,nullable:false})
  url:string;
  @Column({nullable:false})
  descripion:string;
  @ManyToOne(()=>Product,(product)=>product.images)
  product:Product
}
