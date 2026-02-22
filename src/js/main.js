// ========================================
// CREW CUTZ - MAIN JAVASCRIPT
// ========================================

// === Translation Data ===
const translations = {
    hu: {
        nav: {
            home: 'Kezdőlap',
            booking: 'Foglalás',
            portfolio: 'Képek',
            barbers: 'Borbélyok',
            contact: 'Elérhetőség',
            login: 'Bejelentkezés'
        },
        hero: {
            title: 'Ahol a stílus találkozik a közösséggel',
            findBarber: 'Foglalj Most!',
            feature1: 'Modern és klasszikus fazonok',
            feature2: 'Barátságos légkör',
            feature3: 'Online bejelentkezés – gyors, kényelmes, sorban állás nélkül',
            cta: 'FOGLALJ MOST',
            whatWeDo: 'RÓLUNK',
            explore1: 'Fedezd fel',
            meetBarbers: 'BORBÉLYAINK',
            explore2: 'Ismerd meg őket'
        },
        about: {
            title: 'Rólunk',
            subtitle: 'Miért válassz minket?',
            text: 'A Crew Cutz nem csak egy borbélyüzlet – ez egy hely, ahol stílus, precizitás és jó hangulat találkozik. Csapatunk tapasztalt borbélyokból áll, akik szenvedélyesen dolgoznak azért, hogy minden vendég magabiztosan és elégedetten távozzon. Legyen szó klasszikus fazonról, modern fade-ről vagy szakállformázásról, nálunk profi kezekben vagy. Prémium termékeket használunk, figyelünk minden részletre, és garantáljuk, hogy az élmény legalább olyan fontos, mint az eredmény.',
            feature1: {
                title: 'Precíz munka',
                text: 'Minden vágás mögött évek tapasztalata és a részletekre való odafigyelés áll.'
            },
            feature2: {
                title: 'Barátságos légkör',
                text: 'Nálunk otthon érzed magad – lazíts, miközben mi a stílusodon dolgozunk.'
            },
            feature3: {
                title: 'Percpontos kezdés',
                text: 'Online foglalás, nincs várakozás – a Te időd is értékes.'
            }
        },
        carousel: {
            slide1: {
                title: 'MIT CSINÁLUNK ÉRTED',
                cta: 'Nézd Meg A Videót'
            },
            slide2: {
                title: 'ISMERJE MEG FODRÁSZAINKAT',
                cta: 'Nézd Meg A Videót'
            },
            slide3: {
                title: 'PRÉMIUM SZOLGÁLTATÁSOK',
                cta: 'Nézd Meg A Videót'
            }
        },
        booking: {
            header: {
                title: '<span class="accent-underline">Egyszerű foglalás</span>',
                subtitle: 'Gyors, egyszerű online foglalás – válaszd ki a dátumot és a szolgáltatást!'
            },
            title: 'Foglalás',
            subtitle: 'Foglalj helyet online – gyorsan és egyszerűen',
            form: {
                name: 'Név',
                phone: 'Telefon',
                email: 'Email',
                date: 'Dátum',
                time: 'Dátum és óra',
                service: 'Szolgáltatás',
                selectService: 'Válassz szolgáltatást',
                haircut: 'Hajvágás',
                beard: 'Szakállformázás',
                combo: 'Kombináció',
                notes: 'Megjegyzés (opcionális)',
                submit: 'Hely lefoglalása'
            }
        },
        portfolio: {
            header: {
                title: 'A LEGJOBB <span class="accent-underline">MUNKÁINK</span>',
                subtitle: 'Munkáink a legjobb eredményeket beszélik – rátermettség, kreativitás és precizitás'
            },
            title: 'Képek',
            subtitle: 'Munkáink a legjobb eredményeket beszélik',
            style: 'Stílus'
        },
        barbers: {
            header: {
                title: 'ISMERD MEG A <span class="accent-underline">CSAPATUNKAT</span>',
                subtitle: 'Tapasztalt szakemberek a Te szolgálatodban – szenvedély, precizitás, professzionalizmus'
            },
            title: 'Borbélyok',
            subtitle: 'Tapasztalt szakemberek a Te szolgálatodban',
            barber1: {
                name: 'Egervári Márk',
                title: 'Barber',
                description: ''
            },
            barber2: {
                name: 'Kányai Domonkos',
                title: 'Barber',
                description: ''
            }
        },
        form: {
            name: 'Név',
            email: 'Email',
            message: 'Üzenet',
            send: 'Küldés'
        },
        contact: {
            title: '<span style="color: var(--primary)">Kapcsolat</span>',
            subtitle: 'Látogass meg minket vagy írj nekünk – várunk szeretettel!',
            form: {
                title: 'Írj nekünk'
            },
            address: {
                title: 'Cím',
                value: '8200 Veszprém, Megyeház tér 2<br>(Bejárat az Óvári Ferenc út felöl)'
            },
            phone: {
                title: 'Telefon',
                value: '+36 XX XXX XXXX'
            },
            email: {
                title: 'Email',
                value: 'info@crewcutz.hu'
            },
            hours: {
                title: 'Nyitvatartás',
                value: 'Hétfő: 11:30 - 20:00<br>Kedd: 11:30 - 20:00<br>Szerda: 11:30 - 20:00<br>Csütörtök: 11:30 - 20:00<br>Péntek: 11:30 - 20:00<br>Szombat: Zárva<br>Vasárnap: Zárva'
            }
        },
        footer: {
            tagline: 'Modern és klasszikus fazonok',
            rights: 'Minden jog fenntartva.'
        }
    },
    en: {
        nav: {
            home: 'Home',
            booking: 'Booking',
            portfolio: 'Portfolio',
            barbers: 'Barbers',
            contact: 'Contact',
            login: 'Log In'
        },
        hero: {
            title: 'Where Style Meets Community',
            findBarber: 'Book Now!',
            feature1: 'Modern and classic styles',
            feature2: 'Friendly atmosphere',
            feature3: 'Online booking – fast, convenient, no waiting',
            cta: 'BOOK NOW',
            whatWeDo: 'ABOUT US',
            explore1: 'Explore',
            meetBarbers: 'OUR BARBERS',
            explore2: 'Meet the team'
        },
        about: {
            title: 'About Us',
            subtitle: 'Why choose us?',
            text: 'Crew Cutz is more than just a barber shop – it\'s a place where style, precision, and good vibes come together. Our team of experienced barbers works passionately to make sure every client leaves feeling confident and satisfied. Whether it\'s a classic cut, a modern fade, or a beard trim, you\'re in expert hands. We use premium products, pay attention to every detail, and guarantee that the experience is just as important as the result.',
            feature1: {
                title: 'Precision work',
                text: 'Every cut is backed by years of experience and attention to detail.'
            },
            feature2: {
                title: 'Friendly atmosphere',
                text: 'Feel right at home – relax while we work on your style.'
            },
            feature3: {
                title: 'On-time appointments',
                text: 'Online booking, no waiting – your time matters too.'
            }
        },
        carousel: {
            slide1: {
                title: 'WHAT WE DO FOR YOU',
                cta: 'See Video'
            },
            slide2: {
                title: 'MEET OUR BARBERS',
                cta: 'See Video'
            },
            slide3: {
                title: 'PREMIUM SERVICES',
                cta: 'See Video'
            }
        },
        booking: {
            header: {
                title: 'BOOK YOUR <span class="accent-underline">APPOINTMENT</span> TODAY',
                subtitle: 'Book online – quick and easy'
            },
            title: 'Book Appointment',
            subtitle: 'Book online – quick and easy',
            form: {
                name: 'Name',
                phone: 'Phone',
                email: 'Email',
                date: 'Date',
                time: 'Time',
                service: 'Service',
                selectService: 'Select service',
                haircut: 'Haircut',
                beard: 'Beard Trim',
                combo: 'Combo',
                notes: 'Notes (optional)',
                submit: 'Book Appointment'
            }
        },
        portfolio: {
            header: {
                title: 'OUR <span class="accent-underline">BEST WORK</span>',
                subtitle: 'Our work speaks for itself – skill, creativity, and precision'
            },
            title: 'Portfolio',
            subtitle: 'Our work speaks for itself',
            style: 'Style'
        },
        barbers: {
            header: {
                title: 'MEET OUR <span class="accent-underline">EXPERT TEAM</span>',
                subtitle: 'Experienced professionals at your service – passion, precision, professionalism'
            },
            title: 'Barbers',
            subtitle: 'Experienced professionals at your service',
            barber1: {
                name: 'Egervári Márk',
                title: 'Barber',
                description: ''
            },
            barber2: {
                name: 'Kányai Domonkos',
                title: 'Barber',
                description: ''
            }
        },
        form: {
            name: 'Name',
            email: 'Email',
            message: 'Message',
            send: 'Send'
        },
        contact: {
            header: {
                title: 'GET IN <span class="accent-underline">TOUCH</span>',
                subtitle: 'Visit us or get in touch – we look forward to hearing from you!'
            },
            form: {
                title: 'Write to us'
            },
            title: 'Contact',
            subtitle: 'Visit us or get in touch',
            address: {
                title: 'Address',
                value: '8200 Veszprém, Megyeház tér 2'
            },
            phone: {
                title: 'Phone',
                value: '+36 XX XXX XXXX'
            },
            email: {
                title: 'Email',
                value: 'info@crewcutz.hu'
            },
            hours: {
                title: 'Opening Hours',
                value: 'Mon-Fri: 9:00-19:00<br>Sat: 9:00-15:00'
            }
        },
        footer: {
            tagline: 'Modern and classic styles',
            rights: 'All rights reserved.'
        }
    }
};

