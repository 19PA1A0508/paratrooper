/*
1.for loop for every missile ,calculate property values
2.collison co ordinates condition with reload
*/

class collision{
    coll(){
        
        var movemis = setInterval(() => {
            var miss = document.getElementsByClassName("mis");
            var img= document.getElementById("man")

            
              for (var i = 0; i < miss.length; i++) {
                var mis = miss[i]; 
                var mistop=parseInt(getComputedStyle(mis).getPropertyValue("top"))
        
        
                var misleft = parseInt(getComputedStyle(mis).getPropertyValue("left"))
                
        

                    var left = parseInt(getComputedStyle(img).getPropertyValue("left"))
                    
                    if(mistop==400&&Math.abs(misleft+33-left)<=5) { 
                       
                         alert("Game Over");
                        
                         clearInterval(movemis);

                         location.reload()
                       
                        
                      
                        }

                    }
                },200)
        
                
                }
                
                }
    

        
