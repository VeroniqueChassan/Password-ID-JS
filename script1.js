/* https://www.studytonight.com/javascript-howtos/password-validation-in-javascript

https://www.w3schools.com/howto/howto_js_password_validation.asp
*/

let alreadyMemberBtn = document.querySelector("#already-member");
let newMemberBtn = document.querySelector("#new-member");
// let subContainer1 = document.querySelector(".sub-container1");
let subContainer2 = document.querySelector(".sub-container2");

newMemberBtn.addEventListener("click", () => {
  document.getElementById("message").style.display = "none";
  document.querySelector(".sub-container2").style.display = "none";
  document.querySelector(".sub-container1").style.display = "block";
});

alreadyMemberBtn.addEventListener("click", () => {
  document.querySelector(".sub-container1").style.display = "none";
  document.querySelector(".sub-container2").style.display = "block";
});

/* 1st form *************************************************************************************************/
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submit-btn");
let connectionStatus = document.querySelector("#connectionStatus");

let usernameArray = [];
let passwordArray = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameValue = username.value;
  let passwordValue = password.value;
  usernameArray.push(usernameValue);
  passwordArray.push(passwordValue);
  console.log(usernameArray);
  console.log(passwordArray);

  username.value = "";
  password.value = "";
  document.getElementById("message").style.display = "none";
  document.querySelector(".sub-container1").style.display = "none";
  reset();

  connectionStatus.innerHTML = "login created successfully " + usernameValue;
  setTimeout(() => {
    connectionStatus.innerHTML = "";
  }, 3000);
});

/*2nd form *******************************************************************************************************************/
let username2 = document.querySelector("#username2");
let password2 = document.querySelector("#password2");
let submitBtn2 = document.querySelector("#submit-btn2");
let successfullLogin = document.querySelector("#successfull-login");
let loginStatus = document.querySelector("#loginStatus");

submitBtn2.addEventListener("click", (e) => {
  e.preventDefault();

  let usernameValue2 = username2.value;
  let passwordValue2 = password2.value;
  console.log(usernameValue2, passwordValue2);

  for (let i = 0; i < usernameArray.length; i++) {
    if (
      usernameArray[i] == usernameValue2 &&
      passwordArray[i] == passwordValue2
    ) {
      successfullLogin.innerHTML =
        "Your Username & Password are correct. Welcome " + usernameValue2;
      break;
    } else {
      successfullLogin.innerHTML =
        "Your Username & Password are NOT correct. Try again " + usernameValue2;

      setTimeout(() => {
        successfullLogin.innerHTML = "";
      }, 2000);
    }
  }

  username2.value = "";
  password2.value = "";
});

/* PASSWORD CHECK *******************************************************************/
/*
https://codeburst.io/an-introduction-to-regular-expressions-regex-in-javascript-1d3559e7ac9a
https://www.w3schools.com/howto/howto_js_password_validation.asp
*/
// let password = document.querySelector("#password");
let letter = document.getElementById("letter");
let capital = document.getElementById("capital");
let number = document.getElementById("number");
let length = document.getElementById("length");

password.onfocus = function () {
  document.getElementById("message").style.display = "block";
};

password.onkeyup = function () {
  let lowerCaseLetters = /[a-z]/;
  //validate LOWERCASE LETTER
  if (password.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valide");
    letter.classList.add("invalid");
  }

  //validate CAPITAL LETTER
  let upperCaseLetters = /[A-Z]/;
  if (password.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valide");
    capital.classList.add("invalid");
  }

  //validate NUMBERS
  let numbers = /[0-9]/;
  if (password.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valide");
    number.classList.add("invalid");
  }

  //validate LENGTH
  if (password.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}; //end of onkeyup

function reset() {
  letter.classList.remove("valide");
  letter.classList.add("invalid");
  capital.classList.remove("valide");
  capital.classList.add("invalid");
  number.classList.remove("valide");
  number.classList.add("invalid");
  length.classList.remove("valid");
  length.classList.add("invalid");
}
