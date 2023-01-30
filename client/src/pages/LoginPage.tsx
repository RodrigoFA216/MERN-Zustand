import React from 'react'
import {loginRequest, profileRequest} from '../api/auth'
import {useAuthStore} from '../store/auth'

function LoginPage() {
    const setToken=useAuthStore(state=>state.setToken)
    const handleSubmit=async(e:React.FormEvent<HTMLFormElement>)=>{//esto recibe datos desde un form html
        e.preventDefault()//no falles pls xd
        const email=(e.currentTarget.elements[0] as HTMLInputElement).value
        const pass=(e.currentTarget.elements[1] as HTMLInputElement).value
        const resLogin=await loginRequest(email,pass)
        console.log(resLogin)
        setToken(resLogin.data.token)
        const resProfile=await profileRequest()
        console.log(resProfile);
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