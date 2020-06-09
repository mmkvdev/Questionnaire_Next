import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import UserThunk from '../../../redux/actionCreators/UserProfile/UserThunk';

const UserProfile = () => {
    const dispatch = useDispatch();
    useEffect(() => dispatch(UserThunk()), [dispatch])
    const userdataSelector = useSelector(state => state.UserReducer.userdata);

    const userIterator = userdataSelector.map((user) => {
        return (
            <div key={user.Name}>
                <h1>{user.Name}</h1>
                <h2>{user.Designation}</h2>
                <h3>{user.Location}</h3>
            </div>
        );
    })
    return (
        <div className="userProfileContainer">
            <code>UserProfile: </code>
            {userIterator}
            <style jsx>{`
                .userProfileContainer {
                    font-size: 200,
                }
            `}</style>
        </div>
    );
}

export default UserProfile;