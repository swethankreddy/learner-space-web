document.addEventListener('DOMContentLoaded', function() {
    const quizContainer = document.getElementById('quiz-container');
    const quizQuestion = document.createElement('p');
    const quizAnswer = document.createElement('input');
    const quizButton = document.createElement('button');
    const result = document.createElement('p');

    quizQuestion.textContent = 'What is the name of the default character in Subway Surfers?';
    quizButton.textContent = 'Submit';

    quizContainer.appendChild(quizQuestion);
    quizContainer.appendChild(quizAnswer);
    quizContainer.appendChild(quizButton);
    quizContainer.appendChild(result);

    quizButton.addEventListener('click', function() {
        if (quizAnswer.value.toLowerCase() === 'jake') {
            result.textContent = 'Correct!';
            result.style.color = 'green';
        } else {
            result.textContent = 'Try again!';
            result.style.color = 'red';
        }
    });
});
