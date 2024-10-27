const questions = [
    {
        question: "What is the capital of France?",
        choices: ["London", "Paris", "Berlin", "Madrid"],
        correctAnswer: 1
    },
    // Add more questions here
    {
        question: "What is the largest country in the world by land area?",
        choices: ["China", "Canada", "Russia", "United States"],
        correctAnswer: 2
    },
    {
        question: "What is the highest mountain in the world?",
        choices: ["Mount Everest", "K2", "Kangchenjunga", "Lhotse"],
        correctAnswer: 0
    },
    {
        question: "Which planet is known as the Red Planet?",
        choices: ["Saturn", "Venus", "Jupiter", "Mars"],
        correctAnswer: 3
    },
    {
        question: "What is the largest ocean on Earth?",
        choices: ["Pacific Ocean", "Atlantic Ocean", "Indian Ocean", "Arctic Ocean"],
        correctAnswer: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        choices: ["Cu", "Ag", "Au", "Fe"],
        correctAnswer: 2
    }
];

const questionElement = document.getElementById("question");
const choicesElement = document.getElementById("choices");
const submitButton = document.getElementById("submit");
const resultElement = document.getElementById("result");

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const currentQuestion = questions[currentQuestionIndex];
    questionElement.textContent = currentQuestion.question;

    choicesElement.innerHTML = "";
    currentQuestion.choices.forEach((choice, index) => {
        const li = document.createElement("li");
        const input = document.createElement("input");
        input.type = "radio";
        input.name = "choice";
        input.value = index;
        const label = document.createElement("label");
        label.textContent = choice;
        li.appendChild(input);
        li.appendChild(label);
        choicesElement.appendChild(li);
    });
}

function checkAnswer() {
    const selectedChoice = document.querySelector('input[name="choice"]:checked');
    if (selectedChoice) {
        const userAnswer = parseInt(selectedChoice.value);
        if (userAnswer === questions[currentQuestionIndex].correctAnswer) {
            score++;
        }

        currentQuestionIndex++;

        if (currentQuestionIndex < questions.length) {
            displayQuestion();
        } else {
            showResult();
        }
    }
}

function showResult() {
    resultElement.textContent = `You scored ${score} out of ${questions.length}`;
    submitButton.textContent = "Retake Quiz";
    submitButton.onclick = retakeQuiz;
}

function retakeQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    displayQuestion();
    submitButton.textContent = "Submit";
    resultElement.textContent = "";
}

displayQuestion();
submitButton.addEventListener("click", checkAnswer);