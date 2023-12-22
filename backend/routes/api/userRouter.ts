import { Router } from 'express'
import *  as express   from "express";
import jsonwebtoken = require('jsonwebtoken') 
const userRouter=Router()

import dataSource from '../../utils/dbConfiguration';
// import userModel, { findOne } from '../models/user'
// import shoppingCart from '../models/ShoppingCart'


// import { hash, compare } from 'bcrypt'
import checkAuth from '../../Middleware/checkAuth';

// import cors =require('cors') 
// userRouter.use(cors())
import { isInt, isNumber } from 'class-validator';
import { check_phone } from '../../utils/checkPhone';
import { Product } from '../../models/Product';
const userRepo=dataSource.getRepository('User')
const tfLoginRepo=dataSource.getRepository('TfLogin')


// const storage=diskStorage({
//     destination:(req,file,cb)=>{
//         cb(null,'F:/zarpharo/zarpharo/backend/'+'public/profilepicture/')
//     },
//     filename:(req,file,cb)=>{
//         const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)+'.'+file.mimetype.split('/')[1]
//         cb(null,file.fieldname+uniqueSuffix)


//     }
// })
// // set sizefilter later

// const upload=multer({storage:storage,
//     // add filesize filter later
//     fileFilter: (req, file, cb) => {
//         if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
//             cb(null, true);
//         } else {
//             cb(null, false);
//             return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
//         }
//     }
// })

// add delete file method later
// upload.single('profilePicture')
userRouter.post('/register/firststep',async(req,res)=>{
    try {
        const phoneNumber=req.body.phoneNumber
        if(!check_phone(phoneNumber)){
            
            return res.json({err:{message:"لطفا شماره را درست وارد کنید "},code:-101})
        }
        const lastLogin=await tfLoginRepo.findOne({
            where:{
                phoneNumber:phoneNumber
            },
            order:{
                createdDate:'DESC'
                
            }
        })
        if(lastLogin!==null){
            const diff=new Date().getTime()-lastLogin.createdDate.getTime()
            if(diff<60000){
                return res.json({err:null,code:100})
            }

            
           
            
        }
        const code=Math.floor(Math.random()*9999);
        await tfLoginRepo.save(tfLoginRepo.create({phoneNumber:phoneNumber,code:code,createdDate:new Date()}))
        //sendCode api
        
        res.status(200)
        return res.json({err:null,code:100})
   

    
        
    } catch (error) {
        console.log(error.message)
        return res.json({err:{message:'لطفا دوباره تلاش کنید'}})

        
    }

    // try {
        
        
        
       

    //     if(!username||!password||!rePassword){
    //         res.status(400)
    //         return res.json({access:null,err:"please complete fields"}) 
    //     }
    //     if(rePassword!==password||password<8){
    //         res.status(400)
    //         return res.json({access:null,err:"password err"}) 

    //     }
        
    //     // let user =await userRepo.findOne({})
    //     // let user=await userRepo.createQueryBuilder('user').select()
    //     let user=await userRepo.findOne({
    //         select:{id:true,username:true,profilePicture:true},
    //         where:{username:username}
    //     })
    //     if (user){   
    //         // console.log(user)
    //         return res.json({access:null,err:"this username has already been used"})
    //     } 
     
    //     // res.sen  d("dadada")
    //     password=await hash(password,10)
    //     // creating shopping cart for new user
    //     let scRepo=dataSource.getRepository('ShoppingCart')

    //     let sc=scRepo.create()
        
    //     // let Sc=new shoppingCart()
    //     sc=await scRepo.save(sc)
        
    //     user=userRepo.create({
    //         username:username,
    //         password:password,
    //         shoppingCart:sc.id,
        
    //     })

    
        
    //     user=await userRepo.save(user)
    //     console.log(user)
    //     console.log(user.profilePicture)
       
    //     const jwtUser=jsonwebtoken.sign({id:user.id,username:user.username,profilepicture:user.profilePicture,isSuperUser:user.isSuperUser,shoppingCart:user.shoppingCart},process.env.SECRET_TOKEN_KEY)

    //     return res.json({access:jwtUser,err:null}) 
    // } catch (error) {
    //     console.log(error.message)
    //     return res.json({access:null,err:error})    
    // }  
})  
userRouter.post('/register/secondstep',async(req,res)=>{
    try {
        const code=req.body.code
        const phoneNumber=req.body.phoneNumber
        if(!check_phone(phoneNumber)){
            
            res.status(400)
            // return res.json({err:"لطفا شماره را با فرمت"+"+98-912-XXXX124"+"وارد کنید"})
        }

        const userTfLogin=await tfLoginRepo.findOne({
            where:{
                phoneNumber:phoneNumber
            }
        })
        if(userTfLogin!==null){
            const timeDiff=(new Date().getTime()-userTfLogin.createdDate.getTime())/1000
            console.log(timeDiff)
            if(timeDiff>60){
                return res.json({err:{message:'مدت زمان شما به پایان رسید لطفا دوباره لاگین کنید'},code:105})
            }
            
        }
        if(userTfLogin.code.toString()!==code){
           
       
            return res.json({err:{message:'کد وارد شده اشتباه است'},code:102})
            
            
        }
        let user=await userRepo.findOne({
            relations:[],
            where:{
                phoneNumber:phoneNumber
            },
        })
        let userToken
        if(user===null){
            
            
            
            // sc=await scRepo.save(sc)
            user=await userRepo.save(userRepo.create({phoneNumber:phoneNumber}))   
            userToken=jsonwebtoken.sign({id:user.id,name:user.name,family:user.family},process.env.SECRET_TOKEN_KEY)
            
        }
        else{
            userToken=jsonwebtoken.sign({id:user.id,name:user.name,family:user.family},process.env.SECRET_TOKEN_KEY)

        }
  

        
        return res.json({access:userToken,err:null,code:100})

    } catch (error) {
        console.log(error.message)
        res.status(400)
        return res.json({err:{message:'لطفا دوباره تلاش کنید'},code:104})
        
    }
    
})
// userRouter.post('/register/thirdstep',checkAuth,async(req,res)=>{
//     try {
//         const firstName=req.body.firstName
//         const lastName=req.body.lastName
//         const postCode=req.body.postCode
//         const phoneNumber=req.body.phoneNumber
//         const address=req.body.address
//         if(firstName.trim().length===0){
           
