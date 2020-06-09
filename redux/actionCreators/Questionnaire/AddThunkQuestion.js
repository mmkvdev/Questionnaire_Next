import { addQuestions } from './AddQuestion';

const AddThunkQuestion = () => {
    return (dispatch) => {
        fetch('/api/questionnaire')
            .then(res => res.json())
            .then(res => { dispatch(addQuestions(res)) })
    };
}

export default AddThunkQuestion;