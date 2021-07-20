/*
for loop to iterate
2.checking the top value for points
calling collison file
moving down missiles
*/

class mismovement{
   
    mismovedown(){
        var movemis = setInterval(() => {
            var miss = document.getElementsByClassName("mis");
              for (var i = 0; i < miss.length; i++) {
                var mis = miss[i]; 
               var mistop=parseInt(getComputedStyle(mis).getPropertyValue("top"))


                if (mistop==475) {        
                    document.getElementById("points").innerHTML=parseInt(document.getElementById("points").innerHTML) + 1;
             }
                
                var obj3 = new collision()
                obj3.coll()

                mis.style.top = mistop + 25 + "px";
                console.log("top--"+mistop)
                // console.log("rockpos--"+misleft)
                // console.log("man--"+left)
              }
    }
        ,200)}}
