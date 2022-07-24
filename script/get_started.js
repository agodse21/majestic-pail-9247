import nav from "../component/nav.js"

let navb = document.getElementById("navbar");
navb.innerHTML = nav();

let create_acc=document.getElementById("create_acc");
create_acc.innerText="Get started";



document.getElementById("logo").addEventListener("click",gotohome);
function gotohome(){
  window.location.href="index.html"
}