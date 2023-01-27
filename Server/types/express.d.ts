declare namespace Express{
    export interface Request{
        user:any
    }
}
// Esto se puede extender con las características del objeto usuario por ejemplo:
// namespace Express{
//     interface Request{
//         img:string
//         name:string 
//         lname:string 
//         age:number
//     }
// }