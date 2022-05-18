
 function myFunction(x) {
  x.classList.toggle("change");
}
function my2(y) {
  var y1 = document.getElementById("links1")
  y1.classList.toggle("slide");
  var y2 = document.getElementById("links2")
  y2.classList.toggle("slide");
  var y3 = document.getElementById("links3")
  y3.classList.toggle("slide");
  var y4 = document.getElementById("links4")
  y4.classList.toggle("slide");
}



const link = document.querySelector(".links");
const cont = document.querySelector(".container");
cont.addEventListener('click', () => {

  if(document.querySelector('.links').style.display == "block") {
  link.style.display = "none";
  }

  else if(document.querySelector('.links').style.display == "none") {
  link.style.display = "inline-block";
  }
});

 
