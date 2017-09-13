let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.length == 0 && attempt.length == 0){
    	setHiddenFields();
	}

	if(!vaildateInput(input.value)){
		return false;
	}

	if(getResults){
		setMessage("You win! :)");
		showAnswer(true);
		showReplay();
	}else if(!getResults && attempt >= 10){
		setMessage("You Lose! :(");
		showAnswer(false);
		showReplay();
	}else{
		setMessage("Incorrect, try again.");
	}


	attempt++;
}

//implement new functions here

function setHiddenFields(){
	attempt = 0;
	answer = Math.floor(Math.random() * 9999).toString();
	
	while(answer.length < 4){
		answer = "0" + answer;
	}	

}

function setMessage( newMessage ){
	id = document.getElementById('message');
	id.innerHTML(newMessage);
}

function vaildateInput( input ){
	if(input.length > 4){
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function getResults( param ){
	var div1 = document.getElementById('results');
	var guessedCorrectly = 0;

	for(var i = 0, x = param.length; i < x; i++){
		div1.innerHTML += "<div class=\"row\"><span class=\"col-md-6\">'" + param + "'</span><div class=\"col-md-6\">";
		
		if(param.charAt(i) == answer.charAt(i)){
			div1.innerHTML += "<span class=\"glyphicon glyphicon-ok\"></span>";
			guessedCorrectly++;
		} else if(answer.includes(param.charAt(i))){
			div1.innerHTML += "<span class=\"glyphicon glyphicon-transfer\"></span>";
		} else {
			div1.innerHTML += "<span class =\"glyphicon glyphicon-remove\"></span>";  		
		}

		div1.innerHTML += "</div></div>"

		return (guessedCorrectly == answer.length)
	} 
}

function showAnswer( param ){
	var code = document.getElementById('code');
	code.innerHTML = answer.value;
	if(param){
		code.className += "success";
	} else {
		code.className += "failure";
	}
}

function showReplay(){
	var guessing = document.getElementById('guessing-div');
	var replay = document.getElementById('replay-div');
	guessing.style.display = "none";
	replay.style.display = "block";
}
























