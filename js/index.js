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
    "address" : "123 Way 456 Street <br> Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};


let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])



const nav = document.querySelectorAll('nav a');


nav.forEach(item => (item.style.color = 'green'));

nav[0].textContent = siteContent['nav']['nav-item-1'];
nav[1].textContent = siteContent['nav']['nav-item-2'];
nav[2].textContent = siteContent['nav']['nav-item-3'];
nav[3].textContent = siteContent['nav']['nav-item-4'];
nav[4].textContent = siteContent['nav']['nav-item-5'];
nav[5].textContent = siteContent['nav']['nav-item-6'];


const newNavItems = document.querySelector('nav');

const newNavItem1 = document.createElement('a');
newNavItem1.textContent = 'New1';
newNavItem1.href = '#';
newNavItem1.style.color = 'green';

const newNavItem2 = document.createElement('a');
newNavItem2.textContent = 'New2';
newNavItem2.href = '#';
newNavItem2.style.color = 'green';

newNavItems.prepend(newNavItem1);
newNavItems.appendChild(newNavItem2);


const ctaHeader = document.querySelector('.cta-text h1');
const ctaButton = document.querySelector('.cta-text button');
const ctaImg = document.querySelector('#cta-img');

let ctaH1 = document.querySelector(".cta h1");
ctaH1.innerHTML = "DOM<br> IS<br> AWESOME";
ctaButton.textContent = siteContent['cta']['button'];
ctaImg.src = siteContent['cta']['img-src'];


const sectionHeader = document.querySelectorAll('.main-content h4');

sectionHeader[0].textContent = siteContent['main-content']['features-h4'];
sectionHeader[1].textContent = siteContent['main-content']['about-h4'];
sectionHeader[2].textContent = siteContent['main-content']['services-h4'];
sectionHeader[3].textContent = siteContent['main-content']['product-h4'];
sectionHeader[4].textContent = siteContent['main-content']['vision-h4'];




const middleImage = document.querySelector('#middle-img');

middleImage.src = siteContent['main-content']['middle-img-src'];


const sectionContent = document.querySelectorAll('.main-content p');

sectionContent[0].textContent = siteContent['main-content']['features-content'];
sectionContent[1].textContent = siteContent['main-content']['about-content'];
sectionContent[2].textContent = siteContent['main-content']['services-content'];
sectionContent[3].textContent = siteContent['main-content']['product-content'];
sectionContent[4].textContent = siteContent['main-content']['vision-content'];



const contactHeader = document.querySelector('.contact h4');

contactHeader.textContent = siteContent['contact']['contact-h4'];



const contactContent = document.querySelectorAll('.contact p');

contactContent[0].innerHTML = siteContent['contact']['address'];
contactContent[1].textContent = siteContent['contact']['phone'];
contactContent[2].textContent = siteContent['contact']['email'];




const footer = document.querySelector('footer p');

footer.textContent = siteContent['footer']['copyright'];