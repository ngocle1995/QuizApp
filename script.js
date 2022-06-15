const quizData = [
    {
        question: "Which city is Finland's capital city?",
        a: 'Turku',
        b: 'Tampere',
        c: 'Helsinki',
        d: 'Rovaniemi',
        correct: 'c',
    }, {
        question: 'In what year was Helsinki found?',
        a: '1850',
        b: '1750',
        c: '1650',
        d: '1550',
        correct: 'd',
    }, {
        question: 'Whose found the city of Helsinki?',
        a: 'King Gustavus Vasa of Sweden',
        b: 'Ivan the Terrible, Grand Prince of Moscow',
        c: 'King Edward VI of England',
        d: 'Charles V Holy Roman Emperor',
        correct: 'a'
    }, {
        question: 'When did Finland became independent?',
        a: '1809',
        b: '1917',
        c: '1957',
        d: '1915',
        correct: 'b',
    }, {
        question: 'When did Finland became an EU Member State?',
        a: '1957',
        b: '1990',
        c: '1995',
        d: '1999',
        correct: 'c',
    },
];

const quiz = document.getElementById("quiz");
const answerEls = document.querySelectorAll(".answer");
const questionEl = document.getElementById("question");
const a_text = document.getElementById("a_text");
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const submitBtn = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    questionEl.innerText = currentQuizData.question;
    a_text.innerText = currentQuizData.a;
    b_text.innerText = currentQuizData.b;
    c_text.innerText = currentQuizData.c;
    d_text.innerText = currentQuizData.d;
}

function getSelected() {
    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if (answerEl.checked) {
            answer = answerEl.id;
        }
    });

    return answer;
}

function deselectAnswers() {
    answerEls.forEach((answerEl) => {
        answerEl.checked = false;
    });
}

submitBtn.addEventListener("click", () => {
    // check to see the answer
    const answer = getSelected();

    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++;
        }

        currentQuiz++;
        if (currentQuiz < quizData.length) {
            loadQuiz();
        } else {
            quiz.innerHTML = `
                <h2>You answered correctly at ${score}/${quizData.length} questions.</h2>
                
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});