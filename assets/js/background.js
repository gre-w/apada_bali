// Background image rotator with fade effect

document.addEventListener("DOMContentLoaded", () => {
  const images = [
    "./assets/port-img/render3.webp",
    "./assets/port-img/render2.webp",
    "./assets/port-img/render4.webp",
    "./assets/port-img/render5.webp",
    "./assets/port-img/render6.webp",
  ];
  const FADE_DURATION = 1500;
  const INTERVAL = 3000;
  let currentImageIndex = 0;
  const backgroundImage = document.getElementById("backgroundImage");

  if (!backgroundImage) return;

  const setOpacity = (value) => {
    backgroundImage.style.transition = `opacity ${FADE_DURATION / 2000}s`;
    backgroundImage.style.opacity = value;
  };

  const setBackground = (index) => {
    backgroundImage.style.backgroundImage = `url('${images[index]}')`;
  };

  const changeBackgroundImage = () => {
    setOpacity(0);
    setTimeout(() => {
      currentImageIndex = (currentImageIndex + 1) % images.length;
      setBackground(currentImageIndex);
      setOpacity(1);
    }, FADE_DURATION);
  };

  // Initial setup
  setBackground(currentImageIndex);
  setOpacity(1);
  setInterval(changeBackgroundImage, INTERVAL);
});

