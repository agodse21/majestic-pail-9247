let lgn=()=>{
  window.location.href="welcome.html"
  document.getElementById('lgn').style.borderBottom="4px solid blue"
}

function sift(){
  window.location.href="signup.html"
  document.getElementByClassName('signp').style.borderBottom="4px solid blue"
}

let arr=JSON.parse(localStorage.getItem("Emails"))||[];
let email=document.getElementById("email");

let conti=()=>{
    let flag;
    // let email=document.getElementById("email").value;

let x=email.value;

for(let i=0;i<x.length;i++){
  if(x.length>=3){
    if(x[i]==="@"){
      
        flag="yes";
        break;
       
    }
  }else if(x.length<3){
    flag="no"
  }
   
   
    else{
        flag="no";
     
     
    }
    
} if(flag==="yes"){
      document.getElementById("process").style.backgroundColor="#702BD8" ;
        document.getElementById("process").addEventListener("click",()=>{
          cont(arr)
        });
}else{
   document.getElementById("process").style.backgroundColor="#9478BD" ;
}
    // document.getElementById("process").style.backgroundColor="#702BD8" 

}
email.addEventListener("input",conti);






let cont=(arr)=>{
  let flag = false ;
  let email=document.getElementById("email");
  arr.forEach((el)=>{
    
if(el.email1===email.value){
  flag =true ;
 
  
}
  })
  if(flag){
    window.location.href="password.html";
  }else{
    alert("Email Incorrect")
    window.location.reload()
  }
}

document.getElementById("logo").addEventListener("click",gotohome);
function gotohome(){
  window.location.href="index.html"
}