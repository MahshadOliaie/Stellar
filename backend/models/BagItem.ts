import { Entity, Column, PrimaryGeneratedColumn, OneToOne,JoinColumn, ManyToOne, OneToMany } from 'typeorm';
import { User } from './User';
import { ProductColorSize } from './ProductColorSize';





export enum status{
  inShoppingCart='inShoppingCart',
  waitingForPayment='waitingForPayment',
  paid='paid'
  
}
@Entity()
export class BagItem {
  @PrimaryGeneratedColumn()
  id: number;
  @Column({nullable:false})
  count: number;
 
  // @ManyToOne(()=>Transaction,(transaction)=>transaction.productsInCart,{nullable:true})
  // transaction:Transaction

  // @Column({type:'enum',enum:status,default:'inShoppingCart'})
  // status:status
  @OneToMany(()=>User,(user)=>user.bagItems)
  user:User
  @ManyToOne(()=>ProductColorSize)
  productColorSize:ProductColorSize


}
