import { addQuestions } from './AddQuestion';

const AddThunkQuestion = () => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/questionnaire')
            .then(res => res.json())
            .then(res => { dispatch(addQuestions(res)) })
    };
}

export default AddThunkQuestion;