//             res.status(400)
//             return res.json({err:'لطفا نام خود را درست وارد کنید'})

//         }
//         else if(lastName.trim().length===0){
//             console.log(lastName)
//             res.status(400)
//             return res.json({err:'لطفا نام خانوادگی خود را درست وارد کنید'})
            
//         }
        
//         else if(!checkPostCode(postCode)){
            
//             res.status(400)
//             return res.json({err:'لطفا کد پستی خود را درست وارد کنید'})
            
//         }
//         else if(!check_phone(phoneNumber)){
//             res.status(400)
//             return res.json({err:'لطفا شماره همراه خود را درست وارد کنید'})
            
//         }
//         else if(address.trim().length===0){
//             res.status(400)
//             return res.json({err:'لطفا ادرس خود را درست وارد کنید'})
            
//         }
//         const user=await userRepo.findOne({
//             relations:['shoppingCart'],
//             where:{
//                 id:req['user']['id']
//             }
//         })
//         user.name=name
//         user.family=lastName
//         user.postcode=postCode
//         user.address=address
//         user.receiverPhoneNumber=phoneNumber
//         user.identified=true
//         const editedUser=await userRepo.save(user)
//         const userToken=jsonwebtoken.sign({id:editedUser.id,name:editedUser.name,family:editedUser.family,shoppingCart:editedUser.shoppingCart.id,identified:editedUser.identified},process.env.SECRET_TOKEN_KEY)
//         return res.json({access:userToken,err:null})
        
        
        
        
            
//     } catch (error) {
//         console.log(error.message)
//         res.status(400)
//         return res.json({err:'error'})
        
