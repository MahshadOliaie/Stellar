import { Router } from "express";
import productRouter from "./product";
import userRouter from "./userRouter";

const apiRouter=Router()

apiRouter.use('/product',productRouter)
apiRouter.use('/user',userRouter)

export default apiRouter