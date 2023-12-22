
import { Entity, Column, PrimaryGeneratedColumn, OneToOne, OneToMany, ManyToMany, JoinTable, IntegerType, CreateDateColumn, UpdateDateColumn } from 'typeorm';


// export enum color {
//     yellow = 'yellow',
//     red = 'red',
//   }
@Entity()
export class TfLogin {
  @Column({primary:true,unique:true,length:13})
  phoneNumber: string;
  @Column()
  code:number;
  @Column({type:'timestamptz'})
  createdDate:Date  

  
  

  
}