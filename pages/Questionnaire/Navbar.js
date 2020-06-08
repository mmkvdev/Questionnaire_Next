import Link from 'next/link';

const Navbar = () => {
    return (
        <div data-test="questionList">
            <nav className="navbarContainer">
                <ul className="unlistWrapper">
                    <li className="listWrapper">
                        <Link href="/Questionnaire/QuestionBox">
                            <a>QuestionBox</a>
                        </Link>
                    </li>
                    <li className="listWrapper">
                        <Link href="/Questionnaire/EditQuestion">
                            <a>EditQuestion</a>
                        </Link>
                    </li>
                    <li className="listWrapper">
                        <Link href="/Questionnaire/QuestionList">
                            <a>QuestionList</a>
                        </Link>
                    </li>
                </ul>
                <style jsx>{`
                    .listWrapper {
                        float: left;
                    },
                    .linkWrapper {
                        display: block;
                        text-align: center;
                        padding: 14px;
                        text-decoration: none;
                    },
                    .unlistWrapper {
                        list-style-type: none;
                        overflow: hidden;
                        background-color: #ffff12;
                    }
                `}</style>
            </nav>
        </div>
    );
};

export default Navbar;