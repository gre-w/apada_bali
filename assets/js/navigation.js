const openPage1Button = document.getElementById('openPort');
const openPage2Button = document.getElementById('openPort1');
const openPage3Button = document.getElementById('openPort2');

openPage1Button.addEventListener('click', function() {
  window.open('./pages/portofolio.html');
});
openPage2Button.addEventListener('click', function() {
  window.open('./pages/portofolio2.html');
});
openPage3Button.addEventListener('click', function() {
  window.open('./pages/afb.html');
});
