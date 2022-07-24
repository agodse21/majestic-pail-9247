
import nav from "../component/nav.js"

document.getElementById("navbar").innerHTML=nav();


document.getElementById("need_more_btn").addEventListener("click",()=>{
    window.location.href="#additional"

})