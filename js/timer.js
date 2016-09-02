function timer() {
  var date = new Date().getTime();
  var newYear = new Date(2017,0,1).getTime();

  var timeLeft = newYear - date;

  displayTimer(timeLeft);
}

function displayTimer(timeLeft) {
  var hr = ((timeLeft / (1000 * 60 * 60)));
  var min = ((timeLeft / (1000 * 60)) % 60);
  var sec = (timeLeft / 1000) % 60 ;

  var hourEl = document.getElementById("hr");
  var minEl = document.getElementById("min");
  var secEl = document.getElementById("sec");

  hourEl.textContent = parseInt(hr);
  minEl.textContent = parseInt(min);
  secEl.textContent = parseInt(sec);

  if (timeLeft == 0) {
    alert("Happy New Year!");
    clearInterval(timerId);
  }
}

timer();
var timerId = setInterval(() => timer(), 1000);
