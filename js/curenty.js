let money = document.getElementById("money");
let in1 = document.getElementById("in1");
let in2 = document.getElementById("in2");
let in3 = document.getElementById("in3");
let in4 = document.getElementById("in4");
let result = document.getElementById("result2");

in1.addEventListener("click", IN1);
in2.addEventListener("click", IN2);
in3.addEventListener("click", IN3);
in4.addEventListener("click", IN4);

function IN1() {
  let Amount = money.value / 3.5;
  result.textContent = Amount;
}
function IN2() {
  let Amount = money.value * 3.5;
  result.textContent = Amount;
}
function IN3() {
  let Amount = money.value / 1.8 ;
  result.textContent = Amount;
}
function IN4() {
  let Amount = money.value * 1.8;
  result.textContent = Amount;
}
