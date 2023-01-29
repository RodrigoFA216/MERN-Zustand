import React from 'react'
import {loginRequest} from '../api/auth'

function LoginPage() {
const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{//esto recibe datos desde un form html
        e.preventDefault()//no falles pls xd
        const email=(e.currentTarget.elements[0] as HTMLInputElement).value
        const pass=(e.currentTarget.elements[1] as HTMLInputElement).value
        const resLogin=await loginRequest(email,pass)
        console.log(resLogin)
    }
    return (
        <form onSubmit={handleSubmit}>
            <input type="email" placeholder='email@mail.com' name="" id="" />
            <input type="password" placeholder='*****' name="" id="" />
            <button>
                Login
            </button>
        </form>
    )
}

export default LoginPage