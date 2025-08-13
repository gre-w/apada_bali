document.addEventListener('DOMContentLoaded', function () {
  const openPage1Button = document.getElementById('openASBPort');
  const openPage2Button = document.getElementById('openAJBPort');
  const openPage3Button = document.getElementById('openAFBPort');

  openPage1Button.addEventListener('click', () => {
    window.open('./pages/portofolio-asb.html');
  });
  openPage2Button.addEventListener('click', () => {
    window.open('./pages/portofolio-ajb.html');
  });
  openPage3Button.addEventListener('click', () => {
    window.open('./pages/portofolio-afb.html');
  });
});
