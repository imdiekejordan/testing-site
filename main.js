
// Menu Clicker
var menu = document.getElementsByClassName("hamburger-container");
for (var i = 0; i < menu.length; i++) {
    menu[i].addEventListener("click", function () {
        // Toggle between adding and removing the "active" class
        this.querySelector('.hamburger').classList.toggle('on');
        
        // Toggle between hiding and showing the active panel
        var nav = document.querySelector(".nav-exterior");
        if (nav.style.display === "block") {
            nav.style.display = "none";
        } else {
          nav.style.display = "block";
        }
    });
}
  
// Clicking for Dropdown Mobile Clicks
document.querySelectorAll(".dropdown > a").forEach(item => {
    item.addEventListener("click", function(e) {
      e.preventDefault();
      let dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
    });
});

//FAQ
document.addEventListener("DOMContentLoaded", function () {
  const faqPages = document.querySelectorAll("#faq-container .faq-page");

  faqPages.forEach((faq) => {
    faq.addEventListener("click", function () {
      // Toggle active class on the question
      this.classList.toggle("active");

      // Toggle the visibility of the answer
      const body = this.nextElementSibling;
      body.classList.toggle("show");

      // Toggle plus/minus icon
      const icon = this.querySelector("i");
      icon.classList.toggle("fa-plus");
      icon.classList.toggle("fa-minus");
    });
  });
});

// Gallery
document.addEventListener('DOMContentLoaded', function() {
  const mainImage = document.getElementById('main-image');
  const galleryImages = document.querySelectorAll('.small-image');

  galleryImages.forEach(image => {
    image.addEventListener('click', function() {
      // Swap the images
      const tempSrc = mainImage.src;
      mainImage.src = this.src;
      this.src = tempSrc;
    });
  });
});

fetch('https://get.geojs.io/v1/ip/geo.json')
  .then(response => response.json())
  .then(data => {
    const userState = data.region; // State like "Minnesota" or "Wisconsin"
    
    // Get elements by their IDs
    const phoneElement1 = document.getElementById('phone-number');
    const phoneElement2 = document.getElementById('phone-number-2');

    // Phone numbers for Minnesota and Superior
    const phoneNumbers = {
      'Minnesota': '(218) 343 - 3353',
      'Wisconsin': '(715) 781 - 6402' // Assuming Superior is in Wisconsin
    };

    // Set phone number based on user's state
    const phoneNumber = phoneNumbers[userState] || '218-343-3353'; // Default to MN number

    // Update both elements if they exist
    if (phoneElement1) {
      phoneElement1.textContent = phoneNumber;
      phoneElement1.href = `tel:${phoneNumber.replace(/\D/g, '')}`; // Clean format for tel links
    }
    
    if (phoneElement2) {
      phoneElement2.textContent = phoneNumber;
      phoneElement2.href = `tel:${phoneNumber.replace(/\D/g, '')}`;
    }
  })
  .catch(error => console.error('Error fetching location:', error));
