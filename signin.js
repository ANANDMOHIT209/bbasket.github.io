

function upperCase() {
    var x = document.getElementsByTagName("input");
    x.value = x.value.toUpperCase();
  }

  setInterval(myTimer, 1000);

function myTimer() {
  const d = new Date();
  document.getElementById("demo").innerHTML = d.toLocaleTimeString();
}