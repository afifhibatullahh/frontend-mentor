const form = document.getElementById("form");
const username = document.getElementById("username");
const number = document.getElementById("number");
const month = document.getElementById("month");
const year = document.getElementById("year");
const cvc = document.getElementById("cvc");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  checkInputs();
});

number.addEventListener("input", function (e) {
  e.target.value = e.target.value
    .replace(/[^\dA-Z]/g, "")
    .replace(/(.{4})/g, "$1 ")
    .trim();

  const cardNumber = document.getElementsByClassName("card-number");

  if (e.target.value.length <= 19) cardNumber[0].innerText = e.target.value;
});

username.addEventListener("input", function (e) {
  const cardholder = document.getElementsByClassName("cardholder-name");
  cardholder[0].innerText = e.target.value;
});

month.addEventListener("input", function (e) {
  const month = document.getElementsByClassName("month");
  month[0].innerText = e.target.value;
});

year.addEventListener("input", function (e) {
  const year = document.getElementsByClassName("year");
  year[0].innerText = e.target.value;
});

cvc.addEventListener("input", function (e) {
  const cvc = document.getElementById("cvc-num");
  if (e.target.value.length <= 6) cvc.innerText = e.target.value;
});

function checkInputs() {
  let isValidate = 0;
  const usernameValue = username.value.trim();
  const numberValue = number.value.trim();
  const monthValue = month.value.trim();
  const yearValue = year.value.trim();
  const cvcValue = cvc.value.trim();

  const regNum = /^[0-9]+$||\s*/;

  if (usernameValue === "") {
    setErrorFor(username, "Name can't be blank");
  } else {
    setSuccessFor(username);
    isValidate++;
  }

  if (regNum.test(numberValue)) {
    if (numberValue.length == 19) {
      setSuccessFor(number);
      isValidate++;
    } else setErrorFor(number, "Should contain 16 numbers");
  } else setErrorFor(number, "Wrong format, numbers only");

  if (monthValue === "") setErrorFor(month, "Can't be blank", true);
  else {
    setSuccessFor(month, true);
    isValidate++;
  }

  if (yearValue === "") setErrorFor(year, "Can't be blank", true);
  else {
    isValidate++;
    setSuccessFor(year, true);
  }

  if (cvcValue == "") {
    setErrorFor(cvc, "Can't be blank");
  } else {
    if (cvcValue.length >= 3) {
      setSuccessFor(cvc);
      isValidate++;
    } else setErrorFor(cvc, "Should contain at least 3 characters");
  }

  if (isValidate == 5) {
    // hide form
    form.classList.toggle("hide");
    // set text button
    const createdCard = document.getElementById("created-success");
    createdCard.classList.toggle("hide");
  }
}

function setErrorFor(input, message, isDate = false) {
  let formControl = input.parentElement;
  formControl.className = "form-control error";
  if (isDate) {
    formControl = formControl.parentElement.parentElement.parentElement;
    formControl.className = "form-control error";
  }

  const small = formControl.querySelector("small");

  small.innerText = message;
  small.style.visibility = "visible";
}

function setSuccessFor(input, isDate = false) {
  let formControl = input.parentElement;
  formControl.className = "form-control success";
  if (isDate) {
    formControl = formControl.parentElement.parentElement.parentElement;
    formControl.className = "form-control success";
  }
  const small = formControl.querySelector("small");
  small.style.visibility = "hidden";
}
