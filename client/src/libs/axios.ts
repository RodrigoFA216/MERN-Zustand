import axios from 'axios'
import {useAuthStore} from '../store/auth'

const authAPI=axios.create({
    baseURL: "http://localhost:3000/",
    withCredentials: true
})

authAPI.interceptors.request.use(config =>{
    const token = useAuthStore.getState().token
    config.headers={
        Authorization: `Bearer ${token}` 
    }
    return config
})

export default authAPI