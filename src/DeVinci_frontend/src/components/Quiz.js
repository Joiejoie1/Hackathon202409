const assessments = { 
    'United Nations Convention Against Corruption': [
        { question: "What year was UNCAC adopted?", options: ["2003", "2005", "2010"], correct: 0 },
        { question: "What is the primary focus of UNCAC?", options: ["Corruption", "Education", "Healthcare"], correct: 0 },
        // More questions...
    ]
};

export function startQuiz(topic) {
    const quiz = assessments[topic];
    quiz.forEach((question, index) => {
        displayQuestion(question, index);  // Function to display each question
    });
}

// Function to display the question
function displayQuestion(question, index) {
    const questionContainer = document.createElement('div');
    questionContainer.innerHTML = `
        <h3>${question.question}</h3>
        <ul>
            ${question.options.map((option, i) => `<li>${option}</li>`).join('')}
        </ul>
    `;
    document.getElementById('quizContainer').appendChild(questionContainer);

    // Store the result when user selects an answer
    document.querySelectorAll('li').forEach((li, i) => {
        li.addEventListener('click', () => {
            storeQuizResult(index, i === question.correct);  // Store result
        });
    });
}
