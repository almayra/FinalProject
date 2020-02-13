const INITIAL_STATE={
    username:'',
    password:'',
    login:false,
    error:'',
    loading:false,
    register:false,
    role:''
}

export default (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SUCCESS_REGISTER':
            return {...state, ...action.payload, register:true, error:''}
        case 'ERROR_REGISTER':
            return {...state,error:action.payload}
        case 'REGIS_LOADING':
            return {...state,loading:true,error:''}
        default:
            return state
    }
}