import Router from 'next/router'

const HomePage = () => {
    return (
        <div className="homeWrapperContainer">
            <code className="codeContainer">Welcome to Questionnaire Website</code>
            <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
            <div className="buttonWrapperContainer">
                <button title="QUESTIONNAIRE" onClick={() => Router.push('/components/Questionnaire/QuestionnaireHome')}>QUESTIONNAIRE</button>
                <button title="USER PROFILE" onClick={() => Router.push('/components/UserProfile/UserProfile')}>UserProfile</button>
            </div>
            <style jsx>{`
                .codeContainer {
                    font-family: 'Metal Mania', cursive;
                    font-size: 50px;
                }
                .homeWrapperContainer {
                    width: '80%';
                    margin: 150px;
                    height: 20px;
                    text-align: center;
                    padding: 20px;
                    border-radius: 2px;
                    background-color: #729aa2;
                },
                .buttonWrapperContainer {
                    width: '30%';
                    padding: 10px;
                    border-radius: 2px;
                    margin: 20px;
                    font-family: 'Metal Mania', cursive;
                }
            `}
            </style>
        </div>
    );
}

export default HomePage;