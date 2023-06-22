'use strict';
let secretNumber=Math.trunc(Math.random()*20)+1;
let score=20;
let highscore=0;
document.querySelector('.number').textContent=secretNumber;
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent="Correct";
document.querySelector('.check').addEventListener('click',function () {
    const guess = Number(document.querySelector('.guess').value);
    console.log(guess, typeof guess);
    if (!guess) {
        document.querySelector('.message').textContent = "NO NUMBER !!"
    } else if (guess === secretNumber) {
        document.querySelector('.message').textContent = "Correct Number !!!!";
        score = score + 10;
        document.querySelector('.score').textContent = score;
        document.querySelector('body').style.backgroundColor= "Green";
        document.querySelector('.number').style.width = "30rem";
        if(score>highscore){
            highscore=score;
            document.querySelector('.highscore').textContent=highscore;
        }
    } else if (guess > secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "TOO HIGH !!";
            score = score - 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = "RED";
        } else {
            document.querySelector('.message').textContent = "You Lost";
            document.querySelector('.score').textContent = 0;
        }

    } else if (guess < secretNumber) {
        if (score > 1) {
            document.querySelector('.message').textContent = "TOO L0W !!";
            score = score - 1;
            document.querySelector('.score').textContent = score;
            document.querySelector('body').style.backgroundColor = "RED";
        } else {
            document.querySelector('.message').textContent = "You Lost";
            document.querySelector('.score').textContent = 0;
        }
    }

});
document.querySelector('.again').addEventListener('click',function () {
score=20;
secretNumber=Math.trunc(Math.random()*20)+1;

document.querySelector('.message').textContent="Start Guessing !!!";
document.querySelector('.score').textContent=score;
document.querySelector('.number').textContent="?";
document.querySelector('.guess').value='';
document.querySelector('body').style.backgroundColor="#222";
document.querySelector('.number'.style.width="15rem");

});