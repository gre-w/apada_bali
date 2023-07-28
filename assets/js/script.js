const hamburgerMenu = document.getElementById('hamburgerMenu');
const mobileMenu = document.getElementById('mobileMenu');
const menuItems = document.getElementById('menuItems');


hamburgerMenu.addEventListener('click', function() {
  mobileMenu.classList.toggle('hidden');
});

// Close the mobile menu when clicking outside of it
document.addEventListener('click', function(event) {
  if (!menuItems.contains(event.target) && !hamburgerMenu.contains(event.target)) {
    mobileMenu.classList.add('hidden');
  }
});



