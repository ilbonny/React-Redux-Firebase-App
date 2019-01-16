
const initState = {
    authError : null,
    authMessage : null
}

const authReducer = (state = initState, action) =>{
    switch (action.type){
        case 'LOGIN_SUCCESS':
            console.log('login success');
            return {
                ...state,
                authError : null,
                authMessage : null
            } 
        case 'LOGIN_ERROR' :
            console.log('login error', action.err); 
            return {
                ...state,
                authError : 'Login failed',
                authMessage : action.err.message
            } 
        case 'SIGNOUT_SUCCESS' :
            console.log('signout success'); 
            return state;   
        case 'SIGNUP_SUCCESS' :
            console.log('signup success'); 
            return {
                ...state,
                authError : null,
                authMessage : null
            };     
        case 'SIGNUP_ERROR' :
            console.log('signup success'); 
            return {
                ...state,
                authError : action.err,
                authMessage : action.message
            };    
        default:
            return state;
    }
}

export default authReducer