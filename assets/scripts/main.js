let testScore = 0;
let currentQuestion = 0;

function initQuestions() {
	document.getElementById('js-totalQuestionsCount').innerText = questions.length;
	setNextQuestionData();
}

function setNextQuestionData() {
	document.getElementById('js-questionText').innerText = questions[currentQuestion].questionText;
	document.getElementById('js-questionNumber').innerText = currentQuestion + 1;
	document.getElementById('js-questionAnswers').innerHTML = prepareAnswersMarkdown(questions[currentQuestion].answers);
	document.getElementById('js-questionPhoto').src = questions[currentQuestion].image;
}

function prepareAnswersMarkdown(answers) {
	let result = '';

	answers.forEach(answer => {
		result += '<li><button class="button" onclick="onAnswerChoose(' + answer.value + ')">' + answer.answerText + '</button></li>';
	})

	return result;
}

function onAnswerChoose(chosenValue) {
	testScore += chosenValue;
	currentQuestion++;

	if (currentQuestion === questions.length) {
		showTestResults();
	} else {
		setNextQuestionData()
	}
}

function showTestResults() {
	document.getElementById('js-question').classList.add('-hidden');
	document.getElementById('js-result').classList.remove('-hidden');

	let resultKey = '';

	if (testScore < 0) {
		resultKey = 'Petrov'
	} else if (testScore >= 0 && testScore < 7) {
		resultKey = 'Ilin'
	} else if (testScore >= 7 && testScore < 12) {
		resultKey = 'Vasilyev'
	} else if (testScore >= 12 && testScore < 17) {
		resultKey = 'Baranov'
	} else if (testScore >= 17 && testScore < 20) {
		resultKey = 'Turov'
	} else if (testScore >= 20) {
		resultKey = 'bestSupporter'
	}

	document.getElementById('js-resultTitle').innerText = resultData[resultKey].title;
	document.getElementById('js-resultDesc').innerText = resultData[resultKey].desc;
 	document.getElementById('js-resultImg').src = resultData[resultKey].image;

 	document.getElementById('js-resultShare').innerHTML = VK.Share.button(
			{
				url: 'https://egorvelv.github.io/Vector-Test/',
				title: 'Ничего себе! Да я же: ' + resultData[resultKey].title + '! Пройди тест и тоже узнай, кто ты!',
				image: 'https://egorvelv.github.io/Vector-Test/' + resultData[resultKey].image,
				noparse: true,
			},
			{
				type: 'round_nocount',
				text: 'Поделиться у себя!',
			}
		)
}

function restartTest() {
	currentQuestion = 0;
	testScore = 0;
	document.getElementById('js-question').classList.remove('-hidden');
	document.getElementById('js-result').classList.add('-hidden');
	initQuestions();
}

function startTest() {
	document.getElementById('js-start').classList.add('-hidden');
	document.getElementById('js-question').classList.remove('-hidden');
	initQuestions();
}