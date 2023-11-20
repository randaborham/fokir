
let valuesDisplayes = document.querySelectorAll(".num");

let intervel = 5000;

valuesDisplayes .forEach((valuesDisplaye) => {
        let startvalue = 0;
        let endvalue = parseInt(valuesDisplaye.getAttribute("data-val"));
        let duration = Math .floor (intervel / endvalue);
        let counter = setInterval(function(){
            startvalue += 1;
            valuesDisplaye.textContent = startvalue;
            if (startvalue == endvalue){
                clearInterval(counter);
            }
        }, duration);

});

function myFunction() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }