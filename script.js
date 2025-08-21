// Arena Nexus Landing Page JavaScript
// Author: Arena Nexus Development Team
// Version: 1.0.0

document.addEventListener('DOMContentLoaded', function() {
    // Initialize the application
    init();
});

function init() {
    // Initialize all components
    initializeHeader();
    initializeAnimations();
    initializeProductShowcase();
    initializeContactButtons();
    initializeShareFunctionality();
    initializeScrollEffects();
    
    console.log('Arena Nexus Landing Page initialized successfully!');
}

/**
 * Header functionality
 */
function initializeHeader() {
    const menuToggle = document.getElementById('menuToggle');
    const shareBtn = document.getElementById('shareBtn');
    
    // Menu toggle functionality
    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            this.classList.toggle('active');
            // Add menu animation
            this.style.transform = this.classList.contains('active') ? 'rotate(90deg)' : 'rotate(0deg)';
            
            // Haptic feedback simulation
            if (navigator.vibrate) {
                navigator.vibrate(50);
            }
        });
    }
    
    // Header scroll effect
    let lastScrollTop = 0;
    const header = document.querySelector('.header');
    
    window.addEventListener('scroll', function() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        if (scrollTop > lastScrollTop && scrollTop > 100) {
            // Scrolling down
            header.style.transform = 'translateY(-100%)';
        } else {
            // Scrolling up
            header.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = scrollTop;
    }, { passive: true });
}

/**
 * Animation system
 */
function initializeAnimations() {
    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                entry.target.classList.add('animate-in');
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.product-category, .contact-btn');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(20px)';
        el.style.transition = 'all 0.6s ease-out';
        observer.observe(el);
    });
}

/**
 * Product showcase functionality
 */
function initializeProductShowcase() {
    const productCategories = document.querySelectorAll('.product-category');
    const moreOptionsBtn = document.querySelector('.more-options');
    
    // Add click handlers to product categories
    productCategories.forEach((category, index) => {
        category.addEventListener('click', function() {
            const categoryType = this.dataset.category;
            handleProductClick(categoryType, this);
            
            // Add ripple effect
            createRippleEffect(this, event);
        });
        
        // Add hover sound effect (if audio is enabled)
        category.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        category.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
    // More options functionality
    if (moreOptionsBtn) {
        moreOptionsBtn.addEventListener('click', function() {
            showProductOptions();
        });
    }
}

/**
 * Handle product category clicks
 */
function handleProductClick(categoryType, element) {
    // Add loading state
    element.classList.add('loading');
    
    // Simulate category interaction
    setTimeout(() => {
        element.classList.remove('loading');
        
        // Show category info
        showCategoryInfo(categoryType);
    }, 300);
    
    // Analytics tracking (if implemented)
    trackEvent('product_category_click', {
        category: categoryType,
        timestamp: new Date().toISOString()
    });
}

/**
 * Show category information
 */
function showCategoryInfo(categoryType) {
    const categoryInfo = {
        figures: {
            title: 'Action Figures & Miniaturas',
            description: 'Figuras colecionáveis dos seus animes favoritos com alta qualidade e detalhamento.'
        },
        keychains: {
            title: 'Chaveiros de Personagens',
            description: 'Chaveiros exclusivos com personagens icônicos do mundo dos animes.'
        },
        frames: {
            title: 'Quadros e Acessórios Geek',
            description: 'Quadros temáticos e acessórios para decorar seu ambiente geek.'
        },
        collectibles: {
            title: 'Produtos Colecionáveis Exclusivos',
            description: 'Itens raros e exclusivos para verdadeiros colecionadores.'
        }
    };
    
    const info = categoryInfo[categoryType];
    if (info) {
        showNotification(info.title, info.description);
    }
}

/**
 * Contact buttons functionality
 */
function initializeContactButtons() {
    const contactButtons = document.querySelectorAll('.contact-btn');
    const joinLink = document.querySelector('.join-link');
    const closeBtn = document.querySelector('.close-btn');
    
    // Add click handlers to contact buttons
    contactButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            const buttonType = this.className.split(' ').find(cls => cls.includes('-btn') && cls !== 'contact-btn');
            handleContactClick(buttonType, this);
            
            // Add ripple effect
            createRippleEffect(this, e);
        });
    });
    
    // Close join message
    if (closeBtn) {
        closeBtn.addEventListener('click', function() {
            joinLink.style.display = 'none';
        });
    }
}

