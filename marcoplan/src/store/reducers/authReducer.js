
const initState = {
    authError : null,
    authMessage : null
}

const authReducer = (state = initState, action) =>{
    switch (action.type){
        case 'LOGIN_SUCCESS':            
            return {
                ...state,
                authError : null,
                authMessage : null
            } 
        case 'LOGIN_ERROR' :            
            return {
                ...state,
                authError : 'Login failed',
                authMessage : action.err.message
            } 
        case 'SIGNOUT_SUCCESS' :            
            return state;   
        case 'SIGNUP_SUCCESS' :            
            return {
                ...state,
                authError : null,
                authMessage : null
            };     
        case 'SIGNUP_ERROR' :
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