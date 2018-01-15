var currentQuestion = 0;
var score = 0;

function loadQ(currentIndex) {
	document.getElementById('question-area').textContent = questions[currentIndex].question;
	document.getElementById('opt1').textContent = questions[currentIndex].optionOne;
	document.getElementById('opt2').textContent = questions[currentIndex].optionTwo;
	document.getElementById('opt3').textContent = questions[currentIndex].optionThree;
	document.getElementById('opt4').textContent = questions[currentIndex].optionFour;

};

loadQ(currentQuestion);

function loadNextQuestion() {
	console.log('button has been pressed');

	var playerChoice = document.querySelector('input[type="radio"]:checked');

	if (!playerChoice) {
		alert('Please select one of the given choices below.');
		return;
	}

	if (playerChoice.value == questions[currentQuestion].answer) {
		score ++;
	}

	playerChoice.checked = false;

	if (currentQuestion == questions.length - 2) {
		document.getElementById('button').textContent = 'Finish';

	}

	if (currentQuestion == questions.length - 1) {
		document.getElementById('quiz-area').style.display = 'none';
		document.getElementById('final-area').style.display = '';
		document.getElementById('final-area').textContent = "You answered " + score + " questions correctly out of a total " + questions.length + " questions." ;
		return;

	}


	currentQuestion ++;

	loadQ(currentQuestion);
	

};