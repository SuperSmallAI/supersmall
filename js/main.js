// Lightweight replacement for Webflow JS - ~5KB vs 556KB

// Mobile Navigation Toggle
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.querySelector('.navigation-mobile-menu');
  const navMenu = document.querySelector('.navigation-menu');

  console.log('Nav toggle:', navToggle);
  console.log('Nav menu:', navMenu);

  if (navToggle && navMenu) {
    navToggle.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      console.log('Hamburger clicked!');
      navMenu.classList.toggle('open');
      navToggle.classList.toggle('active');
      console.log('Menu has open class:', navMenu.classList.contains('open'));
    });

    // Close menu when clicking on a navigation link
    const navLinks = navMenu.querySelectorAll('.navigation-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
      });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!navMenu.contains(e.target) && !navToggle.contains(e.target)) {
        navMenu.classList.remove('open');
        navToggle.classList.remove('active');
      }
    });
  }
});

// Fade-in animations on scroll (exclude hero heading which has its own animation)
const fadeElements = document.querySelectorAll('[data-w-id]:not(.hero-heading-animated)');
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = '1';
      entry.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.1 });

fadeElements.forEach(el => {
  el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
  el.style.transform = 'translateY(20px)';
  observer.observe(el);
});

// FAQ Accordions
const faqWrappers = document.querySelectorAll('.faq-question-wrapper');
faqWrappers.forEach(wrapper => {
  wrapper.addEventListener('click', () => {
    const card = wrapper.closest('.timeline-card-copy');
    const answer = card.querySelector('.paragraph-small-12');

    // Toggle answer visibility
    const isOpen = wrapper.classList.contains('open');

    if (isOpen) {
      wrapper.classList.remove('open');
      answer.style.maxHeight = '0';
      answer.style.opacity = '0';
      answer.style.marginTop = '0';
    } else {
      wrapper.classList.add('open');
      answer.style.maxHeight = answer.scrollHeight + 'px';
      answer.style.opacity = '1';
      answer.style.marginTop = '16px';
    }
  });
});

// Initialize FAQs as closed (only target FAQ paragraphs, not timeline cards)
document.querySelectorAll('.timeline-card-copy .paragraph-small-12').forEach(answer => {
  answer.style.maxHeight = '0';
  answer.style.opacity = '0';
  answer.style.overflow = 'hidden';
  answer.style.transition = 'max-height 0.3s ease, opacity 0.3s ease, margin-top 0.3s ease';
  answer.style.marginTop = '0';
});

// Lottie Animation (lightweight alternative - CSS animation)
const lottieEl = document.querySelector('.lottie-animation');
if (lottieEl) {
  lottieEl.style.animation = 'bounce 2s ease-in-out infinite';
}

// Enhanced scroll animations for sections
const scrollAnimationObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('animate');
      // Optional: unobserve after animation to improve performance
      // scrollAnimationObserver.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.15,
  rootMargin: '0px 0px -50px 0px'
});

// Apply animations to different sections
document.addEventListener('DOMContentLoaded', () => {
  // Feature card grids - fade up (animations disabled)
  // document.querySelectorAll('.feature-card-grid, .feature-cards').forEach(el => {
  //   el.classList.add('scroll-fade-up');
  //   scrollAnimationObserver.observe(el);
  // });

  // Timeline section - slide from left (animations disabled)
  // document.querySelectorAll('.timeline-grid').forEach(el => {
  //   el.classList.add('scroll-slide-left');
  //   scrollAnimationObserver.observe(el);
  // });

  // Content grid sections - slide from right (animations disabled)
  // document.querySelectorAll('.content-grid').forEach(el => {
  //   el.classList.add('scroll-slide-right');
  //   scrollAnimationObserver.observe(el);
  // });

  // FAQ section - scale in (animations disabled)
  // document.querySelectorAll('.faq-grid').forEach(el => {
  //   el.classList.add('stagger-children');
  //   scrollAnimationObserver.observe(el);
  // });

  // Individual timeline steps - stagger animation (animations disabled)
  // document.querySelectorAll('.timeline-column').forEach(el => {
  //   el.classList.add('stagger-children');
  //   scrollAnimationObserver.observe(el);
  // });

  // Section headers - rotate in (animations removed)
  // document.querySelectorAll('.section-regular-3, .section-large-7, .section-regular-5').forEach(el => {
  //   scrollAnimationObserver.observe(el);
  // });
});
