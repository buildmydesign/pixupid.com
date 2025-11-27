// Doodles carousel functionality
document.addEventListener('DOMContentLoaded', function() {
    function initDoodlesCarousel(carouselName) {
        const items = document.querySelectorAll(`.doodles-carousel-item[data-carousel="${carouselName}"]`);
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

    // Initialize doodles carousel
    initDoodlesCarousel('doodles');
});
