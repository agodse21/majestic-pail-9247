
import nav from "../component/nav.js"

document.getElementById("navbar").innerHTML=nav();


document.getElementById("need_more_btn").addEventListener("click",()=>{
    window.location.href="#additional"

})

document.getElementById('btn').addEventListener('click',getstart)

function getstart(){
  window.location.href="get_started.html"
}

document.getElementById("logo").addEventListener("click",gotohome);
function gotohome(){
  window.location.href="index.html"
}