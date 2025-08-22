// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', async function(e) {
      e.preventDefault();
      
      try {
        const formData = new FormData(form);
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData
        });
        
        const result = await response.json();
        
        if (result.success) {
          // Hide the form
          form.style.display = 'none';
          
          // Create and show thank you message
          const thankYouMessage = document.createElement('div');
          thankYouMessage.className = 'thank-you-message';
          thankYouMessage.innerHTML = `
            <h3>Thank You!</h3>
            <p>Thank you for contacting Lyne Construction! We will get back to you soon.</p>
          `;
          form.parentNode.insertBefore(thankYouMessage, form.nextSibling);
        } else {
          alert('There was an error submitting the form. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('There was an error submitting the form. Please try again.');
      }
    });
  }
});

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
      photo: '/avanti/images/reviews/review-c.jpg',
      quote: '“I would absolutely recommend Daire and Lyne Construction to any homeowner looking to expertly and efficiently remodel or improve their home. ”',
      name: 'Emilie Oberhauser',
      role: 'Proud Homeowner'
    },
    {
      photo: '/avanti/images/reviews/review-b.png',
      quote: '“Very professional approach, good communication skills, offered advice on how it might be better. Good time keeper, things were done as promised, supervised all works on site.”',
      name: 'Mary Lyne',
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