// === State Management ===
let currentLang = localStorage.getItem('lang') || 'hu';


// === DOM Elements ===
const langToggle = document.getElementById('langToggle');
const langToggleMobile = document.getElementById('langToggleMobile');

const mobileToggle = document.getElementById('mobileToggle');
const mobileMenu = document.getElementById('mobileMenu');
const navbar = document.getElementById('navbar');
const bookingForm = document.getElementById('bookingForm');

// === Initialize ===
document.addEventListener('DOMContentLoaded', () => {
    initLanguage();
    initNavbar();
    initNavbarBubble();
    initHamburgerMenu();
    initCarousel();
    initBookingForm();
    initContactForm();
    initSmoothScroll();
});

// === Language Switching ===
function initLanguage() {
    updateLanguage(currentLang);
    updateLangToggleUI();

    // Desktop language toggle
    if (langToggle) {
        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'hu' ? 'en' : 'hu';
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
            updateLangToggleUI();
        });
    }

    // Mobile language toggle
    if (langToggleMobile) {
        langToggleMobile.addEventListener('click', () => {
            currentLang = currentLang === 'hu' ? 'en' : 'hu';
            localStorage.setItem('lang', currentLang);
            updateLanguage(currentLang);
            updateLangToggleUI();
        });
    }
}