/**
 * Handle contact button clicks
 */
function handleContactClick(buttonType, element) {
    // Track interaction
    trackEvent('contact_button_click', {
        button_type: buttonType,
        timestamp: new Date().toISOString()
    });
    
    // Add visual feedback
    element.style.transform = 'scale(0.95)';
    setTimeout(() => {
        element.style.transform = 'scale(1)';
    }, 150);
    
    // Handle specific button types
    switch(buttonType) {
        case 'whatsapp-btn':
            // WhatsApp is handled by the href attribute
            showNotification('WhatsApp', 'Redirecionando para o WhatsApp...');
            break;
        case 'location-btn':
            showLocationInfo();
            break;
        case 'vip-btn':
            showVipInfo();
            break;
        case 'instagram-btn':
            // Instagram is handled by the href attribute
            showNotification('Instagram', 'Redirecionando para o Instagram...');
            break;
    }
}

/**
 * Share functionality
 */
function initializeShareFunctionality() {
    const shareBtn = document.getElementById('shareBtn');
    
    if (shareBtn) {
        shareBtn.addEventListener('click', function() {
            handleShare();
        });
    }
}

/**
 * Handle sharing
 */
async function handleShare() {
    const shareData = {
        title: 'Arena Nexus - Colecionáveis de Anime',
        text: 'Confira a Arena Nexus - sua loja especializada em action figures, chaveiros e produtos colecionáveis de anime!',
        url: window.location.href
    };
    
    if (navigator.share) {
        try {
            await navigator.share(shareData);
            showNotification('Compartilhado', 'Obrigado por compartilhar a Arena Nexus!');
        } catch (err) {
            if (err.name !== 'AbortError') {
                fallbackShare(shareData);
            }
        }
    } else {
        fallbackShare(shareData);
    }
}

/**
 * Fallback share functionality
 */
function fallbackShare(shareData) {
    // Copy link to clipboard
    navigator.clipboard.writeText(shareData.url).then(() => {
        showNotification('Link copiado', 'Link da Arena Nexus copiado para a área de transferência!');
    }).catch(() => {
        // Show share options modal
        showShareModal(shareData);
    });
}

/**
 * Scroll effects
 */
function initializeScrollEffects() {
    let ticking = false;
    
    function updateScrollEffects() {
        const scrollPercent = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight);
        
        // Parallax effect for hero background
        const hero = document.querySelector('.hero');
        if (hero) {
            hero.style.transform = `translateY(${scrollPercent * 50}px)`;
        }
        
        ticking = false;
    }
    
    function requestTick() {
        if (!ticking) {
            requestAnimationFrame(updateScrollEffects);
            ticking = true;
        }
    }
    
    window.addEventListener('scroll', requestTick, { passive: true });
}

/**
 * Utility functions
 */

/**
 * Create ripple effect
 */
function createRippleEffect(element, event) {
    const ripple = document.createElement('div');
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    const x = event.clientX - rect.left - size / 2;
    const y = event.clientY - rect.top - size / 2;
    
    ripple.style.cssText = `
        position: absolute;
        width: ${size}px;
        height: ${size}px;
        left: ${x}px;
        top: ${y}px;
        background: radial-gradient(circle, rgba(255,255,255,0.3) 0%, transparent 70%);
        border-radius: 50%;
        transform: scale(0);
        animation: ripple 0.6s ease-out;
        pointer-events: none;
        z-index: 1;
    `;
    
    // Add ripple animation CSS if not exists
    if (!document.querySelector('#ripple-styles')) {
        const style = document.createElement('style');
        style.id = 'ripple-styles';
        style.textContent = `
            @keyframes ripple {
                to {
                    transform: scale(2);
                    opacity: 0;
                }
            }
        `;
        document.head.appendChild(style);
    }
    
    element.style.position = 'relative';
    element.style.overflow = 'hidden';
    element.appendChild(ripple);
    
    setTimeout(() => {
        ripple.remove();
    }, 600);
}

