
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  iconMenu.addEventListener("click", closeMobileMenu);
}

const menuLinks = document.getElementsByClassName('link');
for (const menuLink of menuLinks) {
  menuLink.addEventListener("click", closeMobileMenu)
}

function closeMobileMenu() {
  const bodyMenu = document.querySelector('.menu__body');
  const muneLogo = document.querySelector('.header__logo-img');
  
  document.body.classList.toggle('_lock');
  iconMenu.classList.toggle('_active');
  bodyMenu.classList.toggle('_active');
  muneLogo.classList.toggle('_active');


}

const btnSend = document.getElementById('sendFrom');
btnSend.addEventListener("click", function () {
  const inputEmail = document.getElementById('inputEmail');
  const inputName = document.getElementById('inputName');

  const sendInfo = document.getElementById('sendInfo');
  const thanksBlock = document.getElementById('thanksBlock');

  const lines = document.querySelectorAll('.vertical-lines__item');

  if (IsValidInput(inputName) && IsValidInput(inputEmail)) {
    sendInfo.style.display = "none";
    thanksBlock.style.display = "block";

    for (let i = 0; i < lines.length; i++) {
      lines[i].style.height = "3395px";
    }
  }
});

function IsValidInput(input) {
  return input.validity.valid;
}


const targetsProperties = new Map();

targetsProperties.set("bannerNavigation", { color: "white", name: "Banner" });
targetsProperties.set("aboutUsNavigation", { color: "black", name: "About" });
targetsProperties.set("servicesNavigation", { color: "black", name: "Services" });
targetsProperties.set("contactNavigation", { color: "white", name: "Contact" });


const navItems = document.getElementsByClassName('nav-item');

const spans = Array.from(document.getElementsByClassName('navigationName'));
let links = Array.from(document.getElementsByClassName('scroll-navigation__li'));

$(window).on('activate.bs.scrollspy', function (e, obj) {

  let targetProperties = targetsProperties.get(e.target.id.toString());

  setName(targetProperties.name, e.target);
  setColor(targetProperties.color)
});

function setName(name, target) {
  spans.map(item => {
    let span = item;
    span.innerText = "";
    return span;
  });
  target.querySelector('span').innerText = name;
}

function setColor(color) {
  links.map(item => {
    let link = item;
    link.style.color = color;
    return link
  })
}
