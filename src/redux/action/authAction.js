import Axios from 'axios'
import {APIURL} from './../../support/url'

export const UserRegister=({username, email, password})=>{
    return (dispatch)=>{
        if(username==='' || password==='' || email===''){
            dispatch({type:'ERROR_REGISTER', payload:'Pastikan semua terisi'})
        }else{
            Axios.post(`${APIURL}auth/register`, {username,email,password})
            .then((res)=>{
                if(res.data.status==='error'){
                    console.log('ini error', res.data.message)
                    dispatch({type:'ERROR_REGISTER', payload:res.data.message})
                }else{
                    dispatch({type:'SUCCESS_REGISTER'})
                }
            }).catch(err=>{
                console.log(err)
            })
        }
    }
}

export const UserLogin=({username, password})=>{
    return (dispatch)=>{
        if(username===''||password===''){
            dispatch({type:'LOGIN_ERROR', payload:'Pastikan semua terisi'})
        }else{
            console.log('masuk sini')
            Axios.get(`${APIURL}auth/login`,{
                params:{
                    username,
                    password
                }
            }).then(res =>{
                console.log(res.data.result)
                if(res.data.status !== 'error'){
                    dispatch({type:'LOGIN_SUCCESS', payload:res.data.result})
                    localStorage.setItem('username', res.data.result.username)
                    localStorage.setItem('id', res.data.result.id)
                }else{
                    dispatch({type: 'LOGIN_ERROR', payload: res.data.message})
                }
            })
        }
    }
}

export const reLogin=res=>{
    return dispatch=>{
        dispatch({type: 'LOGIN_SUCCESS', payload:res})
    }
}

export const LogError=()=>{
    return(dispatch)=>{
        dispatch({type:'LOGIN_ERROR', payload:''})
    }
}