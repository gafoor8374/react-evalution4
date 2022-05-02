// action types
export const Login_Request = "Login_Request";
export const Login_Success = "Login_Success";
export const ADMIN = "ADMIN";
export const CLIENT = "CLIENT"



// Action Creators
import axios from "axios";


const loginRequest = ()=>{
    return {
        type :Login_Request,
}
const Login_Success = (payload)=>{
    type : Login_Success,
    payload
}
}

const admin = (data)=>{
    return {
        type:ADMIN,
        payload:data
    }
}
const client = (data)=>{
    return {
        type:CLIENT,
        payload:data
    }
}
export const login = ({username,password})=>(dispatch)=>{
    dispatch(loginRequest())
    axios.post(`https://reqres.in/api/login`,{
        username,password
    }).then((res)=>{
        dispatch(loginSuccess(res.data))
    })
}