const form = document.getElementById("form");
const email = document.getElementById('input_text');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    validateInput();
});

//Validate the input 
function validateInput(){
	const emailValue = email.value.trim();

	if(emailValue === '') {
		setErrorFor(email, 'This should not be empty');
	} else if (!isEmail(emailValue)) {
		setErrorFor(email, 'Please enter a valid email');
	} else{
        return true;
    }
}
//append the class in the CSS 
function setErrorFor(input, message) {
	const validateForm = input.parentElement;
	const span = validateForm.querySelector('span');
	validateForm.className = 'validate-form error';
	span.innerText = message;
}

//use to check if the email is actually an email or not
function isEmail(email) {
	return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);
}
