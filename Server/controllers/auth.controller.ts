import {Request, Response} from 'express'
import jwt from 'jsonwebtoken'

export const loginHandler=(req:Request, res: Response)=>{
    //recibir datos y procesar req.body
    // req.body={
    //     email:"email",
    //     pass:"something"
    // }

    //validar los datos
    // req.body={
    //     email:"email@something.com",
    //     pass:"something123$"
    // } (se usa express validator o joi o zod)

    //guardar en base de datos

    //generar un token
    const token =jwt.sign({
        test:"test"
    }, 'secret', {
        expiresIn: 60*60*24
    })
    // sign pide un objeto para generar el token y pide un secreto para encriptarlo
    // generalmente este secret son variables de entorno (bcrypt) 
    // el tercer parámetro es un objeto de configuración (npm install @types/jsonwebtokens -D)
    return res.json({
        token
    })
}

export const profileHandler=()=>{
    
}