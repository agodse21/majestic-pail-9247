document.getElementById("welcome").addEventListener('click',go)
function go(){
    window.location.href="welcome.html"
  }

let shw=JSON.parse(localStorage.getItem("show"))
let sho=()=>{
  if(shw.name!=undefined){
console.log(shw.name)
let log=document.getElementById("Login")
log.innerHTML=shw.name
let logout=document.getElementById("logout")
logout.innerHTML="Logout"
logout.style.border="1px solid blue"
logout.style.padding="15px"


logout.addEventListener('click',lgout)

  }
}

let lgout=()=>{
  localStorage.removeItem("show");
  window.location.reload();
}