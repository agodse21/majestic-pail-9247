let lgn=()=>{
    window.location.href="welcome.html"
    document.getElementById('lgn').style.borderBottom="4px solid blue"
}
let lgn1=()=>{
    window.location.href="signup.html"
    document.getElementByClassName('lgn1').style.borderBottom="4px solid blue"
}

let conti=()=>{
 

    let arr=JSON.parse(localStorage.getItem("password"))||[];
    let email=document.getElementById("email");
       let  obj={password:email.value}
        arr.push(obj)
        localStorage.setItem('password',JSON.stringify(arr))
     window.location.href="welcome.html"; 
    }
    
    
    
    // let conti=()=>{
    //     let flag="no";
    //     let email=document.getElementById("email")
    // console.log(email)
    // var x=email.value;
    
    
    // for(let i=0;i<x.length;i++){
    //   if(x.length>=3){
    //     if(x[i]==="@"){
          
    //         flag="yes";
           
          
    //        break;
    //     }
    //   }
        
    // } if(flag==="yes"){
       
    //       document.getElementById("process").style.backgroundColor="#702BD8" ;
    //         document.getElementById("process").addEventListener("click",cont);
    // } //else{
    // //    document.getElementById("process").style.backgroundColor="#9478BD" ;
    // // }
    //     // document.getElementById("process").style.backgroundColor="#702BD8" 
       
    
    // }
    
    // // email.addEventListener("input",conti);
    
    
    