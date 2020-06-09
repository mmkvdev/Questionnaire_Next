import Link from 'next/link';

const Navbar = () => {
    return (
        <div data-test="questionList">
            <link href="https://fonts.googleapis.com/css2?family=Metal+Mania&display=swap" rel="stylesheet" />
            <nav className="navbarContainer">
                <ul className="unlistWrapper">
                    <li className="listWrapper">
                        <Link href="/components/Questionnaire/QuestionBox">
                            <a className="contentContainer">QuestionBox</a>
                        </Link>
                    </li>
                    <li className="listWrapper">
                        <Link href="/components/Questionnaire/EditQuestion">
                            <a className="contentContainer">EditQuestion</a>
                        </Link>
                    </li>
                    <li className="listWrapper">
                        <Link href="/components/Questionnaire/QuestionList">
                            <a className="contentContainer">QuestionList</a>
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
                        background-color: #8f45a8 ;
                    },
                    .contentContainer {
                        color: ghostwhite;
                        font-family: 'Metal Mania', cursive;
                    }
                `}</style>
            </nav>
        </div>
    );
};

export default Navbar;