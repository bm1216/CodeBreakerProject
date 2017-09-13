var answer = document.getElementById('answer').value;
var attempt = document.getElementById('attempt').value;

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.length == 0 || attempt.length == 0){
    	setHiddenFields();
	}

	if(!vaildateInput(input.value)){
		return false;
	}

	var results = getResults(input.value);

	if(results){
		setMessage("You win");
		showAnswer(true);
		showReplay();
	}else if(!results && attempt >= 10){
		setMessage("You Lose!");
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
	var x = Math.floor(Math.random() * 10000).toString();
	
	while(x.length < 4){
		x = "0" + x;
	}

	answer = x;	

}

function setMessage( newMessage ){
	 document.getElementById('message').innerHTML = newMessage;
}

function vaildateInput( input ){
	if(input.length == 4){
		return true;
	} else {
		setMessage("Guesses must be exactly 4 characters long.");
		return false;
	}
}

function getResults( param ){
	var div1 = document.getElementById('results');
	var guessedCorrectly = 0;
	var inner = "";
	
	inner += "<div class=\"row\"><span class=\"col-md-6\">" + param + "</span><div class=\"col-md-6\">";
	
	for(var i = 0, x = param.length; i < x; i++){
		
		
		if(param.charAt(i) == answer.charAt(i)){
			inner += "<span class=\"glyphicon glyphicon-ok\"></span>";
			guessedCorrectly++;
		} else if(answer.indexOf(param.charAt(i)) > -1){
			inner += "<span class=\"glyphicon glyphicon-transfer\"></span>";
		} else {
			inner += "<span class=\"glyphicon glyphicon-remove\"></span>";  		
		}
		
	}
	
	inner += "</div></div>"
	div1.innerHTML += inner;

	return (guessedCorrectly == answer.length)

} 


function showAnswer( param ){
	var code = document.getElementById('code');
	code.innerHTML = "<strong>" + answer + "</strong>";
	if(param){
		code.className += " success";
	} else {
		code.className += " failure";
	}
}

function showReplay(){
	 document.getElementById('guessing-div').style.display = "none";
	 document.getElementById('replay-div').style.display = "block";
}
