//     }


    
// })
// userRouter.post('/login',async(req,res)=>{
//     console.log(req.body)
//     try {   
//         const username=req.body?.username
//         const password=req.body?.password
//         console.log(username)
        
//         if(password.trim().length===0&&username.trim().length===0){
//             res.status(400)
//             return res.json({access:null,err:'please enter username and password correctly'})
//         }
//         let user =await userRepo.findOne({
//             where:{username:username},
//             relations:['shoppingCart']
//         })
    
//         // let user=await findOne({username:username})
//         if(compare(password,user.password)){
           
//             const jwtUser=jsonwebtoken.sign({id:user.id,username:user.username,profilepicture:user.profilePicture,isSuperUser:user.isSuperUser,shoppingCart:user.shoppingCart},process.env.SECRET_TOKEN_KEY)
//             return res.json({access:jwtUser,err:null})
//         }
        

        
        
//     } catch (error) {
//         console.log(error)
//         res.status(400)
//         return res.json({access:null,err:'error'})
        
//     }


    
// })
// userRouter.get('/cookie',checkAuth,(req,res)=>{

//     console.log(jsonwebtoken.verify(req.cookies.access,process.env.SECRET_TOKEN_KEY))
    
// })

userRouter.post('/shoppingcart',checkAuth,async(req,res)=>{
    try {
        // const scRepo=dataSource.getRepository('ShoppingCart')
        const BagItems=await userRepo.findOne({
            where:{
                user:{
                    id:req['user']['id']

                }
    
            },

            relations:['productColorSize','productColorSize.color','productColorSize.product']
            ,

            
        })
        // const user=await userRepo.findOne({
        //     where:{
        //         id:req['user']['id']
    
        //     },
        //     relations:['BagItem','BagItem.productColorSize','BagItem.productColorSize.color','BagItem.productColorSize.product']
        //     ,

            
        // })
      
        res.json(BagItems)
        
    } catch (error) {
        console.log(error.message)
        
    }



    
    // userRepo.findOne()
    
})
const bagItemRepo=dataSource.getRepository('BagItem')
userRouter.post('/shoppingcart/add',checkAuth,async(req,res)=>{
  
    try {
        const body=req.body
        if(!isInt(body.count)||body.count<=0||body.count>100||!isInt(body.product)||body.product<=0){
            res.status(400)
            return res.json({err:'invalid parameters'})

        }
      
        const userId=req['user']['id']
    
    
       
        let bagItem=await bagItemRepo.findOne({
            relations:['ProductColorSize'],
            
            where:{
                user:{
                    id:userId
                },
                productColorSize:{
                    product:{
                        id:body.product
                    }
                }
                
 
            },

    
        })
      

    
        // for(let productInCart of bagItems){
      
        //     if(productInCart.plate.code===req.body.plate){
        //         productInCart.count=req.body.count
        //         newProductIC=await bagItemRepo.save(productInCart)
        //         return res.json({product:newProductIC,err:null})
                
        //     }
            
            
        // }
      
      
        if(bagItem!==null){
            bagItem.count=body.count
            bagItem=await bagItemRepo.save(bagItem)
            return res.json({product:bagItem,err:null})
                    

        }

        
            
            
        
        
        bagItem= bagItemRepo.create({count:body.count,product:body.product,user:userId})
        bagItem=await bagItemRepo.save(bagItem)
        return res.json({product:bagItem,err:null})
    
        
    } catch (error) {
        console.log(error.message)
        
    }


})
// userRouter.post('/shoppingcart/delete/:id',checkAuth,async(req,res)=>{
//     try {
        
//         const productInCartId=req.params.id
//         const userId=req['user']['id']
    
//         const bagItem=dataSource.getRepository('BagItem')

//         const productInCart=await bagItem.findOne({
//             where:{
//                 user:{userId}
//                 id:productInCartId,
          
//             }   
//         })
//         await productInCartR.delete(productInCart)
//         console.log('here')
    
//         return res.status(200)
        
        
//     } catch (error) {
//         return res.status(400)
        
//     }


// })


export default userRouter
