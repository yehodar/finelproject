function playdorbell() {
   
       var audio = new Audio("/finelproject/project/sounds/Doorbell.mp3");
         audio.play();
   
    setTimeout(function () { window.location.href = "index.html"; }, 1400);
}
﻿function playdorbell2() {
   
       var audio = new Audio("/finelproject/project/sounds/Doorbell.mp3");
         audio.play();
   
    setTimeout(function () { window.location.href = "../index.html"; }, 1400);
}
var opentable_status = 0;
function opentable() {
    if (opentable_status == 0) {
        document.getElementById("dilemma_budget_table").style.display= "block";
        opentable_status = 1;
        document.getElementById("icon1").style.display = "none";
        document.getElementById("icon2").style.display = "inline-block";

    }
   else {
        document.getElementById("dilemma_budget_table").style.display = "none";
        opentable_status = 0;
        document.getElementById("icon2").style.display = "none";
        document.getElementById("icon1").style.display = "inline-block";

    }
    
}


function tab_nav() {
    var navA = document.querySelectorAll("ul li>a");
    var navInner = document.querySelectorAll("li ul li>a");

    for (var i = 0, len = navA.length; i < len; i++) {
        navA[i].addEventListener("focus", function (event) {
            var innerUl = event.target.parentElement.querySelector("ul")
            if (innerUl) innerUl.style.display = "block";
        }, true);
    }

    for (var i = 0, len = navInner.length; i < len; i++) {
        if (navInner[i].parentElement.nextElementSibling === null) {
            navInner[i].addEventListener("blur", function (event) {
                event.target.parentElement.parentElement.style.display = "none"
            }, true);
        }
    }
}
