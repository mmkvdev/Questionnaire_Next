import { UserAction } from './UserAction';

const UserThunk = () => {
    return (dispatch) => {
        fetch('/api/userprofile')
            .then(res => res.json())
            .then(res => { dispatch(UserAction(res)) })
    }
}

export default UserThunk;