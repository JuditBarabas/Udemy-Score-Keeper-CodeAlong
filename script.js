const p1 = {
    score: 0,
    button: document.querySelector('#p1Button'),
    display: document.querySelector('#p1Displayed')
};

const p2 = {
    score: 0,
    button: document.querySelector('#p2Button'),
    display: document.querySelector('#p2Displayed')
};

const resetButton = document.querySelector('#reset');
const winScoreSelect = document.querySelector('#winScore');

let maxScore = 3;
let isGameOver = false;

function changeScores(player, opponent) {
    if (!isGameOver) {
        player.score += 1;
        if(player.score === maxScore) {
            isGameOver = true;
            player.display.classList.add('has-text-success');
            opponent.display.classList.add('has-text-danger');
            player.button.disabled = true;
            opponent.button.disabled = true;
        }
        player.display.textContent = player.score;
    }
}

p1.button.addEventListener('click', function () {
    changeScores(p1, p2);
});

p2.button.addEventListener('click', function () {
    changeScores(p2, p1);
});

winScoreSelect.addEventListener('change', function() {
    maxScore = parseInt(this.value);
    reset();
});

resetButton.addEventListener('click', reset);

function reset () {
    isGameOver = false;
    /*p1.score = 0;
    p2.score = 0;
    p2.display.textContent = p2.score; // could be just 0
    p1.display.textContent = p1.score; // could be just 0
    p1.display.classList.remove('has-text-success', 'has-text-danger');
    p2.displayed.classList.remove('has-text-success', 'has-text-danger');
    p1.button.disabled = false;
    p2.button.disabled = false;*/
    for (let p of [p1, p2]) {
        p.score = 0;
        p.display.textContent = p.score; //or 0
        p.display.classList.remove('has-text-success', 'has-text-danger');
        p.button.disabled = false;
    }
}