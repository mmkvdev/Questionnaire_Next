import Router from 'next/router'
import { useEffect, useState } from 'react';

const HomePage = () => {
    const [sessionResponse, setSessionResponse] = useState({});
    useEffect(() => {
        const res = fetch('/api/user');
        if (res.ok) {
            setSessionResponse(res.json());
        }
    }, [])
    console.log(sessionResponse)
    return (
        <div className="homeWrapperContainer">
            <code className="codeContainer">Welcome to Questionnaire Website</code>
            <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
            <div className="buttonWrapperContainer">
                <button title="QUESTIONNAIRE" onClick={() => Router.push('/components/Questionnaire/QuestionnaireHome')}>QUESTIONNAIRE</button>
                <button title="USER PROFILE" onClick={() => Router.push('/components/UserProfile/UserProfile')}>UserProfile</button>
            </div>
            <a href="/api/login">Login</a>
            <a href="/api/logout">LogOut</a>
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

/*export async function getServerSideProps(context) {
    const session = await auth0.getSession(context.req);
    // console.log(session)


    return { props: { user: session?.user || null } }
}*/

HomePage.getInitialProps = async ({ req, res }) => {
    const session = await auth0.getSession(req);
    if (!session || !session.user) {
        res.writeHead(302, {
            Location: '/api/login'
        });
        res.end();
        return;
    }
    return { props: { user: session?.user } };
};

/*HomePage.getInitialProps = async ({ req, res }) => {
    if (typeof window === 'undefined') {
        const session = await auth0.getSession(req);
        if (!session || !session.user) {
            res.writeHead(302, {
                Location: '/api/login'
            });
            res.end();
            return;
        }
        return { user: session.user };
    }
};*/
export default HomePage;