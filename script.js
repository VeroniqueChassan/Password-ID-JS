/* https://www.studytonight.com/javascript-howtos/password-validation-in-javascript

https://www.w3schools.com/howto/howto_js_password_validation.asp
*/
/* 1st form */
let username = document.querySelector("#username");
let password = document.querySelector("#password");
let submitBtn = document.querySelector("#submit-btn");
let connectionStatus = document.querySelector("#connectionStatus");

let usernameArray = [];
let passwordArray = [];

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  let usernameValue = username.value;
  if (usernameArray.length == 0) {
    usernameArray.push(usernameValue);
    console.log(usernameValue);
  } else {
    usernameArray.pop();
    usernameArray.push(usernameValue);
  }

  let passwordValue = password.value;
  if (passwordArray.length == 0) {
    passwordArray.push(passwordValue);
    console.log(passwordValue);
  } else {
    passwordArray.pop();
    passwordArray.push(passwordValue);
  }
  connectionStatus.innerHTML = "login created successfully";

  username.value = "";
  password.value = "";
});

console.log(usernameArray);
/*2nd form */
let username2 = document.querySelector("#username2");
let password2 = document.querySelector("#password2");
let submitBtn2 = document.querySelector("#submit-btn2");
let successfullLogin = document.querySelector(".successfull-login");
let loginStatus = document.querySelector("#loginStatus");

submitBtn2.addEventListener("click", (e) => {
  e.preventDefault();

  let usernameValue2 = username2.value;
  let passwordValue2 = password2.value;
  console.log(usernameValue2);

  if (usernameValue2 === usernameArray[0]) {
    successfullLogin.classList.add("successfull-login-show");
  } else {
    loginStatus.innerHTML =
      "Your login and/or password is not correct try again";
  }
  username2 = "";
  password2 = "";
});
