"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.profileHandler = exports.loginHandler = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const loginHandler = (req, res) => {
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
    const token = jsonwebtoken_1.default.sign({
        test: "test"
    }, 'secret', {
        expiresIn: 60 * 60 * 24
    });
    // sign pide un objeto para generar el token y pide un secreto para encriptarlo
    // generalmente este secret son variables de entorno (bcrypt) 
    // el tercer parámetro es un objeto de configuración (npm install @types/jsonwebtokens -D)
    return res.json({
        token
    });
};
exports.loginHandler = loginHandler;
const profileHandler = (req, res) => {
    return res.json({
        message: "Auth succesfull"
    });
};
exports.profileHandler = profileHandler;
