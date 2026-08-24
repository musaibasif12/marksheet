const engNum = document.querySelector("#engNum");
const mathNum = document.querySelector("#mathNum");
const urduNum = document.querySelector("#urduNum");
const compNum = document.querySelector("#compNum");
const islNum = document.querySelector("#islNum");
const phyNum = document.querySelector("#phyNum");

function myFun(event) {
  event.preventDefault();
  engMarks.innerHTML = Number(engNum.value) + "<br>";
  urduMarks.innerHTML = Number(mathNum.value) + "<br>";
  mathMarks.innerHTML = Number(urduNum.value) + "<br>";
  compMarks.innerHTML = Number(compNum.value) + "<br>";
  islMarks.innerHTML = Number(islNum.value) + "<br>";
  phyMarks.innerHTML = Number(phyNum.value) + "<br>";

  let sumOfTotalMarks = 600;
  let sumOfObtainedMarks =
    Number(engNum.value) +
    Number(mathNum.value) +
    Number(urduNum.value) +
    Number(compNum.value) +
    Number(islNum.value) +
    Number(phyNum.value);
  percentage.innerHTML = Math.round((sumOfObtainedMarks / sumOfTotalMarks) * 100);
}
