const initialState = {
    questions: []
};

const QuestionnaireReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'ADD_QUESTIONS':
            return {
                ...state,
                questions: action.payload.questions
            }

        case 'EDIT_QUESTIONS':
            {
                let newQuestions = state.questions.map((question) => {
                    if (question.id == action.payload.id) {
                        question.content = action.payload.data
                    }
                    return question
                })

                return {
                    ...state,
                    questions: newQuestions
                }
            }
        default:
            return state;
    }
}

export default QuestionnaireReducer;