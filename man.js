/*
1. creating man
2.moving man with keys using keydown

*/

class Man {
    
        
        movement() {
            console.log("f")
            var img = document.getElementById("man");
            
            addEventListener("keydown", function(e) {
                var left = parseInt(window.getComputedStyle(img).getPropertyValue("left"));
                if (e.key == "ArrowLeft" && left > 0) {
                    img.style.left = left - 10 + "px";}
                if (e.key == "ArrowRight" && left <= 460) {
                    img.style.left = left + 10 + "px";
                }
            });
        };
    }





