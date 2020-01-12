import Axios from 'axios'
import {APIURL} from '../../support/url'

export const LoginSuccesAction=(datauser)=>{
    return{
        type:'LOGIN_SUCCESS',
        payload:datauser
    }
}

export const LogoutSuccessAction=()=>{
    return{
        type:'LOGOUT_SUCCESS'
    }
}