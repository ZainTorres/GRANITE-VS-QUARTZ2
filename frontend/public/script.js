// Material data for interactive comparison
const materialData = {
    granite: {
        title: "Natural Granite",
        pros: [
            "Unique natural patterns - no two slabs identical",
            "Heat resistant to 1200°F", 
            "Adds significant home value"
        ],
        cons: [
            "Requires periodic sealing every 1-2 years",
            "Can stain if not sealed properly"
        ]
    },
    quartz: {
        title: "Engineered Quartz",
        pros: [
            "Non-porous surface - never needs sealing",
            "Consistent patterns and colors",
            "Stain and scratch resistant"
        ],
        cons: [
            "Can be damaged by excessive heat",
            "Limited outdoor use (UV sensitive)"
        ]
    }
};

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Initialize material toggle with granite
    toggleMaterial('granite');
    
    // Smooth scrolling for navigation links
    initSmoothScrolling();
    
    // Initialize scroll animations
    initScrollAnimations();
    
    // Initialize contact form
    initContactForm();
    
    // Handle scroll effects
    handleScrollEffects();
});

// Material toggle functionality
function toggleMaterial(material) {
    const buttons = document.querySelectorAll('.toggle-btn');
    const data = materialData[material];
    
    // Update button states
    buttons.forEach(btn => {
        btn.classList.remove('active');
        if (btn.dataset.material === material) {
            btn.classList.add('active');
        }
    });
    
    // Update content
    document.getElementById('materialTitle').textContent = data.title;
    
    // Update pros list
    const prosList = document.getElementById('prosList');
    prosList.innerHTML = '';
    data.pros.forEach(pro => {
        const li = document.createElement('li');
        li.textContent = pro;
        prosList.appendChild(li);
    });
    
    // Update cons list
    const consList = document.getElementById('consList');
    consList.innerHTML = '';
    data.cons.forEach(con => {
        const li = document.createElement('li');
        li.textContent = con;
        consList.appendChild(li);
    });
}

// FAQ toggle functionality
function toggleFaq(element) {
    const faqItem = element.parentElement;
    const isActive = faqItem.classList.contains('active');
    
    // Close all FAQ items
    document.querySelectorAll('.faq-item').forEach(item => {
        item.classList.remove('active');
    });
    
    // Open clicked item if it wasn't already active
    if (!isActive) {
        faqItem.classList.add('active');
    }
}

// Modal functionality
function openContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeContactModal() {
    const modal = document.getElementById('contactModal');
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close modal when clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('contactModal');
    if (e.target === modal) {
        closeContactModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeContactModal();
    }
});

// Smooth scrolling for navigation
function initSmoothScrolling() {
    const navLinks = document.querySelectorAll('.nav-link');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
}

// Scroll animations
function initScrollAnimations() {
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);
    
    // Observe elements for scroll animations
    const animateElements = document.querySelectorAll('.glassmorphic, .use-case-card, .testimonial-card, .faq-item');
    animateElements.forEach(el => {
        el.classList.add('reveal');
        observer.observe(el);
    });
}

// Contact form handling
function initContactForm() {
    const form = document.getElementById('contactForm');
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {};
        for (let [key, value] of formData.entries()) {
            data[key] = value;
        }
        
        // Simulate form submission
        const submitBtn = form.querySelector('button[type="submit"]');
        const originalText = submitBtn.innerHTML;
        
        submitBtn.innerHTML = 'Sending...';
        submitBtn.disabled = true;
        
        setTimeout(() => {
            // Show success message
            showSuccessMessage();
            
            // Reset form
            form.reset();
            
            // Reset button
            submitBtn.innerHTML = originalText;
            submitBtn.disabled = false;
            
            // Close modal after delay
            setTimeout(() => {
                closeContactModal();
            }, 2000);
        }, 2000);
    });
}

// Success message
function showSuccessMessage() {
    const modalContent = document.querySelector('.modal-content');
    const successHTML = `
        <div class="success-message" style="text-align: center; padding: 3rem 2rem;">
            <div style="width: 4rem; height: 4rem; background: linear-gradient(135deg, #f86fc7, #8273f2); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 1rem; color: white; font-size: 2rem;">✓</div>
            <h3 style="font-size: 1.5rem; color: #333; margin-bottom: 0.5rem;">Thank You!</h3>
            <p style="color: #666; font-size: 1rem;">We'll contact you within 24 hours with your free quote for <span class="highlight-text">granite or quartz countertops</span>.</p>
        </div>
    `;
    
    modalContent.innerHTML = successHTML;
}

