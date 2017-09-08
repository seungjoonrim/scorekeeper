var p1Button = document.querySelector("#player1");
var p2Button = document.querySelector("#player2");
var p1Display = document.querySelector("#p1Display");
var p2Display = document.querySelector("#p2Display");
var p1Score = 0;
var p2Score = 0;
var winningScore = document.querySelector("#winningScore");
var winningScoreInput = document.querySelector("#winningScoreInput");
var winningScoreButton = document.querySelector("#winningScoreButton");
var resetButton = document.querySelector("#reset");
var gameOver = true;


winningScoreButton.addEventListener("click", function() {
	if (Number(winningScoreInput.value) === parseInt(winningScoreInput.value)) {
		winningScore.textContent = winningScoreInput.value;
		winningScoreInput.value = "";
		gameOver = false;
		winningScoreInput.disabled = true;
		winningScoreButton.disabled = true;
	} else {
		alert("You didn't input an integer!");
	}
});

p1Button.addEventListener("click", function() {
	if (gameOver === false && p1Score < Number(winningScore.textContent)) {
		p1Score++;
		console.log(p1Score);
		if (p1Score === Number(winningScore.textContent)) {
			gameOver = true;
			p1Display.classList.add("winner");
		}
	}
	p1Display.textContent = p1Score;
});

p2Button.addEventListener("click", function() {
	if (gameOver === false && p2Score < Number(winningScore.textContent)) {
		p2Score++;
		console.log(p2Score);
		if (p2Score === Number(winningScore.textContent)) {
			gameOver = true;
			p2Display.classList.add("winner");
		}
	}
	p2Display.textContent = p2Score;
});

resetButton.addEventListener("click", function() {
	gameOver = false;
	winningScore.textContent = "";
	p1Score = 0;
	p2Score = 0;
	p1Display.textContent = 0;
	p2Display.textContent = 0;
	p1Display.classList.remove("winner");
	p2Display.classList.remove("winner");
	winningScoreInput.disabled = false;
	winningScoreButton.disabled = false;
});

