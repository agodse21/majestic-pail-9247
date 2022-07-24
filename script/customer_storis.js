import nav from "../component/nav.js"

let navbar = document.getElementById("navbar");
navbar.innerHTML = nav();
 


document.getElementById("logo").addEventListener("click",gotohome);
function gotohome(){
  window.location.href="index.html"
}