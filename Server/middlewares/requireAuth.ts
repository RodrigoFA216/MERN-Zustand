import {
    Request,
    Response,
    NextFunction
} from 'express'
import jwt from 'jsonwebtoken'

export const requireAuth=(req:Request, res:Response, next:NextFunction)=>{
    const authHeader=req.headers.authorization
    if(!authHeader) return res.status(401).json({
        message: "Unauthorized"
    })
    // El string se divide en "Bearer asdkjahda"
    //necesitamos dividirlo cuando se encuentre la primer incidencia de ' '
    //pasa de ser "Bearer asdkjahda"
    //a ser ["Bearer", "asdkjahda"] por tanto tomamos el indice uno
    const token=authHeader.split(' ')[1]
    const key=authHeader.split(' ')[0]
    if (key==='Bearer') {
        if(!token) return res.status(401).json({
            message: "Unauthorized"
        })
        else{
            //usamos el metodo de jsonwebtokens llamado verificación
            //requiere la cosa a verificar, el secreto con el que se encriptó 
            //va a regresar un erro o datos que tiene dentro ese token
            jwt.verify(token, 'secret', (err, user)=>{
                if (err) return res.status(401).json({
                    message: "Unauthorized"
                })
                console.log(user);
                // req.user=user para js, en el caso de ts se usa el archivo de server/types/express.d.ts
                //y aparte se hacen modificaciones en tsconfig que es básicamente cómo tiene que funcionar el compilador de ts
                req.user=user
                next()
            })
        }
    }else{
        return res.status(401).json({
            message: "Unauthorized"
        })
    }
}