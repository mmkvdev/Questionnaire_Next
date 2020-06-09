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
            <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
            <code className="codeContainer">UserProfile: </code>
            {userIterator}
            <style jsx>{`
                .userProfileContainer {
                    font-size: 200;
                    text-align: center;
                    font-size: 24px;
                    margin: 100px;
                    padding: 30px;
                    background-color: #0379ae
                },
                .codeContainer {
                    font-family: 'Metal Mania', cursive;
                }
            `}</style>
        </div>
    );
}

export default UserProfile;