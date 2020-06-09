export const editQuestions = (id, data) => {
    return {
        type: 'EDIT_QUESTIONS',
        payload: { id, data }
    }
}
