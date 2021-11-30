const ADD_ANSWER = "quiz/ADD_ANSWER";

const initialState = {
    name: 'Duckgugong',
    quizList: [
        { question: "일단 1번", answer: "O" },
        { question: "일단 2번", answer: "O" },
        { question: "일단 3번", answer: "O" },
        { question: "일단 4번", answer: "O" },
        { question: "일단 5번", answer: "O"}
    ],
    answer: [

    ]
};

export const addAnswer = (answer) => {
    return {type: ADD_ANSWER, answer}
}

export default function reducer(state = initialState, action = {}) {
    switch (action.type) {
        // do reducer stuff
        case "quiz/ADD_ANSWER":
            const new_answer = [...state.answer, action.answer]
            return {...state, answer: new_answer};

        default:
            return state;
    }
}