import navbar from "../components/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

let create_acc=document.getElementById("create_acc");
create_acc.innerText="Get started";