function updateLanguage(lang) {
    document.querySelectorAll('[data-key]').forEach(element => {
        const key = element.getAttribute('data-key');
        const translation = getNestedTranslation(translations[lang], key);

        if (translation) {
            if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                element.placeholder = translation;
            } else {
                element.innerHTML = translation;
            }
        }
    });

    document.documentElement.lang = lang;

    // Update GlitchText originalText after language switch
    document.querySelectorAll('.glitch-text').forEach(el => {
        if (el._glitchInstance) {
            el._glitchInstance.originalText = el.textContent;
        }
    });
}

function getNestedTranslation(obj, path) {
    return path.split('.').reduce((current, key) => current?.[key], obj);
}

function updateLangToggleUI() {
    document.querySelectorAll('.lang-option').forEach(option => {
        const lang = option.getAttribute('data-lang');
        if (lang === currentLang) {
            option.classList.add('active');
        } else {
            option.classList.remove('active');
        }
    });
}

function animateLanguageSwitch() {
    langToggle.style.animation = 'none';
    setTimeout(() => {
        langToggle.style.animation = 'pulse 0.6s ease-out';
    }, 10);

    setTimeout(() => {
        langToggle.style.animation = '';
    }, 600);
}



// === Hamburger Menu ===
function initHamburgerMenu() {
    const btn = document.getElementById('hamburgerBtn');
    const overlay = document.getElementById('mobileMenuOverlay');
    if (!btn || !overlay) return;

    btn.addEventListener('click', () => {
        btn.classList.toggle('active');
        overlay.classList.toggle('active');
        document.body.style.overflow = overlay.classList.contains('active') ? 'hidden' : '';
    });

    overlay.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            btn.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
}

