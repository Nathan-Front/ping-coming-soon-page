document.addEventListener('invalid', (function(){
    return function(e) {
      //prevent the browser from showing default error bubble / hint
      e.preventDefault();
    };
})(), true);

function emptyMessage() {
var empty = document.forms["form"]["input"].value;
var error = document.getElementById("errorMessage");
var input = document.getElementById("input_text");

if (empty == "") {
    // Create new element with empty error message 
    error.textContent = "This should not be empty";
    error.style.color = "red";
    error.style.position ="absolute";
    error.style.fontSize = "13px";
    input.style.borderColor = "hsl(354, 100%, 66%)";
return false;
}

if (isNaN(document.getElementById("input_text").value)) 
{  
    // Create new element with email error message
    error.textContent = "Please enter a valid email";
    error.style.color = "red";
    error.style.position ="absolute";
    error.style.fontSize = "13px";
    input.style.borderColor = "hsl(354, 100%, 66%)";
} else {
    error.textContent = "";
}
}
