document.addEventListener("DOMContentLoaded", function () {
  const distance = document.getElementById("distance");
  const duration = document.getElementById("duration");

  const btCal = document.getElementById("btCal");
  const btCancel = document.getElementById("btCancel");

  let showCal = document.getElementById("showCal");

  function taxiCal() {
    const dist = parseFloat(distance.value);
    const dura = parseFloat(duration.value);

    if (dist <= 1) {
      const fare = dist * 35 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    } else if (dist <= 10) {
      const fare = ((dist - 1) * 5.5) + 35 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    } else if (dist <= 20) {
      const fare = ((dist - 10) * 6.5) + 84 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    } else if (dist <= 40) {
      const fare = ((dist - 20) * 7.5) + 149 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    } else if (dist <= 60) {
      const fare = ((dist - 40) * 8.0) + 299 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    } else if (dist <= 80) {
      const fare = ((dist - 60) * 9.0) + 459 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    } else {
      const fare = ((dist - 80) * 10.5) + 639 + (dura * 2);
      showCal.textContent = fare.toFixed(2);
    }
  }

  function cancel() {
    distance.value = "";
    duration.value = "";
    showCal.textContent = " 0 ";
  }


  btCal.addEventListener("click", taxiCal)
  btCancel.addEventListener("click", cancel)
});
