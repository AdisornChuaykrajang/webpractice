let btCal = document.getElementById("btCal");
let btCancel = document.getElementById("btCancel");

btCancel.addEventListener("click", function () {
  let width = document.getElementById("width");
  let long = document.getElementById("long");
  width.value = "";
  long.value = "";
  showCal.innerHTML = "0.00";
});

btCal.addEventListener("click", function () {
  let showCal = document.getElementById("showCal");
  let sum = parseFloat(width.value) * parseFloat(long.value);
  showCal.innerHTML = sum;
});
