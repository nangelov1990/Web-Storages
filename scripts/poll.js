var rightAnswers = {
	0: 4,
	1: 3,
	2: 2
};

function checkRightAsnwers () {
	var rightAnswersCount = 0,
		percentage;

	for (var i = 0; i < $('select').length; i++) {
		if ($($('select')[i]).val() == rightAnswers[i]) {
			$($('select')[i]).css("background-color", "lightgreen");
			rightAnswersCount += 1;
		} else {
			$($('select')[i]).css("background-color", "red");
		}
	}

	percentage = ((rightAnswersCount / $('select').length) * 100) + '%';

	$('#mark').html('Mark: ' + percentage);
};

$('select').change(function() {
	var question = $('label[for="' + this.id + '"]').text(),
		answer = $(this.selectedOptions).text(),
		idOfQuestion = this.id,
		valueOfAnswer = $(this.selectedOptions).val();

	localStorage.setItem(idOfQuestion, valueOfAnswer);
});

(function () {
	var storedAnswerValue;

	for (var i = 0; i < $('select').length; i++) {
		if (localStorage.key(i) !== null) {
			storedAnswerValue = localStorage.getItem(localStorage.key(i));
			$($('select')[i]).val(storedAnswerValue);
		};
	};
}())