import Router from 'next/router'

const HomePage = () => {
    return (
        <div className="homeWrapperContainer">
            <code>Welcome to Questionnaire Website</code>
            <div className="buttonWrapperContainer">
                <button title="QUESTIONNAIRE" onClick={() => Router.push('/Questionnaire/QuestionBox')}>QUESTIONNAIRE</button>
                <button title="USER PROFILE" onClick={() => Router.push('/UserProfile/UserProfile')}>UserProfile</button>
            </div>
            <style jsx>{`
                .homeWrapperContainer {
                    width: '80%';
                    margin: 20px;
                    text-align: center;
                    padding: 10px;
                    border-radius: 2px;
                },
                .buttonWrapperContainer {
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    width: '10%';
                    padding-left: 10px;
                    border-radius: 2px;
                    margin-left: 10px;
                }
            `}
            </style>
        </div>
    );
}

export default HomePage;