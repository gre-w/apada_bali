const openPage1Button = document.getElementById('openPort');
const openPage2Button = document.getElementById('openPort1');
const openPage3Button = document.getElementById('openPort2');

openPage1Button.addEventListener('click', function() {
  window.open('./pages/portofolio-asb.html');
});
openPage2Button.addEventListener('click', function() {
  window.open('./pages/portofolio-ajb.html');
});
openPage3Button.addEventListener('click', function() {
  window.open('./pages/portofolio-afb.html');
});
