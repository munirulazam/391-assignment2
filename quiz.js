const questions = [
    {
        question: "What is the standard room temperature in Kelvin?",
        answers: { A: "98 K", B: "198K", C: "273K" },
        correct: "A"
    },
    {
        question: "How many ounces in a pound?",
        answers: { A: "10", B: "12", C: "16" },
        correct: "C"
    },
    {
        question: "Who was the first person to set foot on the moon?",
        answers: { A: "Buzz Aldrin", B: "Michael Collins", C: "Neil Armstrong" },
        correct: "C"
    },
    {
        question: "Who holds the Major League Baseball record for most home runs in a season?",
        answers: { A: "Barry Bonds", B: "Babe Ruth", C: "Hank Aaron" },
        correct: "A"
    },
    {
        question: "In what year was the University of Liverpool founded?",
        answers: { A: "1250", B: "1881", C: "1900" },
        correct: "B"
    },
    {
        question: "What is the largest planet in our solar system?",
        answers: { A: "Earth", B: "Jupiter", C: "Saturn" },
        correct: "B"
    },
    {
        question: "What is the chemical symbol for gold?",
        answers: { A: "Au", B: "Ag", C: "Pt" },
        correct: "A"
    },
    {
        question: "Who wrote 'To Kill a Mockingbird'?",
        answers: { A: "Harper Lee", B: "Mark Twain", C: "F. Scott Fitzgerald" },
        correct: "A"
    },
    {
        question: "What is the square root of 64?",
        answers: { A: "6", B: "8", C: "10" },
        correct: "B"
    },
    {
        question: "Which planet is known as the Red Planet?",
        answers: { A: "Mars", B: "Venus", C: "Jupiter" },
        correct: "A"
    }
];

let selectedQuestions = [];
let userAnswers = [];

function startQuiz() {
    const numQuestions = document.getElementById('num-questions').value;
    const selectedQuestionMap = {};
    userAnswers = [];
    
    while (Object.keys(selectedQuestionMap).length < numQuestions) {
        const randomIndex = Math.floor(Math.random() * questions.length);
        
        if (!selectedQuestionMap[randomIndex]) {
            selectedQuestionMap[randomIndex] = questions[randomIndex];
        }
    }
    
    selectedQuestions = Object.values(selectedQuestionMap);
    displayQuestions();
    // console.log(selectedQuestions);
}


function displayQuestions() {
    const questionContainer = document.getElementById('question-container');
    questionContainer.innerHTML = '';
    selectedQuestions.forEach((q, index) => {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question');
        questionDiv.innerHTML = `
            <p>${q.question}</p>
            <input type="radio" name="question${index}" value="A"> A: ${q.answers.A}<br>
            <input type="radio" name="question${index}" value="B"> B: ${q.answers.B}<br>
            <input type="radio" name="question${index}" value="C"> C: ${q.answers.C}
        `;
        questionContainer.appendChild(questionDiv);
    });
    document.getElementById('quiz-setup').style.display = 'none';
    document.getElementById('quiz-container').style.display = 'block';
}

function submitQuiz() {
    selectedQuestions.forEach((q, index) => {
        const userAnswer = document.querySelector(`input[name="question${index}"]:checked`);
        // console.log("before checking null");
        // console.log(userAnswer);
        userAnswers.push(userAnswer ? userAnswer.value : null);
        // console.log("after checking null");
    });
    displayResults();
}

function displayResults() {
    let correctCount = 0;
    const resultContainer = document.getElementById('result-container');
    resultContainer.innerHTML = '';
    selectedQuestions.forEach((q, index) => {
        const isCorrect = userAnswers[index] === q.correct;
        if (isCorrect) correctCount++;
        resultContainer.innerHTML += `
            <p>${q.question}</p>
            <p>You guessed ${userAnswers[index]}: ${isCorrect ? 'CORRECT' : `INCORRECT: the correct answer is ${q.correct}`}</p>
        `;
    });
    const score = Math.round((correctCount / selectedQuestions.length) * 100);
    resultContainer.innerHTML += `<p>You correctly answered ${correctCount} out of ${selectedQuestions.length} questions correctly (${score}%).</p>`;
    document.getElementById('quiz-container').style.display = 'none';
    resultContainer.style.display = 'block';
}
