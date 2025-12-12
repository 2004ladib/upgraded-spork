
document.addEventListener('DOMContentLoaded', function() {
    // 1. Mobile Menu Toggle
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-links');
    
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
        });
    } else {
        console.error('Menu toggle or nav links not found');
    }
    
    // 2. Slideshow
    let slides = document.querySelectorAll('.hero-slide');
    let currentSlide = 0;
    
    if (slides.length > 0) {
        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.remove('active');
            });
            slides[index].classList.add('active');
        }
        
        function nextSlide() {
            currentSlide = (currentSlide + 1) % slides.length;
            showSlide(currentSlide);
        }
        
        // Start slideshow
        setInterval(nextSlide, 5000);
    } else {
        console.warn('No slides found for slideshow');
    }
    
    // 3. Back to Top Button
    const topBtn = document.getElementById('topBtn');
    
    if (topBtn) {
        window.onscroll = function() {
            scrollFunction();
        };
        
        function scrollFunction() {
            if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
                topBtn.style.display = "block";
            } else {
                topBtn.style.display = "none";
            }
        }
        
        topBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    } else {
        console.warn('Back to top button not found');
    }
    
    console.log("All JavaScript loaded successfully!");
});