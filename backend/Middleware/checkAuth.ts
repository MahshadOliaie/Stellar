import { access } from 'fs'
import { verify } from 'jsonwebtoken'

const checkAuth=async(req,res,next)=>{
  

    // const authToken=req.headers.authorization?.split(' ')[1] | null
    try {
        const authToken=req.cookies.access

        if(authToken){
            
        
            
            verify(authToken,process.env.SECRET_TOKEN_KEY,(err,user)=>{
              
                
                if(err){
               
                    req.user=null
                    
                    res.status(401)
                    return res.json({err:'not authenticated'})
                  
                    
                }
                else{
          
                    req.user=user
                    next()
                }
            
        
            })
    
        }
        else{
            res.status(401)
            return res.json({err:'not authenticated'})
        }
    
        
    } catch (error) {
        res.status(401)
        return res.json({err:'not authenticated'})
        
    }

 

    
    
    
}
export default checkAuth