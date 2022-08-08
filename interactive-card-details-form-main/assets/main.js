const form = document.getElementById("form");
const username = document.getElementById("username");
const number = document.getElementById("number");
const month = document.getElementById("form");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

function checkInputs() {
  const usernameValue = username.value.trim();
  const numberValue = number.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();
  const cvcValue = cvc.value.trim();

  if (usernameValue === "") {
    setErrorFor(username, "Name can't be blank");
  } else {
    setSuccessFor(username);
  }
}

function setErrorFor(input, message) {
  const formControl = input.parentElement;
  const small = formControl.querySelector("small");

  small.innerText = message;
  formControl.className = "form-control error";
}
