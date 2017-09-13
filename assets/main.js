let answer = document.getElementById('answer');
let attempt = document.getElementById('attempt');

function guess() {
    let input = document.getElementById('user-guess');
    //add functionality to guess function here
    if(answer.length == 0 && attempt.length == 0){
    	setHiddenFields();
	}

	if(!vaildateInput(input.value())){
		return false;
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
	id.setInnnerHTML(newMessage);
}

function vaildateInput( input ){
	if(input.length > 4){
		return true;
	} else {
		setMessage("Guessed must be exactly 4 characters long.");
		return false;
	}
}