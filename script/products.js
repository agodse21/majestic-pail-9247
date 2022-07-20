import navbar from "../components/navbar.js";


let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

//********************************************* */

let id;
let i = 0;
let imgArr = JSON.parse(localStorage.getItem("slideshow")) || [];
let img_url = [
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjGQk8NPbylgoMJJ-CkWpeGB3iyQAarVViNL-iSLo-a2x1_Zoq-ishlP2ShV5ULHmax4Cy8ywfYBBh5lLRnTudXa7dbFRKDXXeSGCrOIE3I-bZEdHnFB7oSBefZL0u53ZUmT6pTADNyIRznlChEMHzUpxG4meE1z4Ho8VJQg0T9dO8t1_DrUvRSbX6bLA/w1246-h491/slide%201.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjbUqnx5enh1uPJE4ynw0Htz3Bwx0a71FJXjJVgPSGMgKfM6Upo63uosiS743MR3KlGGDDldrgXHrZrULi68EATUsptLpEDyOVvpCGtP1FJodIPU7dXYz37wM7e_2nr5hlsQSBzIZ-7HkGGj4MsbkTfX8N0eLSMYYivEjllaAq-znZ-9fkvwGC_19xewQ/w1249-h491/slide%202.jpg",
  "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEgc1y_88OvEvJ9xTRuXeJ-WZOaVVdOaIzgE3jIYt3xtCKPxj0Pv0p_w8ysrRXR9cBOC7VCdoNX1Q9YLH04o_Jaa1BB3wWGeDA4nrVyBr5jHOIQlnt0dnACpy7C3UYrUzcgeOUzA1PN0Uy9vyCjEzBulM7nK8vqTmGydn2PnOEyHYGRD1EuGB_ei05Z5mA/w1250-h488/slide.jpg",
];

img_url.map(function (elem) {
  imgArr.push(elem);
});
localStorage.setItem("slideshow", JSON.stringify(imgArr));

let imgdata = JSON.parse(localStorage.getItem("slideshow"));
let container = document.getElementById("slideshow");

id = setInterval(function () {
  if (i == imgdata.length) {
    i = 0;
  }
  let img = document.createElement("img");
  img.setAttribute("src", imgdata[i]);
  container.innerHTML = "";
  container.append(img);
  i++;
}, 1500);


let nav=document.getElementById("navbar");
nav.innerHTML=navbar();

