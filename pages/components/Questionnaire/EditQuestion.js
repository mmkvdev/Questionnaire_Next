import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { editQuestions } from '../../../redux/actionCreators/Questionnaire/EditQuestion';
import Router, { useRouter } from 'next/router'
import Layout from './Layout';

const EditQuestion = (props) => {
    const [enteredValue, setOutputValue] = useState('');
    const router = useRouter();
    const { button_id, button_content } = router.query
    const dispatch = useDispatch();
    const handleEdit = (enteredText) => {
        setOutputValue(enteredText.target.value);
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        Router.push('/components/Questionnaire/QuestionList');
    }
    const handleSubmitWrap = () => dispatch(editQuestions(button_id, enteredValue));

    return (
        <Layout>
            <div className="questionEdit">
                <form className="formWrapper" onSubmit={handleSubmit}>
                    <input className="inputWrapper" type="text"
                        placeholder={button_content}
                        onChange={handleEdit}
                        value={enteredValue}>
                    </input>
                    <button className="buttonEditWrapper" onClick={handleSubmitWrap}>Save</button>
                </form>
                <style jsx>{`
                .formWrapper {
                    width: 1000px;
                    height: 30px;
                    margin-top: 10px;
                },
                .inputWrapper {
                    width: 1000px;
                    margin: 30px;
                    text-align: center;
                    padding: 20px;
                    border-radius: 2px;
                    font-family: 'Metal Mania', cursive;
                },
                .buttonEditWrapper {
                    width: 500px;
                    margin: 10px;
                    text-align: center;
                    padding: 10px;
                    border-radius: 2px;
                    font-family: 'Metal Mania', cursive;
                }
            `}</style>
            </div>
        </Layout>
    );
};


export default EditQuestion;