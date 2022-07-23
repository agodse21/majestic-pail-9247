document.getElementById("welcome").addEventListener('click',go)
function go(){
    window.location.href="signup.html"
  }

let shw=JSON.parse(localStorage.getItem("show"))
let sho=()=>{
  if(shw.name!=undefined){
console.log(shw.name)
let log=document.getElementById("Login")
log.innerHTML=shw.name
let logout=document.getElementById("logout")
logout.innerHTML="Logout"
logout.addEventListener('click',lgout)

  }
}

let lgout=()=>{
  localStorage.removeItem("show");
  window.location.reload();
}