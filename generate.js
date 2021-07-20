/*
1.generating missile everytime
2.using random to generate positions which are only divisible by 10

*/

class generatemissile{

    generate(){

        var generatemis = setInterval(() => {
            var mis = document.createElement("div");
            mis.classList.add("mis");
            var x=Math.floor(Math.random() * 450) 
            var s=x.toString();
            var s1=s.slice(0, s.length-1);
            s1=s1+'0'
            s1=parseInt(s1)
            mis.style.left = s1 + "px";
            board.appendChild(mis);
          }, 2000);
    }

}
