
// const { Entity, Column, PrimaryGeneratedColumn }=require('typeorm') ;
import { Entity, PrimaryGeneratedColumn, Column, OneToMany} from "typeorm"



@Entity()
export class Color {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({length:15})
  name:string
  
  @Column()
  value:string
  
  
  

}