// === Tubelight Navbar ===
function initNavbar() {
    // Detect current page from URL
    const currentPage = window.location.pathname.split('/').pop().replace('.html', '') || 'index';
    const normalizedPage = currentPage === 'index' ? 'home' : currentPage;

    // Set active state on desktop nav pills
    const navPills = document.querySelectorAll('.nav-pill');
    navPills.forEach(pill => {
        const pillPage = pill.getAttribute('data-page');
        if (pillPage === normalizedPage) {
            pill.classList.add('active');
        } else {
            pill.classList.remove('active');
        }
    });

    // Set active state on mobile nav items
    const mobileNavItems = document.querySelectorAll('.mobile-nav-item');
    mobileNavItems.forEach(item => {
        const itemPage = item.getAttribute('data-page');
        if (itemPage === normalizedPage) {
            item.classList.add('active');
        } else {
            item.classList.remove('active');
        }
    });

    // Also check booking bubble
    const bookingBubble = document.querySelector('.booking-bubble');
    if (bookingBubble) {
        const bookingPage = bookingBubble.getAttribute('data-page');
        if (bookingPage === normalizedPage) {
            bookingBubble.classList.add('active');
        }
    }

    // === Sliding Active Indicator Logic ===
    const indicator = document.querySelector('.active-indicator');
    const navPillsContainer = document.querySelector('.nav-pills');

    if (indicator && navPillsContainer) {
        const lastPage = sessionStorage.getItem('lastNavPage');

        // If we have a history of navigation, start from previous position
        if (lastPage && lastPage !== normalizedPage) {
            const lastItem = document.querySelector(`.nav-pill[data-page="${lastPage}"]`);
            if (lastItem) {
                // 1. Teleport to previous item immediately (no transition)
                indicator.style.transition = 'none';

                const navRect = navPillsContainer.getBoundingClientRect();
                const lastRect = lastItem.getBoundingClientRect();
                const pillLeft = lastRect.left - navRect.left;
                const pillWidth = lastRect.width;

                // Use transform (consistent with updateActiveIndicator)
                indicator.style.width = `${pillWidth}px`;
                indicator.style.transform = `translateY(-50%) translateX(${pillLeft}px)`;

                // Force reflow to apply the position without transition
                indicator.offsetHeight;

                // 2. Enable transition for the slide to current
                indicator.style.transition = '';
            }
        }

        // 3. Move to current active item
        // Use setTimeout to ensure the browser has registered the 'transition: none' removal
        setTimeout(() => {
            updateActiveIndicator();
        }, 50);

        // Add resize listener to keep indicator correctly positioned
        window.addEventListener('resize', updateActiveIndicator);
    }

    // Save current page as last page for next navigation
    sessionStorage.setItem('lastNavPage', normalizedPage);
}

// === Smooth Scroll ===
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));

            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// === Booking Form ===
