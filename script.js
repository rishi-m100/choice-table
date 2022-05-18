


		//Number Animation

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}

const obj1 = document.getElementById("value1");
const obj2 = document.getElementById("value2");
/*const obj3 = document.getElementById("value3");
const obj4 = document.getElementById("value4");
const obj5 = document.getElementById("value5");
const obj6 = document.getElementById("value6");
const obj7 = document.getElementById("value7");
*/

function isInViewport(element) {
    var element = document.getElementById('value1');

    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
						console.log("hi");


}
    var element = document.getElementById('value1');
    var condition = isInViewport();
    var count = 0;


function animateNumbers() {

if (isInViewport()==true) {
  if (count== 0) {
animateValue(obj1, 0, 13634, 5000);
animateValue(obj2, 0, 184, 3000);
//animateValue(obj3, 0, 64, 2500);
  }
count=1;
}
}

document.getElementById('all').addEventListener("mousemove", animateNumbers);
document.getElementById('all').addEventListener("wheel", animateNumbers);


document.addEventListener("touchmove", ScrollStart, false);
document.addEventListener("scroll", Scroll, false);

function ScrollStart() {
    //start of scroll event for iOS
		animateNumbers();
}

function Scroll() {
    //end of scroll event for iOS
    //and
    //start/end of scroll event for other browsers
				animateNumbers();

}

/*



function isInViewport2(element2) {
    var element2 = document.getElementById('value4');

    const rect = element2.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );

}
    var element2 = document.getElementById('value4');
    var condition2 = isInViewport();
    var count2 = 0;

function animateNumbers2() {

if (isInViewport2()==true) {
  if (count2== 0) {
animateValue(obj4, 0, 6, 2000);
animateValue(obj5, 0, 70, 3000);
animateValue(obj6, 0, 3, 2000);
animateValue(obj7, 0, 14, 2500);
  }
count2=1;
}
}
document.getElementById('all').addEventListener("mousemove", animateNumbers2);
document.getElementById('all').addEventListener("wheel", animateNumbers2);
*/


function openCity(evt, cityName) {
            var i, tabcontent, tablinks;
            tabcontent = document.getElementsByClassName("tabcontent");
            for (i = 0; i < tabcontent.length; i++) {
                tabcontent[i].style.display = "none";
            }
            tablinks = document.getElementsByClassName("tablinks");
            for (i = 0; i < tablinks.length; i++) {
                tablinks[i].className = tablinks[i].className.replace(" active", "");
            }

            var founder = document.getElementsByClassName("tablinks");
            founder[0].className += " active";
            

            document.getElementById(cityName).style.display = "block";
            evt.currentTarget.className += " active";

             if (founder[0].classList.contains("active")) {
            founder[0].className = founder[0].className.replace(" active", "");
             }
            
          
        }
         
 

        openCity(event, 'Manage');




		