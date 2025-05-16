// Contact form submission handler
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert('Thank you for contacting Lyne Construction! We will get back to you soon.');
      form.reset();
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

    // Toggle menu
    hamburger.addEventListener('click', function() {
        this.classList.toggle('active');
        headerActions.classList.toggle('active');
        document.body.style.overflow = headerActions.classList.contains('active') ? 'hidden' : '';
    });

    // Mobile dropdown toggle
    if (hasDropdown) {
        hasDropdown.addEventListener('click', function(e) {
            if (window.innerWidth <= 1050) {
                e.preventDefault();
                e.stopPropagation();
                this.classList.toggle('active');
                servicesLink.classList.toggle('active');
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

    // Close menu when clicking a dropdown link
    dropdownLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            headerActions.classList.remove('active');
            document.body.style.overflow = '';
            if (hasDropdown) {
                hasDropdown.classList.remove('active');
                servicesLink.classList.remove('active');
            }
        });
    });

    // Close menu when clicking a main nav link
    navLinks.forEach(link => {
        if (!link.closest('.has-dropdown')) {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                headerActions.classList.remove('active');
                document.body.style.overflow = '';
                if (hasDropdown) {
                    hasDropdown.classList.remove('active');
                    servicesLink.classList.remove('active');
                }
            });
        }
    });

    // Close menu when clicking outside
    document.addEventListener('click', function(e) {
        if (!headerActions.contains(e.target) && !hamburger.contains(e.target)) {
            hamburger.classList.remove('active');
            headerActions.classList.remove('active');
            document.body.style.overflow = '';
            if (hasDropdown) {
                hasDropdown.classList.remove('active');
                servicesLink.classList.remove('active');
            }
        }
    });
}); 

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

// Gallery Modal Slider Functionality
(function() {
  const images = document.querySelectorAll('.gallery-grid img');
  const modal = document.getElementById('galleryModal');
  const modalImg = document.getElementById('galleryModalImg');
  const closeBtn = document.querySelector('.gallery-close');
  const prevBtn = document.querySelector('.gallery-prev');
  const nextBtn = document.querySelector('.gallery-next');
  let currentIdx = 0;
  const imgSrcs = Array.from(images).map(img => img.src);

  // Only enable modal slider on non-mobile devices
  function isMobile() {
    return window.innerWidth <= 768;
  }

  function openModal(idx) {
    currentIdx = idx;
    modal.classList.add('open');
    modalImg.src = imgSrcs[currentIdx];
    modalImg.alt = images[currentIdx].alt;
  }

  function closeModal() {
    modal.classList.remove('open');
    modalImg.src = '';
  }

  function showPrev() {
    currentIdx = (currentIdx - 1 + imgSrcs.length) % imgSrcs.length;
    modalImg.src = imgSrcs[currentIdx];
    modalImg.alt = images[currentIdx].alt;
  }

  function showNext() {
    currentIdx = (currentIdx + 1) % imgSrcs.length;
    modalImg.src = imgSrcs[currentIdx];
    modalImg.alt = images[currentIdx].alt;
  }

  images.forEach((img, idx) => {
    img.style.cursor = isMobile() ? 'default' : 'pointer';
    img.addEventListener('click', function handler() {
      if (!isMobile()) {
        openModal(idx);
      }
    });
  });

  if (!isMobile()) {
    closeBtn.addEventListener('click', closeModal);
    prevBtn.addEventListener('click', showPrev);
    nextBtn.addEventListener('click', showNext);

    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
      if (e.target === modal) closeModal();
    });

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
      if (!modal.classList.contains('open')) return;
      if (e.key === 'ArrowLeft') showPrev();
      if (e.key === 'ArrowRight') showNext();
      if (e.key === 'Escape') closeModal();
    });
  }
})();
