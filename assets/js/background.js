//Bg image 

document.addEventListener("DOMContentLoaded", function () {
    const images = [
      "../assets/port-img/render3.jpg", 
      "../assets/port-img/render2.jpg",
      "../assets/port-img/render1.jpg",
      "../assets/port-img/render4.jpg", 
      "../assets/port-img/render5.jpg", 
      "../assets/port-img/render6.jpg", 
       
    ];
  
    let currentImageIndex = 0;
    const backgroundImage = document.getElementById("backgroundImage");
  
    function fadeIn() {
      backgroundImage.style.transition = "opacity 1s";
      backgroundImage.style.opacity = 1;
    }
  
    function fadeOut() {
      backgroundImage.style.transition = "opacity 1s";
      backgroundImage.style.opacity = 0;
    }
  
    function changeBackgroundImage() {
      fadeOut();
  
      setTimeout(function () {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        backgroundImage.style.backgroundImage = `url('${images[currentImageIndex]}')`;
        fadeIn();
      }, 1000); // 1 sec fade out
    }
  
    // Initial fadeIn
    fadeIn();
  
    setInterval(changeBackgroundImage, 3000); // 3 seconds total (1 second fadeOut + 1 second fadeIn + 1 second wait)
  });
  
  