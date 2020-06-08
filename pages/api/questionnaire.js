export default (req, res) => {
    res.json(
        {
            "questions": [
                {
                    "id": 1,
                    "content": "What is the Capital of India?"
                },
                {
                    "id": 2,
                    "content": "Who is the Founder of PyTorch?"
                },
                {
                    "id": 3,
                    "content": "What is the net worth of Michael Jordan?"
                }
            ]
        })
}