function initBookingForm() {
    const bookingForm = document.getElementById('bookingForm');

    if (!bookingForm) return;

    bookingForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(bookingForm);
        const data = Object.fromEntries(formData.entries());
        const submitBtn = bookingForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : '';

        try {
            if (submitBtn) {
                submitBtn.textContent = currentLang === 'hu' ? 'Küldés...' : 'Sending...';
                submitBtn.disabled = true;
            }

            const response = await fetch('/api/booking', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                showNotification(
                    currentLang === 'hu'
                        ? 'Köszönjük! Foglalását rögzítettük.'
                        : 'Thank you! Booking confirmed.',
                    'success'
                );
                bookingForm.reset();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('Booking Error:', error);
            showNotification(
                currentLang === 'hu'
                    ? 'Hiba történt. Kérjük próbálja újra.'
                    : 'An error occurred. Please try again.',
                'error'
            );
        } finally {
            if (submitBtn) {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        }
    });
}

// === Contact Form ===
function initContactForm() {
    const contactForm = document.getElementById('contactForm');

    if (!contactForm) return;

    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();

        const formData = new FormData(contactForm);
        const data = Object.fromEntries(formData.entries());
        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalBtnText = submitBtn ? submitBtn.textContent : '';

        try {
            if (submitBtn) {
                submitBtn.textContent = currentLang === 'hu' ? 'Küldés...' : 'Sending...';
                submitBtn.disabled = true;
            }

            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (result.success) {
                showNotification(
                    currentLang === 'hu'
                        ? 'Köszönjük! Üzenetét elküldtük.'
                        : 'Thank you! Message sent.',
                    'success'
                );
                contactForm.reset();
            } else {
                throw new Error(result.message);
            }
        } catch (error) {
            console.error('Contact Error:', error);
            showNotification(
                currentLang === 'hu'
                    ? 'Hiba történt. Kérjük próbálja újra.'
                    : 'An error occurred. Please try again.',
                'error'
            );
        } finally {
            if (submitBtn) {
                submitBtn.textContent = originalBtnText;
                submitBtn.disabled = false;
            }
        }
    });
}

// === Notification System ===
function showNotification(message, type = 'info') {
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;

    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#10b981' : '#3b82f6'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 0.5rem;
        box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
        z-index: 10000;
        animation: slideInRight 0.3s ease-out;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.animation = 'slideOutRight 0.3s ease-out';
        setTimeout(() => notification.remove(), 300);
    }, 3000);
}

// === Intersection Observer for Scroll-Reveal Animations ===
document.addEventListener('DOMContentLoaded', () => {
    // Mark all direct children of sections with .reveal class
    const revealElements = document.querySelectorAll('section > .container > *');

    revealElements.forEach(el => {
        el.classList.add('reveal');
    });

    // Immediately mark elements that are ALREADY visible in the viewport
    // (no animation needed - they should just appear)
    requestAnimationFrame(() => {
        revealElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                // Already visible: skip animation, add visible instantly
                el.style.transition = 'none';
                el.classList.add('visible');
                // Re-enable transition after a short delay (for future state changes)
                requestAnimationFrame(() => {
                    el.style.transition = '';
                });
            }
        });
    });

    // Observe only the non-visible elements for scroll reveal
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('visible')) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target); // Only ever animate once
            }
        });
    }, {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    });

    revealElements.forEach(el => {
        if (!el.classList.contains('visible')) {
            revealObserver.observe(el);
        }
    });

    // === Header backdrop scroll effect ===
    const backdrop = document.querySelector('.header-backdrop');
    if (backdrop) {
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY > 80;
            backdrop.style.background = scrolled
                ? 'linear-gradient(to bottom, rgba(0,0,0,0.92) 0%, rgba(0,0,0,0.2) 100%)'
                : 'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 100%)';
        }, { passive: true });
    }
});

