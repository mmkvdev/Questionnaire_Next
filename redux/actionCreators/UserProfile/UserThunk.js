import { UserAction } from './UserAction';

const UserThunk = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/userprofile')
            .then(res => res.json())
            .then(res => { dispatch(UserAction(res)) })
    }
}

export default UserThunk;