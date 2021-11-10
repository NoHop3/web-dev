let number1 = 2;
let number2 = 3;
function add(number1, number2) {
  let sum = number1 + number2;
  return sum;
}

let personDetails = {
  fullName: {
    firstName: "Stefan",
    lastName: "Georgiev",
  },
  alertMessage: function (message) {
    alert(message);
  },
};


let submitButton = document.querySelector("#submit-button");
console.log(submitButton);

function clickListener(event) {
  event.preventDefault();

  let emailInput = document.querySelector("#email");
  let messageInput = document.querySelector("#message");

  let emailText;
  if(emailValidation(emailInput.value))
      emailText = emailInput.value;
  else 
      emailText = 'Invalid email';

  
  let messageText;
  if(validateNSFW(messageInput.value) !== false)
  messageText = 'Inappropriate message';
  else messageText = messageInput.value;

  console.log("email: ", emailText, ", message: ", messageText);
}

submitButton.addEventListener("click", clickListener);

function emailValidation(email) {
  if (email.includes('@')) {
    return true;
  } else {
    return false;
  }
}

function validateNSFW(messageText) {
  if(messageText.includes('crap'))
  return true;
  else return false; 
}
