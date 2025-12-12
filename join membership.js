window.addEventListener('load', function() {
    console.log("Join validation script loaded!");

    const form = document.querySelector('.join-form');
    
    if (!form) {
        console.log("Form not found on this page");
        return;
    }
    
    
    const nameInput = form.querySelector('input[type="text"]');
    
    
    form.addEventListener('submit', function(event) {
        console.log("Form submission attempt...");
    
        
        const nameValue = nameInput.value.trim();
        
        
        const hasNumbers = /\d/.test(nameValue);
        
        if (hasNumbers) {
            
            event.preventDefault();
            
            
            alert("❌ ERROR: Name cannot contain numbers!\n\nPlease use only letters.");
            
        
            nameInput.style.border = "2px solid red";
            nameInput.style.backgroundColor = "#ffe6e6";
            
            
            nameInput.focus();
            nameInput.select();
            
            console.log("Form blocked - contains numbers");
            return false;
        }
        
        
        console.log("Form submitted successfully");
        alert("✅ Form submitted successfully!");
        
        
        
        return true;
    });
    
    
    nameInput.addEventListener('input', function() {
        const value = this.value;
        
        if (/\d/.test(value)) {
            this.style.border = "2px solid red";
            this.style.backgroundColor = "#ffe6e6";
        } else {
            this.style.border = "";
            this.style.backgroundColor = "";
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const backToTopBtn = document.getElementById('backToTop');
    
    if (!backToTopBtn) return;
    
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            backToTopBtn.classList.add('show');
        } else {
            backToTopBtn.classList.remove('show');
        }
    });
    
    // Smooth scroll to top when clicked
    backToTopBtn.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Smooth scroll using vanilla JavaScript
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});