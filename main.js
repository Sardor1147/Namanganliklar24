let notification  = document.getElementById('notification')
notification.addEventListener('click', ()=> {
    confirm('Allow notification for Namanganliklar24.uz')
})

let google = document.getElementById('google')
google.addEventListener('click', ()=> {
    alert("Sorry for inconvenience, go google play and search for 'Namanganliklar24'")
})

let appstore = document.getElementById('appstore')
appstore.addEventListener('click', ()=> {
    alert("Sorry for inconvenience, go appstore play and search for 'Namanganliklar24'")
})


//modal
let modal = document.getElementById('myModal')
let btn = document.getElementById('modalBtn')
var span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
    modal.style.display = "block";
  }

  span.onclick = function() {
    modal.style.display = "none";
  }

window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }