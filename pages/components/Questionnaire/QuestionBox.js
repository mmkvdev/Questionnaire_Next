import { useEffect, useState } from 'react';
import AddThunkQuestion from '../../../redux/actionCreators/Questionnaire/AddThunkQuestion';
import { useSelector, useDispatch } from 'react-redux';
import Layout from './Layout';

const QuestionBox = () => {
    const dispatch = useDispatch();
    const [questions, setQuestions] = useState([]);
    useEffect(() => dispatch(AddThunkQuestion()), [dispatch])
    const questionsSelector = useSelector(state => state.QuestionnaireReducer.questions);

    const thunkDispatcher = () => {
        const questionList =
            questionsSelector.map(question => {
                return (
                    <div>
                        <p className="questionWrapper"
                            key={question.id}>
                            {question.content}
                        </p>
                        <style jsx>{`
                        .questionWrapper {
                            margin: 250px;
                            width: 500px;
                            border-radius:4px; 
                            font-size: 24px;
                            border: 5px solid red;
                        },
                    `}</style>

                    </div>
                );
            });

        let displayRandomQuestion = questionList[Math.floor(Math.random() * questionList.length)];
        setQuestions(displayRandomQuestion);
    }

    return (
        <Layout>
            <div className="questionContainer">
                {questions}
                <div className="containerWrapper">
                    <button className="buttonWrapper" onClick={thunkDispatcher}>Ask Me A Question</button>
                </div>
                <style jsx>{`
                .questionContainer {
                    height: 5px;
                    position: relative;
                    width: 500px;
                },
                .containerWrapper {
                    margin: 10;
                    position: absolute;
                    top: 5%;
                },
                .buttonWrapper {
                    width: 300px;
                    margin: 100px;
                    text-align: center;
                    padding: 5px;
                    border-radius: 2px;
                    font-family: 'Metal Mania', cursive;
                }
            `}</style>
            </div>
        </Layout>
    )
}

export default QuestionBox;
