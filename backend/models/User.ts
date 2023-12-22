
// const { Entity, Column, PrimaryGeneratedColumn }=require('typeorm') ;
import { Entity, PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm"
import { BagItem } from "./BagItem";




@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:true})
  name: string;
  @Column({nullable:true})
  family: string;
  @Column({nullable:true,unique:true})
  phoneNumber: string;
  @Column({nullable:true})
  receiverPhoneNumber:string;
  @Column({length:10,nullable:true})
  postcode:String;
  @Column({nullable:true})
  address:String;
  // @Column({default:'/profilepicture/profilePicture1683742097333-973148340.jpeg'})
  // profilePicture: string;
  @Column({default:false})
  isSuperUser:boolean
  
  @OneToMany(()=>BagItem,(bagItem)=>bagItem.user)
  bagItems:BagItem[]
//   @Column({default:false,nullable:false})
//   identified:Boolean;
//   @Column({nullable:true})
//   lastpaid:Date
  

  

}
