// Contact form handling with Formspree
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            // Verify reCAPTCHA before submitting
            const recaptchaResponse = grecaptcha.getResponse();
            
            if (recaptchaResponse.length === 0) {
                e.preventDefault();
                alert('Please complete the reCAPTCHA verification.');
                return;
            }
            
            // If reCAPTCHA is valid, form will submit to Formspree
            // Formspree will handle the submission and redirect
        });
    }
});
