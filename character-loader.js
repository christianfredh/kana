const shuffledCharacters = shuffle(characters);

const containers = document.querySelectorAll('.js_characters');

[].forEach.call(containers, function(container) {

    const questionKey = container.getAttribute('data-question-key');
    const answerKey = container.getAttribute('data-answer-key');
    const answerCount = parseInt(container.getAttribute('data-answer-count') || '1');

    const answerKeys = answerKey && answerKey.split(',') || [];

    shuffledCharacters.forEach(function(character) {

        let box = `
        <div class="character-box">
            <div class="question">${questionKey && character[questionKey]}</div>`;

        for (answerIndex = 0; answerIndex < answerCount; answerIndex++) {
            box += `<div class="answer">${answerKeys[answerIndex] && character[answerKeys[answerIndex]] || ''}</div>`;
        }

        box += `</div>`;

        container.innerHTML += box;

    });
});