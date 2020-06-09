export const editQuestions = (id, data) => {
    // console.log(id, data)
    return {
        type: 'EDIT_QUESTIONS',
        payload: { id, data }
    }
}
