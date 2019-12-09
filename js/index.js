const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



let anchors = document.querySelectorAll("nav a")

for (let i = 0; i < anchors.length; i++) {
  anchors[i].innerText=siteContent["nav"][`nav-item-${i+1}`];

}





// h1
let header1 = document.querySelector("h1")
header1.textContent=siteContent["cta"]["h1"];


// // codeball
let  imgc = document.getElementById("cta-img")
imgc.setAttribute('src', siteContent["cta"]["img-src"])

// // getstarted button

let  gsbutt = document.getElementsByTagName("button")
gsbutt[0].textContent=siteContent["cta"]["button"];






// // maincontent
const h4 = document.querySelectorAll(".text-content h4");
h4[0].textContent = siteContent["main-content"]["features-h4"]
h4[1].textContent = siteContent["main-content"]["about-h4"]
h4[2].textContent = siteContent["main-content"]["services-h4"]
h4[3].textContent = siteContent["main-content"]["product-h4"]
h4[4].textContent = siteContent["main-content"]["vision-h4"]


const mc = document.querySelectorAll(".text-content p");
mc[0].textContent = siteContent["main-content"]["features-content"]
mc[1].textContent = siteContent["main-content"]["about-content"]
mc[2].textContent = siteContent["main-content"]["services-content"]
mc[3].textContent = siteContent["main-content"]["product-content"]
mc[4].textContent = siteContent["main-content"]["vision-content"]


// middleimg
const mi = document.getElementById("middle-img")
mi.setAttribute('src', siteContent["main-content"]["middle-img-src"])

const  cont = document.querySelector(".contact h4")
cont.textContent=siteContent["contact"]["contact-h4"];

const  asdfsd = document.querySelectorAll(".contact p")
asdfsd.forEach((element,i )=>{  
  let item 
  if(i===0) item = "address"
  if(i===1) item = "phone"
  if(i===2) item = "email"
  element.textContent=siteContent["contact"][`${item}`];

}) 


const  foot = document.querySelector("footer p")
foot.textContent=siteContent["footer"]["copyright"];




const superNAV = document.querySelector("nav");

const newE1 = document.createElement("a");
newE1.textContent = "LAMBDAAAAH"
superNAV.appendChild(newE1);

const newE2 = document.createElement("a");
newE2.textContent = "lamb people"
superNAV.prepend(newE2);

const greenNNN = document.querySelectorAll("a");
greenNNN.forEach(el=>{
  el.style.color = "green"
})
