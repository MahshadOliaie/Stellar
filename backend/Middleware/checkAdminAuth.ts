const checkAdminAuth=(req,res,next)=>{
    if(req.user===null){
        return res.send('please login first')
    }
    if(req.user.isSuperUser===false){
        return res.send('ACCESS DENIED')
    }
    next()
    
}
export default checkAdminAuth