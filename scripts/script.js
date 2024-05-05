let buyf=false;

function buy(){
if(!buyf){


     // console.log(document.getElementById('btm').style)
     document.getElementById('btm').style.background='red' 
     document.getElementById("btm").innerHTML='in basket'
     buyf=true
}else{document.getElementById('btm').style.background='grey' 
document.getElementById("btm").innerHTML='купить >=('
buyf=true}


}