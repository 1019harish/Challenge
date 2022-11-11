const initialState = {
    status : false,
    user : []
}


const handleStatus = (state = initialState , action) => {
        const _creds = action.payload
        const _actyion_type = action._actyion_type

        switch(_actyion_type){
            case "LOGIN"    :
                if(state.status === false){
                    let userObj = {
                        username : _creds.username ,
                        password : _creds.Password
                    }
                    state.user.push(userObj)
                    state.status = true
                    return {
                        ...state
                    }
                }
                    break;
                default : 
                            return state
        }

    }

    export default handleStatus;
