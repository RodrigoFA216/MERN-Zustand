import  axios  from "axios";
import LoginPage from "../pages/LoginPage";

export const loginRequest= async(email: string, pass:string)=>{
    return axios.post('http://localhost:3000/login', {
        email,
        pass
    })
}