// === CSS Animations (defined in style tag) ===
const style = document.createElement('style');
style.textContent = `
    @keyframes pulse {
        0%, 100% { transform: scale(1); }
        50% { transform: scale(1.05); }
    }
    
    @keyframes slideInRight {
        from {
            transform: translateX(100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    
    @keyframes slideOutRight {
        from {
            transform: translateX(0);
            opacity: 1;
        }
        to {
            transform: translateX(100%);
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// === Hero Carousel ===
function initCarousel() {
    const track = document.getElementById('carouselTrack');
    if (!track) return;

    const slides = Array.from(track.children);
    const prevBtn = document.querySelector('.carousel-arrow.prev');
    const nextBtn = document.querySelector('.carousel-arrow.next');
    let currentIndex = 0;
    let autoPlayInterval;

    function updateCarousel(index) {
        currentIndex = index;
        const offset = -currentIndex * 100;
        track.style.transform = `translateX(${offset}%)`;

        // Update all dots across all slides
        slides.forEach((slide, slideIndex) => {
            const dots = slide.querySelectorAll('.dot');
            dots.forEach((dot, dotIndex) => {
                dot.classList.toggle('active', slideIndex === currentIndex && dotIndex === currentIndex);
            });
        });
    }

    function nextSlide() {
        const newIndex = (currentIndex + 1) % slides.length;
        updateCarousel(newIndex);
    }

    function prevSlide() {
        const newIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel(newIndex);
    }

    // Event listeners
    if (prevBtn) prevBtn.addEventListener('click', () => {
        prevSlide();
        resetAutoPlay();
    });

    if (nextBtn) nextBtn.addEventListener('click', () => {
        nextSlide();
        resetAutoPlay();
    });

    // Dot click handlers
    slides.forEach((slide, slideIndex) => {
        const dots = slide.querySelectorAll('.dot');
        dots.forEach((dot, dotIndex) => {
            dot.addEventListener('click', () => {
                updateCarousel(dotIndex);
                resetAutoPlay();
            });
        });
    });

    // Auto-play
    function startAutoPlay() {
        autoPlayInterval = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlayInterval);
        startAutoPlay();
    }

    startAutoPlay();

    // Pause on hover
    track.addEventListener('mouseenter', () => clearInterval(autoPlayInterval));
    track.addEventListener('mouseleave', startAutoPlay);
}

// === Navbar Bubble Animation ===
function initNavbarBubble() {
    const navPills = document.querySelector('.nav-pills');
    const bubble = document.querySelector('.nav-bubble');
    const pills = document.querySelectorAll('.nav-pill');

    if (!navPills || !bubble || pills.length === 0) return;

    // Pre-compute pill positions once — no getBoundingClientRect on every hover
    let pillCache = [];
    function cachePillPositions() {
        const navRect = navPills.getBoundingClientRect();
        pillCache = Array.from(pills).map(pill => {
            const r = pill.getBoundingClientRect();
            return { x: r.left - navRect.left - 8, w: r.width + 16, h: r.height + 8 };
        });
    }
    cachePillPositions();
    window.addEventListener('resize', cachePillPositions, { passive: true });

    pills.forEach((pill, i) => {
        pill.addEventListener('mouseenter', () => {
            const p = pillCache[i];
            bubble.style.width = `${p.w}px`;
            bubble.style.height = `${p.h}px`;

            // If already visible: snap position instantly (zero latency between pills)
            // If first appearance: animate transform in
            const snap = bubble.classList.contains('active');
            bubble.style.transition = snap
                ? 'opacity 0.12s ease'
                : 'transform 0.12s ease, opacity 0.1s ease';

            bubble.style.transform = `translateY(-50%) translateX(${p.x}px)`;
            bubble.classList.add('active');
        });
    });

    navPills.addEventListener('mouseleave', () => {
        bubble.style.transition = 'opacity 0.15s ease';
        bubble.classList.remove('active');
    });
}

// === Active Indicator Animation ===
function updateActiveIndicator() {
    const navPills = document.querySelector('.nav-pills');
    const indicator = document.querySelector('.active-indicator');
    const activeItem = document.querySelector('.nav-pill.active');

    if (!navPills || !indicator || !activeItem) return;

    const navRect = navPills.getBoundingClientRect();
    const activeRect = activeItem.getBoundingClientRect();

    const pillLeft = activeRect.left - navRect.left;
    const pillWidth = activeRect.width;

    // Size is set instantly (no animation)
    indicator.style.width = `${pillWidth}px`;

    // Position is animated via transform only (GPU-only, no layout jank)
    indicator.style.transform = `translateY(-50%) translateX(${pillLeft}px)`;
}
