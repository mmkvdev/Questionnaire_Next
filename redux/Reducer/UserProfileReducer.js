const initialState = {
    userdata: []
}

const UserReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'USER_DATA':
            //  console.log(action.payload.UserData)
            return {
                ...state,
                userdata: action.payload.UserData
            }
        default: 
            return state;
    }
}

export default UserReducer;