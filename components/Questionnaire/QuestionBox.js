import { useEffect, useState } from 'react';
import AddThunkQuestion from '../../../redux/actionCreators/Questionnaire/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';

const QuestionBox = () => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState([]);
    useEffect(() => dispatch(AddThunkQuestion()), [dispatch])
    const questionsSelector = useSelector(state => state.questions);

    console.table(questionsSelector);

    /*const thunkDispatcher = () => {
        const questionList =
            questionsSelector.map(question => {
                return (
                    <div>
                        <p className={questionWrapper}
                            key={question.id}>
                            {question.content}
                        </p>
                        <style jsx>{`
                        .questionWrapper {
                            display: flex;
                            justify-content: center;
                            align-items: center;
                            border-radius:4px; 
                            font-size: 24px;
                            border: 5px solid black;
                        },
                    `}</style>

                    </div>
                );
            });

        let displayRandomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        setQuestions(displayRandomQuestion);
    }*/

    return (
        <div className="questionContainer">
            {questions}
            <div className="containerWrapper">
                <button className="buttonWrapper" onClick={thunkDispatcher}>Ask Me A Question</button>
            </div>
            <style jsx>{`
                .containerWrapper {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    margin: 70px;
                },
                .buttonWrapper {
                    width: 300px;
                    margin: 100px;
                    text-align: center;
                    padding: 10px;
                    border-radius: 2px;
                }
            `}</style>
        </div>
    )
}

export default QuestionBox;
