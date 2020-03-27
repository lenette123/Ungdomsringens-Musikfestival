// Burger bar til navigationen
function myFunction() {
    let burger = document.getElementById("sider");
    if (burger.style.display === "block") {
      burger.style.display = "none";
    } else {
      burger.style.display = "block";
    }
}

/* Modal til kunstner */

// Get the modal
var bandModalId = document.getElementById("bandModalId");

// Get the button that opens the modal
var btn = document.getElementById("bands");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  bandModalId.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  bandModalId.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == bandModalId) {
    bandModalId.style.display = "none";
  }
}

/*NOTE TO SELF - ID's kan kun bruges ÉN gang pr. HTML fil,
derfor er der så meget js til modaler, selvom det er det samme content*/

//SECOND MODAL

var bandModalId2 = document.getElementById("bandModalId2");
var btn = document.getElementById("bands2");
var span = document.getElementsByClassName("close")[1];
btn.onclick = function() {
  bandModalId2.style.display = "block";
}
span.onclick = function() {
  bandModalId2.style.display = "none";
}
window.onclick = function(event) {
  if (event.target == bandModalId2) {
    bandModalId2.style.display = "none";
  }
}

//FORTSÆTTES TEORETISK TIL DE SIDSTE 25 BANDS 
