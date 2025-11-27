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

    // Carousel functionality
    function initCarousel(carouselName) {
        const items = document.querySelectorAll(`.before-after-item[data-carousel="${carouselName}"]`);
        const dots = document.querySelectorAll(`.carousel-dots[data-carousel="${carouselName}"] .carousel-dot`);
        const leftArrow = document.querySelector(`.carousel-arrow.left[data-carousel="${carouselName}"]`);
        const rightArrow = document.querySelector(`.carousel-arrow.right[data-carousel="${carouselName}"]`);
        
        let currentIndex = 0;

        function showSlide(index) {
            items.forEach(item => item.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));
            
            if (index >= items.length) currentIndex = 0;
            if (index < 0) currentIndex = items.length - 1;
            
            items[currentIndex].classList.add('active');
            dots[currentIndex].classList.add('active');
        }

        leftArrow.addEventListener('click', () => {
            currentIndex--;
            showSlide(currentIndex);
        });

        rightArrow.addEventListener('click', () => {
            currentIndex++;
            showSlide(currentIndex);
        });

        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentIndex = index;
                showSlide(currentIndex);
            });
        });
    }

    // Initialize carousels for each tab
    initCarousel('redesign');
    initCarousel('rewrite');
    initCarousel('recreate');
});
