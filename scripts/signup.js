let lgn=()=>{
    window.location.href="welcome.html"
    document.getElementById('lgn').style.borderBottom="4px solid blue"
}
let lgn1=()=>{
    window.location.href="signup.html"
   
}


let cont=()=>{
 

let arr=JSON.parse(localStorage.getItem("Emails"))||[];
let email=document.getElementById("email");
   let  obj={email1:email.value}
    arr.push(obj)
    localStorage.setItem('Emails',JSON.stringify(arr))
 window.location.href="signuppswd.html"; 
}



let conti=()=>{
    let flag="no";
    let email=document.getElementById("email")
console.log(email)
var x=email.value;


for(let i=0;i<x.length;i++){
  if(x.length>=3){
    if(x[i]==="@"){
      
        flag="yes";
       
      
       break;
    }
  }
    
} if(flag==="yes"){
   
      document.getElementById("process").style.backgroundColor="#702BD8" ;
        document.getElementById("process").addEventListener("click",cont);
}

}




