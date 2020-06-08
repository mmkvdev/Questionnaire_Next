const QuestionBox = ({ data }) => {
    console.log(data)
    return (
        <div>QuestionBox</div>
    );
}

export async function getStaticProps() {
    const res = await fetch('http://localhost:3000/api/questionnaire')
    const data = await res.json()

    return {
        props: {
            data
        }
    }
}
export default QuestionBox;