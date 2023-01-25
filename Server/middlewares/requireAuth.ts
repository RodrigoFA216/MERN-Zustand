import {
    Request,
    Response,
    NextFunction
} from 'express'

export const requireAuth=(req:Request, res:Response, next:NextFunction)=>{
    const authHeader=req.headers.authorization
    if(!authHeader) return res.status(401).json({
        message: "Unauthorized"
    })
    // El string se divide en "Bearer asdkjahda"
    
    next()
}