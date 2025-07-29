// === Header ===
document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.hamburger-menu');
  const headerActions = document.querySelector('.header-actions');
  const navLinks = document.querySelectorAll('.header-actions nav a');
  const hasDropdown = document.querySelector('.has-dropdown');
  const dropdownLinks = document.querySelectorAll('.dropdown-menu a');
  const servicesLink = document.querySelector('.has-dropdown > a');
  const mainNavItems = document.querySelectorAll('.header-actions nav > ul > li:not(.has-dropdown)');

  // Toggle menu
  hamburger.addEventListener('click', function(e) {
      e.stopPropagation();
      this.classList.toggle('active');
      headerActions.classList.toggle('active');
      
      // Reset services dropdown state when opening/closing menu
      if (hasDropdown) {
          hasDropdown.classList.remove('active');
          servicesLink.classList.remove('active');
          const dropdownMenu = hasDropdown.querySelector('.dropdown-menu');
          if (dropdownMenu) {
              dropdownMenu.style.display = 'none';
          }
      }
  });

  // Close menu when clicking the overlay
  headerActions.addEventListener('click', function(e) {
      if (e.target === this) {
          hamburger.classList.remove('active');
          headerActions.classList.remove('active');
          if (hasDropdown) {
              hasDropdown.classList.remove('active');
              servicesLink.classList.remove('active');
              const dropdownMenu = hasDropdown.querySelector('.dropdown-menu');
              if (dropdownMenu) {
                  dropdownMenu.style.display = 'none';
              }
          }
      }
  });

  // Mobile dropdown toggle
  if (hasDropdown) {
      servicesLink.addEventListener('click', function(e) {
          if (window.innerWidth <= 1050) {
              e.preventDefault();
              e.stopPropagation();
              hasDropdown.classList.toggle('active');
              this.classList.toggle('active');
              const dropdownMenu = hasDropdown.querySelector('.dropdown-menu');
              if (dropdownMenu) {
                  dropdownMenu.style.display = hasDropdown.classList.contains('active') ? 'block' : 'none';
              }
          }
      });
  }

  // Desktop hover handling
  if (hasDropdown) {
      hasDropdown.addEventListener('mouseenter', function() {
          if (window.innerWidth > 1050) {
              this.classList.add('active');
              servicesLink.classList.add('active');
          }
      });

      hasDropdown.addEventListener('mouseleave', function() {
          if (window.innerWidth > 1050) {
              this.classList.remove('active');
              servicesLink.classList.remove('active');
          }
      });
  }

  // Handle dropdown link clicks
  dropdownLinks.forEach(link => {
      link.addEventListener('click', function(e) {
          e.stopPropagation();
          // Allow the link to navigate
          hamburger.classList.remove('active');
          headerActions.classList.remove('active');
          if (hasDropdown) {
              hasDropdown.classList.remove('active');
              servicesLink.classList.remove('active');
              const dropdownMenu = hasDropdown.querySelector('.dropdown-menu');
              if (dropdownMenu) {
                  dropdownMenu.style.display = 'none';
              }
          }
      });
  });

  // Close menu when clicking a main nav link
  navLinks.forEach(link => {
      if (!link.closest('.has-dropdown')) {
          link.addEventListener('click', () => {
              hamburger.classList.remove('active');
              headerActions.classList.remove('active');
              if (hasDropdown) {
                  hasDropdown.classList.remove('active');
                  servicesLink.classList.remove('active');
                  const dropdownMenu = hasDropdown.querySelector('.dropdown-menu');
                  if (dropdownMenu) {
                      dropdownMenu.style.display = 'none';
                  }
              }
          });
      }
  });
});

// FAQ
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


// === Review Section Switcher ===
document.addEventListener('DOMContentLoaded', function () {
  const reviews = [
    {
      photo: '/avanti/images/testimonials/review-a.jpg',
      quote: '“Avanti is AMAZING! Luis and his team did an incredible job at adding a 220 on my backyard and helping me set up my sauna! They did everything so fast and with great knowledge! They also did everything according to code!”',
      name: 'Marisol L.',
      role: 'Proud Homeowner'
    },
    {
      photo: '/avanti/images/testimonials/review-b.jpg',
      quote: '“Luis and Nichole were very professional and understood exactly what we wanted. They guided us through the whole process and made sure we were satisfied at every step of the way. I would highly recommend this team to everyone.”',
      name: 'David G.',
      role: 'Proud Homeowner'
    },
    {
      photo: '/avanti/images/testimonials/review-c.jpg',
      quote: '“This is an example of what customers look for, honest, open communication, genuine and prompt service. I HIGHLY RECOMMEND Luis, Jorge, and Avanti Construction for your future home projects!!”',
      name: 'Melissa D.',
      role: 'Proud Homeowner'
    },
    {
      photo: '/avanti/images/testimonials/review-d.jpg',
      quote: '“He re-did our bathroom after some water damage and it came out beautiful! I\'m never using another company ever again”',
      name: 'Mario C.',
      role: 'Proud Homeowner'
    },
  ];

  let currentReview = 0;

  const avatarImg = document.querySelector('#reviews .reviews-avatar img');
  const quoteEl = document.querySelector('#reviews .reviews-quote');
  const nameEl = document.querySelector('#reviews .reviews-name');
  const roleEl = document.querySelector('#reviews .reviews-role');
  const leftBtn = document.querySelector('.reviews-arrow-left');
  const rightBtn = document.querySelector('.reviews-arrow-right');

  function showReview(idx) {
    const review = reviews[idx];
    avatarImg.src = review.photo;
    quoteEl.textContent = review.quote;
    nameEl.textContent = review.name;
    roleEl.textContent = review.role;
  }

  function nextReview() {
    currentReview = (currentReview + 1) % reviews.length;
    showReview(currentReview);
  }

  function prevReview() {
    currentReview = (currentReview - 1 + reviews.length) % reviews.length;
    showReview(currentReview);
  }

  // Initial display
  showReview(currentReview);

  if (leftBtn && rightBtn) {
    leftBtn.addEventListener('click', function () {
      prevReview();
    });
    rightBtn.addEventListener('click', function () {
      nextReview();
    });
  }
});

