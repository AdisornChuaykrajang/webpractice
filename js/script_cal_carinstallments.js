document.addEventListener("DOMContentLoaded", function () {
  const firstname = document.getElementById("firstname");
  const lastname = document.getElementById("lastname");
  const cartype = document.getElementsByName("car");
  const carprice = document.getElementById("carprice");
  const down = document.getElementById("down");
  const period = document.getElementById("period");
  const interest = document.getElementById("interest");

  const btConfirm = document.getElementById("btConfirm");
  const btCancel = document.getElementById("btCancel");

  const showname = document.getElementById("showname");
  const showcartype = document.getElementById("showcartype");
  const showdown = document.getElementById("showdown");
  const showfinance = document.getElementById("showfinance");
  const Installments = document.getElementById("Installments");

  function cancel() {
    firstname.value = "";
    lastname.value = "";
    cartype[0].checked = true;
    carprice.value = "";
    down.value = "";
    period[0].selected = true;
    interest.value = "";
    showname.textContent = "XXXXX";
    showcartype.textContent = "XXXXX";
    showdown.textContent = "XXXXX";
    showfinance.textContent = "XXXXX";
    Installments.textContent = "XXXXX";
  }

  function submit() {
    showname.textContent = firstname.value + "  " + lastname.value;

    for (i = 0; i < cartype.length; i++) {
      if (cartype[i].checked) {
        showcartype.textContent = cartype[i].value;
      }
    }

    const totaldown =
      (parseFloat(carprice.value) * parseFloat(down.value)) / 100;
    showdown.textContent = totaldown.toFixed(2);

    const finance =
      parseFloat(carprice.value) -
      (parseFloat(carprice.value) * parseFloat(down.value)) / 100;
    showfinance.textContent = finance.toFixed(2);

    const y = parseFloat(period.value);
    const CarPri = parseFloat(carprice.value);
    const INtrs = parseFloat(interest.value);
    
    Installments.textContent = (finance + ((finance*INtrs/100)*y)) /(y*12)
  }
  btConfirm.addEventListener("click", submit);
  btCancel.addEventListener("click", cancel);
});
