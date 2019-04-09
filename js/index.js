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
logo.setAttribute('src', siteContent["nav"]["img-src"]);

const navBar = document.querySelectorAll('a');
navBar[0].textContent = 'Services';
navBar[1].textContent = 'Product';
navBar[2].textContent = 'Vision';
navBar[3].textContent = 'Features';
navBar[4].textContent = 'About';
navBar[5].textContent = 'Contact';

navBar.forEach(function(currentValue) {
  currentValue.style.color = 'green';
});

// newNavBar = Array.from(navBar);
// console.log(newNavBar);
const parentNav = document.querySelector('nav');
console.log(parentNav);

const newATag = document.createElement('a');
const anotherNewATag = document.createElement('a');
parentNav.appendChild(newATag);
parentNav.appendChild(anotherNewATag);
anotherNewATag.textContent = 'Go Fish';
newATag.textContent = 'Eucher';




const headerImg = document.querySelector('#cta-img');
headerImg.src = 'file:///C:/Users/lesle/Documents/CODE%20PROJECTS/DOM-I/img/header-img.png';
headerImg.alt = 'Circular image of code floating against a black background.';

const ctaText = document.querySelector('.cta-text h1');
//console.log(ctaText);
ctaText.textContent = 'Dom is awesome';
//ctaText.style.justifyContent = 'center';
// trying to fix word placement, haven't gotten it yet.

const ctaBtn = document.querySelector('button');
//console.log(ctaBtn);
ctaBtn.textContent = 'Get Started';

const mainContentHeaders = document.querySelectorAll('.text-content h4');
//console.log(mainContentHeaders);
mainContentHeaders[0].textContent = 'Features';
mainContentHeaders[1].textContent = 'About';
mainContentHeaders[2].textContent = 'Services';
mainContentHeaders[3].textContent = 'Product';
mainContentHeaders[4].textContent = 'Vision';

const mainContentPtags = document.querySelectorAll('.text-content p');
//console.log(mainContentPtags);
mainContentPtags[0].textContent = 'Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentPtags[1].textContent = 'About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentPtags[2].textContent = 'Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentPtags[3].textContent = 'Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';
mainContentPtags[4].textContent = 'Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.';

const midPageImg = document.querySelector('.middle-img');
midPageImg.src = 'file:///C:/Users/lesle/Documents/CODE%20PROJECTS/DOM-I/img/mid-page-accent.jpg';
midPageImg.alt = 'Graphic of glowing code against a blue and black background.';

const contactHeader = document.querySelector('.contact h4');
contactHeader.textContent = 'Contact';

const contactInfo = document.querySelectorAll('.contact p');
//console.log(contactInfo);
contactInfo[0].textContent = '123 Way 456 Street \r\n' //tried several things to do a carriage return, haven't gotten it yet.
contactInfo[0].textContent += 'Somewhere, USA';
contactInfo[1].textContent = '1 (888) 888-8888';
contactInfo[2].textContent = 'sales@greatidea.io'; 

const footer = document.querySelector('footer p');
footer.textContent = 'Copyright Great Idea! 2018';