// Handle scroll effects
function handleScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollY = window.pageYOffset;
        const header = document.querySelector('.header');
        
        // Header background opacity
        if (scrollY > 50) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
        } else {
            header.style.background = 'rgba(255, 255, 255, 0.8)';
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick);
}

// Parallax effects for hero section
function initParallaxEffects() {
    const hero = document.querySelector('.hero');
    const heroBg = document.querySelector('.hero-bg');
    
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        
        if (heroBg && scrolled < window.innerHeight) {
            heroBg.style.transform = `translateY(${rate}px)`;
        }
    });
}

// Initialize parallax on load
window.addEventListener('load', initParallaxEffects);

// Keyboard navigation for accessibility
document.addEventListener('keydown', function(e) {
    // Tab navigation for modal
    const modal = document.getElementById('contactModal');
    if (modal.classList.contains('show') && e.key === 'Tab') {
        const focusableElements = modal.querySelectorAll(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey) {
            if (document.activeElement === firstElement) {
                lastElement.focus();
                e.preventDefault();
            }
        } else {
            if (document.activeElement === lastElement) {
                firstElement.focus();
                e.preventDefault();
            }
        }
    }
});

// Table row hover effects
document.addEventListener('DOMContentLoaded', function() {
    const tableRows = document.querySelectorAll('.table-row');
    
    tableRows.forEach(row => {
        row.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.02)';
            this.style.transition = 'all 0.2s ease';
        });
        
        row.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1)';
        });
    });
});

// Enhanced button hover effects
function initButtonEffects() {
    const buttons = document.querySelectorAll('.btn-gradient, .btn-primary');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
        
        button.addEventListener('mousedown', function() {
            this.style.transform = 'translateY(0) scale(0.98)';
        });
        
        button.addEventListener('mouseup', function() {
            this.style.transform = 'translateY(-2px) scale(1.05)';
        });
    });
}

// Initialize button effects when DOM is loaded
document.addEventListener('DOMContentLoaded', initButtonEffects);

// Intersection Observer for counters (if needed)
function initCounterAnimations() {
    const counters = document.querySelectorAll('[data-count]');
    
    const counterObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const target = parseInt(entry.target.dataset.count);
                const element = entry.target;
                let count = 0;
                const increment = target / 100;
                
                const timer = setInterval(() => {
                    count += increment;
                    if (count >= target) {
                        element.textContent = target + '+';
                        clearInterval(timer);
                    } else {
                        element.textContent = Math.floor(count) + '+';
                    }
                }, 20);
                
                counterObserver.unobserve(entry.target);
            }
        });
    });
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
}

// Mobile menu toggle (if needed)
function initMobileMenu() {
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const nav = document.querySelector('.nav');
    
    if (mobileMenuBtn && nav) {
        mobileMenuBtn.addEventListener('click', function() {
            nav.classList.toggle('active');
            this.classList.toggle('active');
        });
    }
}

// Performance optimization - Debounced resize handler
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Handle window resize
const handleResize = debounce(function() {
    // Recalculate any size-dependent elements
    const modal = document.querySelector('.modal-content');
    if (modal) {
        // Adjust modal position if needed
    }
}, 250);

window.addEventListener('resize', handleResize);

// Form validation
function validateForm(form) {
    const requiredFields = form.querySelectorAll('[required]');
    let isValid = true;
    
    requiredFields.forEach(field => {
        if (!field.value.trim()) {
            field.style.borderColor = '#ef4444';
            isValid = false;
        } else {
            field.style.borderColor = '#e5e7eb';
        }
    });
    
    // Email validation
    const emailField = form.querySelector('[type="email"]');
    if (emailField && emailField.value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailField.value)) {
            emailField.style.borderColor = '#ef4444';
            isValid = false;
        }
    }
    
    return isValid;
}

// Enhanced form submission with validation
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            if (validateForm(this)) {
                // Process form as before
                initContactForm();
            } else {
                // Show validation error
                alert('Please fill in all required fields correctly.');
            }
        });
    }
});

// Lazy loading for images (if any are added)
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => {
        imageObserver.observe(img);
    });
}

// Initialize all features
document.addEventListener('DOMContentLoaded', function() {
    initLazyLoading();
    initCounterAnimations();
    initMobileMenu();
});