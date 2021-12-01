
const iconMenu = document.querySelector('.menu__icon');
if (iconMenu) {
  const bodyMenu = document.querySelector('.menu__body');
  iconMenu.addEventListener("click", function (params) {
    document.body.classList.toggle('_lock');
    iconMenu.classList.toggle('_active');
    bodyMenu.classList.toggle('_active');
  });
}

const btnSend = document.getElementById('sendFrom');
btnSend.addEventListener("click", function () {
  const inputEmail =  document.getElementById('inputEmail');
  const inputName =  document.getElementById('inputName');

  const sendInfo = document.getElementById('sendInfo');
  const thanksBlock = document.getElementById('thanksBlock');
  
  if (IsValidInput(inputName) && IsValidInput(inputEmail)) {
    sendInfo.style.display = "none";
    thanksBlock.style.display = "block";
  }
});

function IsValidInput(input) {
  return input.validity.valid;
}



// const mapInfo = new Map();
// mapInfo.set(document.getElementById("bannerContent"), { color: "white" });
// mapInfo.set(document.getElementById("aboutContent"), { color: "black" });
// mapInfo.set(document.getElementById("servicesContent"), { color: "black" });

// window.addEventListener('scroll', function () {

//   for (const key of mapInfo.keys()) {
//     const domRect = key.getBoundingClientRect();
//     if (domRect.top >= 0 && domRect.bottom >= 0) {
//       console.log(key);
//     }
//   }
// });
