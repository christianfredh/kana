const shuffledCharacters = shuffle(characters);

const containers = document.querySelectorAll('.js_characters');

[].forEach.call(containers, function(container) {

    const questionKey = container.getAttribute('data-question-key');
    const answerKey = container.getAttribute('data-answer-key');

    shuffledCharacters.forEach(function(character) {

        const box = `
        <div class="character-box">
            <div class="question">${questionKey && character[questionKey]}</div>
            <div class="answer">${answerKey && character[answerKey] || ''}</div>
        </div>`;

        container.innerHTML += box;

    });
});