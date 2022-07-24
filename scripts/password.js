let obj=JSON.parse(localStorage.getItem("password"))||{};

let pass=()=>{
 
    let pasword=document.querySelector(".password")
    console.log(pasword)
    if(obj.password===pasword.value){
        window.location.href="navbar.html"
        localStorage.setItem("show",JSON.stringify(obj))
    }
}
document.getElementById("process").addEventListener('click',pass)


