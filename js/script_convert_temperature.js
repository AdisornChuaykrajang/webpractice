document.addEventListener("DOMContentLoaded", function () {
  const btconv = document.getElementById("Conv");
  const btcancel = document.getElementById("cancel");
  const showresult = document.getElementById("showUnit");
  const radio = document.querySelectorAll('input[name="tempconv"]');
  const unitInput = document.getElementById("unit1");
  const unitResult = document.getElementById("unit2");
  const temp = document.getElementById("temp");
  const warning = document.getElementById("warning");
  const show1 = document.getElementById("show1");

  function tempConvert() {
    const tempc = parseFloat(temp.value);
    if (isNaN(tempc)) {
      warning.textContent = "Please enter a valid temp";
    } else if (radio[0].checked) {
      result = (tempc * 9) / 5 + 32;
      showresult.textContent = result.toFixed(2);
    } else {
      result = ((tempc - 32) * 5) / 9;
      showresult.textContent = result.toFixed(2);
    }
  }

  function changeunit() {
    if (radio[0].checked) {
      unitInput.textContent = "เซลเซียส";
      unitResult.textContent = "ฟาเรนไฮท์";
    } else {
      unitInput.textContent = "ฟาเรนไฮท์";
      unitResult.textContent = "เซลเซียส";
    }
  }

  function cancel(){
    temp.value = "";
    radio[0].checked = true;
    show1.textContent = "มีค่าเป็น";
    showresult.textContent = "0.00";
    unitResult.textContent = "ฟาเรนไฮท์";
    
  }

  radio.forEach((option) => option.addEventListener("change", changeunit));
  btconv.addEventListener("click", tempConvert);
  btcancel.addEventListener("click", cancel);
});