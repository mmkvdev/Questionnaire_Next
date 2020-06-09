import { useSelector } from 'react-redux';
import Router from 'next/router';
import Layout from './Layout';

const QuestionList = () => {
    const questionList = useSelector(state => state.QuestionnaireReducer.questions);
    const disQuestions = questionList.map(question => {
        return (
            <div>
                <p className="disQuestionListWrapper" key={question.id}>{question.content}
                    <button className="buttonListContainer"
                        onClick={() => Router.push({
                            pathname: '/components/Questionnaire/EditQuestion/',
                            query: {
                                button_id: question.id,
                                button_content: question.content
                            }
                        })}>Edit</button>
                </p>
                <style jsx>{`
                    .disQuestionListWrapper {
                        width: 800px;
                        height: 10px;
                        margin-top: 10px;
                        padding: 5px;
                        font-family: 'Metal Mania', cursive;
                    },
                    .buttonListContainer {
                        width: 600px;
                        margin: 100px;
                        text-align: center;
                        padding: 5px;
                        border-radius: 2px;
                        font-family: 'Metal Mania', cursive;
                    }
                `}</style>
            </div>
        );
    });
    return (
        <Layout>
            <div className="questionList">
                {disQuestions}
            </div>
        </Layout>
    );
};

export default QuestionList;