/**
 * Show notification
 */
function showNotification(title, message) {
    // Create notification element
    const notification = document.createElement('div');
    notification.style.cssText = `
        position: fixed;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        background: linear-gradient(135deg, #1a1a1a, #2a2a2a);
        color: white;
        padding: 15px 20px;
        border-radius: 10px;
        box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        z-index: 2000;
        border: 1px solid rgba(255,255,255,0.1);
        backdrop-filter: blur(10px);
        animation: slideDown 0.3s ease-out;
    `;
    
    notification.innerHTML = `
        <div style="font-weight: 600; margin-bottom: 5px;">${title}</div>
        <div style="font-size: 0.9rem; opacity: 0.8;">${message}</div>
    `;
    
    // Add slide animation
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideDown {
            from {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
            to {
                opacity: 1;
                transform: translateX(-50%) translateY(0);
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 3 seconds
    setTimeout(() => {
        notification.style.animation = 'slideUp 0.3s ease-out forwards';
        setTimeout(() => {
            notification.remove();
            style.remove();
        }, 300);
    }, 3000);
    
    // Add slideUp animation
    style.textContent += `
        @keyframes slideUp {
            to {
                opacity: 0;
                transform: translateX(-50%) translateY(-20px);
            }
        }
    `;
}

/**
 * Show location info
 */
function showLocationInfo() {
    showNotification('Loja Física', 'Em breve! Nossa loja física estará disponível para visitação.');
}

/**
 * Show VIP info
 */
function showVipInfo() {
    showNotification('Grupo VIP', 'Entre no nosso grupo VIP para ofertas exclusivas e lançamentos em primeira mão!');
}

/**
 * Show product options
 */
function showProductOptions() {
    showNotification('Produtos', 'Explore nossas categorias de produtos colecionáveis!');
}

/**
 * Show share modal
 */
function showShareModal(shareData) {
    // This would show a custom share modal
    // For now, just show a notification
    showNotification('Compartilhar', 'Use os botões de compartilhamento do seu navegador para compartilhar nossa loja!');
}

/**
 * Analytics tracking
 */
function trackEvent(eventName, eventData) {
    // This would integrate with analytics service
    console.log('Event tracked:', eventName, eventData);
    
    // Example: Google Analytics 4
    if (typeof gtag !== 'undefined') {
        gtag('event', eventName, eventData);
    }
}

/**
 * Error handling
 */
window.addEventListener('error', function(e) {
    console.error('Arena Nexus Error:', e.error);
    // Could send error to logging service
});

/**
 * Performance monitoring
 */
window.addEventListener('load', function() {
    // Monitor page load performance
    if ('performance' in window) {
        const loadTime = performance.now();
        console.log(`Arena Nexus loaded in ${loadTime.toFixed(2)}ms`);
    }
});

/**
 * Service Worker registration (for PWA capabilities)
 */
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker would be registered here for PWA functionality
        console.log('Service Worker support detected');
    });
}

/**
 * Keyboard navigation support
 */
document.addEventListener('keydown', function(e) {
    // Add keyboard shortcuts
    if (e.ctrlKey || e.metaKey) {
        switch(e.key) {
            case 'k':
                e.preventDefault();
                // Focus search or menu
                document.getElementById('menuToggle')?.focus();
                break;
            case '/':
                e.preventDefault();
                // Quick share
                handleShare();
                break;
        }
    }
});

/**
 * Touch gestures for mobile
 */
let touchStartY = 0;
let touchEndY = 0;

document.addEventListener('touchstart', function(e) {
    touchStartY = e.changedTouches[0].screenY;
}, { passive: true });

document.addEventListener('touchend', function(e) {
    touchEndY = e.changedTouches[0].screenY;
    handleGesture();
}, { passive: true });

function handleGesture() {
    const swipeThreshold = 100;
    const diff = touchStartY - touchEndY;
    
    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            // Swipe up - could trigger action
            console.log('Swipe up detected');
        } else {
            // Swipe down - could trigger refresh or menu
            console.log('Swipe down detected');
        }
    }
}
