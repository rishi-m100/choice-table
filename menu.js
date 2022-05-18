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
         
 

        openCity(event, 'App');
