const tip5 = document.getElementById("tip-5");
const tip10 = document.getElementById("tip-10");
const tip15 = document.getElementById("tip-15");
const tip25 = document.getElementById("tip-25");
const tip50 = document.getElementById("tip-50");
const tipCustom = document.getElementById("tip-custom");
const bill = document.getElementById("bill");
const numPeople = document.getElementById("num-people");

const box = [tip5, tip10, tip15, tip25, tip50];
let picked;
let tip = 0;

box.forEach((element) => {
  element.addEventListener("click", (e) => {
    tip = parseInt(e.target.textContent);
    if (picked != undefined) picked.classList.remove("pick");
    picked = e.target;
    console.log(picked);
    e.target.classList.add("pick");
    totalbill(tip, bill.value, numPeople.value);
  });
});

["input", "click"].forEach((evt) => {
  tipCustom.addEventListener(evt, (e) => {
    tip = parseInt(e.target.value);
    if (picked != undefined) picked.classList.remove("pick");
    picked = e.target;
    e.target.classList.add("pick");
    totalbill(tip, parseInt(bill.value), parseInt(numPeople.value));
  });
});

bill.addEventListener("input", (e) => {
  totalbill(tip, parseInt(e.target.value), parseInt(numPeople.value));
});

numPeople.addEventListener("input", (e) => {
  totalbill(tip, parseInt(bill.value), parseInt(e.target.value));
});

const btnReset = document.getElementById("btn-reset");

btnReset.addEventListener("click", (e) => {
  totalbill(0, 0, 0);
  if (picked != undefined) picked.classList.remove("pick");
  // console.log(bill.value );
  bill.value = 0;
  numPeople.value = 0;
});

function totalbill(tip = 0, bill = 0, people = 0) {
  let tips = 0;
  if (people >= 1) {
    tips = bill * parseFloat(tip / 100);
  }
  let total = parseFloat(bill / people);

  document.getElementById("tip-person").innerText = `$ ${parseFloat(total)}`;
  document.getElementById("tip-number").innerText = `$ ${parseFloat(tips)}`;
}
