let modal = document.getElementById('myModal')
let btn = document.getElementById('modalBtn')
var close = document.getElementsByClassName("modal__close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

  close.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }