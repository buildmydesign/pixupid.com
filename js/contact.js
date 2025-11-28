// Contact form handling
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Verify reCAPTCHA
            const recaptchaResponse = grecaptcha.getResponse();
            
            if (recaptchaResponse.length === 0) {
                alert('Please complete the reCAPTCHA verification.');
                return;
            }
            
            // Get form data
            const formData = new FormData(form);
            const data = {};
            formData.forEach((value, key) => {
                data[key] = value;
            });
            
            // Add reCAPTCHA response to data
            data['g-recaptcha-response'] = recaptchaResponse;
            
            // Here you would typically send the data to a server
            // The server should verify the reCAPTCHA response with Google
            // For now, just show a success message
            alert('Thank you for your message! We will get back to you soon.');
            
            // Reset form and reCAPTCHA
            form.reset();
            grecaptcha.reset();
        });
    }
});
