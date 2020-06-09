import { useSelector } from 'react-redux';
import Router from 'next/router';
import Layout from './Layout';
// import { useHistory } from 'react-router-dom';

/*
    export const disQuestionListWrapper = css`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 14px 100px;
    `;

    export const buttonListContainer = css`
    width: 100px;
    margin: 10px;
    text-align: center;
    padding: 10px;
    border-radius: 2px;
    `;
*/

const QuestionList = () => {
    const questionList = useSelector(state => state.QuestionnaireReducer.questions);
    // console.table(questionList.questions)
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
                    },
                    .buttonListContainer {
                        width: 600px;
                        margin: 100px;
                        text-align: center;
                        padding: 5px;
                        border-radius: 2px;
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