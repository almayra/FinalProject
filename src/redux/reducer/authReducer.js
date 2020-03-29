const INITIAL_STATE={
    username:'',
    password:'',
    login:false,
    error:'',
    loading:false,
    register:false,
    rolename:''
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SUCCESS_REGISTER':
            return {...state, ...action.payload, register:true, error:''}
        case 'ERROR_REGISTER':
            return {...state, error:action.payload}
        case 'REGIS_LOADING':
            return {...state,loading:true,error:''}
        case 'LOGIN_SUCCESS':
            return {...state,...action.payload, login:true}
        case 'LOGIN_ERROR':
            return {...state, error:action.payload}
        case 'USER_LOGOUT':
            return {...INITIAL_STATE}
        default:
            return state
    }
}