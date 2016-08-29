
$(document).ready(function(){

	/*---Variables---*/
	var randomNum;
	var guessWhat;
	var guessCount;
	var userChoice;
	var found = false;

	/*---Making new Game---*/
	newGame();

	/*---Submit---*/
	$("form").submit(function(event){
		event.preventDefault();
		if (!found){
			userChoice = $('#userGuess').val();
			console.log("User Choice"+userChoice);
			clearText();
			setFocus();
			guessWhat = checkChoice(userChoice);
			if (!guessWhat) {
				 guessCount++;
				 setCount(guessCount);
				 $("ul#guessList").append("<li>"+userChoice+"</li>");
				 guessWhat = checkHotness(Math.abs(randomNum-userChoice));
			 };
		 } else {
			 setFeedback("Hey!You've aready won this game!Start a new one!");
		 };
	 	});

	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

		/*---Click-create new game---*/
		$(".new").click(function(event){
			event.preventDefault();
			newGame();
		});

		/*---Create a New Game---*/
function newGame() {
	guessWhat = true;
	guessCount = 0;
	found = false;
	$("ul#guessList li").remove();
	setFeedback("Make Your Guess!");
	setCount(guessCount);
	randomNum = giveNum();
	setFocus();
	clearText();
}
/*---Give Random Number---*/

function giveNum () {
	return Math.floor(Math.random()*100+1);
}
console.log(giveNum());

/*---Set focus on the inputbox---*/
function setFocus() {
	document.getElementById("userGuess").focus();
}
/*---Clear text box---*/
function clearText(){
	$('#count').text(guessCount);
}
/*---Set guess count---*/
function setCount(count) {
	$('#count').text(guessCount);
}
/*---Prompt for guess---*/
function getChoice(userChoice){
	var userChoice = prompt("Guess the Number","Your Number");
	console.log("User Choice="+userChoice);
	return userChoice;
}

/*---Check user's guess---*/
function checkChoice(userChoice){
	if (isNaN(userChoice)){
		setFeedback("Please type in only numbers!");
		return true;
	}else if (userChoice <1 || userChoice>100){
setFeedback("Your number should be between 1 and 100");
return true;
}else if ($.trim(userChoice) == ''){
	setFeedback("Enter your guess please!");
	return true;
}else {
	return false;
};
}
/*---Set feedback---*/
function setFeedback(feedback){
	$('#feedback').text(feedback);
}
/*---Check hotness for feedback---*/
function checkHotness(guessDifference){
	if (guessDifference==0){
		setFeedback("Hurray! You guessed it!!!");
		found=true;
		return false;
	}else if (guessDifference<=5) {
		setFeedback("It's getting super hot!");
		return true;
	}else if (guessDifference<=10) {
		setFeedback("It's getting hotter in here!");
		return true;
	}else if (guessDifference>=10 && guessDifference<=20) {
		setFeedback("Pretty Warm!");
		return true;
	} else if (guessDifference>=20 && guessDifference<=40) {
	setFeedback("Brr..getting colder");
	return true;
}else {
	setFeedback("Freezing cold!");
	return true;
}

}//*end of the jquery
});
