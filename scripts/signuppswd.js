let lgn=()=>{
    window.location.href="welcome.html"
    document.getElementById('lgn').style.borderBottom="4px solid blue"
}
let lgn1=()=>{
    window.location.href="signup.html"
    document.getElementByClassName('lgn1').style.borderBottom="4px solid blue"
}

let continu=()=>{
 

    let obj=JSON.parse(localStorage.getItem("password"))||{};
    let email=document.getElementById("email");
    let name=document.getElementById("name");
         obj={password:email.value,
                 name:name.value }
        
        localStorage.setItem('password',JSON.stringify(obj))
     window.location.href="welcome.html"; 
    }
    
    
  
    