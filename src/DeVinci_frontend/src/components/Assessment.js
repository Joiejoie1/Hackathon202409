const assessments = {
    'United Nations Convention Against Corruption': [
        { question: "What year was UNCAC adopted?", options: ["2003", "2005", "2010"], correct: 0 },
        { question: "What is the primary focus of UNCAC?", options: ["Corruption", "Education", "Healthcare"], correct: 0 },
        // Add more questions here
    ]
};

export function startQuiz(topic) {
    const quiz = assessments[topic];
    const container = document.getElementById('assessment');
    container.innerHTML = '';  // Clear previous content
    quiz.forEach((question, index) => {
        const questionElement = document.createElement('div');
        questionElement.innerHTML = `
            <h3>${question.question}</h3>
            <ul>
                ${question.options.map((option, i) => `<li>${option}</li>`).join('')}
            </ul>
        `;
        container.appendChild(questionElement);
        document.querySelectorAll('li').forEach((li, i) => {
            li.addEventListener('click', () => {
                storeQuizResult(index, i === question.correct);
            });
        });
    });
}

async function storeQuizResult(quizIndex, isCorrect) {
    const fullName = document.getElementById('fullName').value;
    await DeVinci_backend.storeQuizResult(fullName, quizIndex, isCorrect);
}
