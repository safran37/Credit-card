const rightSide = document.querySelector(".gap");
const secret = document.querySelector(".secret-right-side");
const name1 = document.querySelector("#name");
const number = document.querySelector("#number");
const mm = document.querySelector("#mm");
const yy = document.querySelector("#yy");
const cvc = document.querySelector("#cvc");
const error1 = document.querySelector(".error-first");
const error2 = document.querySelector(".error-second");
const error3 = document.querySelector(".error-third");
const continue1 = document.querySelector(".continue");

name1.addEventListener("input", () => {
  document.querySelector(".card-name").innerText = name1.value.toUpperCase();
});
number.addEventListener("input", () => {
  document.querySelector(".card-number").innerText = number.value
    .match(/.{1,4}/g)
    .join(" ");
});
mm.addEventListener("input", () => {
  document.querySelector(".right1").innerText = mm.value;
});
yy.addEventListener("input", () => {
  document.querySelector(".right2").innerText = yy.value;
});
cvc.addEventListener("input", () => {
  document.querySelector(".card-cvc").innerText = cvc.value;
});
rightSide.addEventListener("submit", (e) => {
  e.preventDefault();
  if (name1.value === "") {
    error1.classList.add("active");
    name1.style.outline = "1px solid hsl(0, 100%, 66%)";
  }
  if (number.value === "") {
    error2.classList.add("active");
    number.style.outline = "1px solid hsl(0, 100%, 66%);";
  }
  if (mm.value === "" || yy.value === "" || cvc.value === "") {
    error3.style.display = "block";
    error3.innerText = "Can't be blank";
  } else if (yy.value < "22" || yy.value > "99" || mm.value > "12") {
    error3.style.display = "block";
    error3.innerText = "Wrong entry !";
  } else {
    rightSide.style.display = "none";
    secret.style.display = "flex";
  }
});
continue1.addEventListener("click", () => {
  window.location.reload();
});
