function navToggle() {
    var x = document.getElementById("phone-nav");
    if (x.className === "") {
        x.className += "active";
    } else {
        x.className = "";
    }
}
function resizeToggle() {
  var x = document.getElementById("phone-nav");
      x.className = "";
}