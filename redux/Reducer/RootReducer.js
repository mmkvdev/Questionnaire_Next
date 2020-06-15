import { combineReducers } from 'redux';
import UserReducer from './UserProfileReducer';
import QuestionnaireReducer from './QuestionnaireReducer';

const ReduxReducer = combineReducers({
    UserReducer,
    QuestionnaireReducer
})

export default ReduxReducer;