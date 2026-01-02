function calculateSIP() {
  let p = document.getElementById("sipAmount").value;
  let r = document.getElementById("sipRate").value / 100 / 12;
  let n = document.getElementById("sipYears").value * 12;

  let amount = p * ((Math.pow(1 + r, n) - 1) / r) * (1 + r);

  document.getElementById("sipResult").innerText =
    "Estimated Value: ₹" + Math.round(amount);
}

//===== JAVASCRIPT =====
function openMenu(){
  document.getElementById("sidebar").style.left = "0";
  document.getElementById("overlay").style.display = "block";
}

function closeMenu(){
  document.getElementById("sidebar").style.left = "-280px";
  document.getElementById("overlay").style.display = "none";
}


/*contact dorm logic*/
function sendWhatsApp() {
  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;

  var whatsappNumber = "919422725438"; // YOUR NUMBER

  var whatsappMessage =
    "Hello Gaurav,%0A%0A" +
    "*Name:* " + name + "%0A" +
    "*Email:* " + email + "%0A" +
    "*Message:* " + message;

  var whatsappURL =
    "https://wa.me/" + whatsappNumber + "?text=" + whatsappMessage;

  window.open(whatsappURL, "_blank");
}
