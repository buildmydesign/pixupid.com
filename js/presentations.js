// Tab functionality
document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Remove active class from all buttons and contents
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));

            // Add active class to clicked button
            button.classList.add('active');

            // Show corresponding tab content
            const tabId = button.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
        });
    });

    // Comparison slider functionality
    const sliders = document.querySelectorAll('.slider-input');
    
    sliders.forEach(slider => {
        slider.addEventListener('input', function() {
            const value = this.value;
            const afterImage = this.parentElement.querySelector('.after-image');
            afterImage.style.clipPath = `inset(0 ${100 - value}% 0 0)`;
        });
    });
});
