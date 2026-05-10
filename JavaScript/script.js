document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentIndex = 0;
        const intervalTime = 5000;

        function nextSlide() {
            slides[currentIndex].classList.remove('active');
            currentIndex = (currentIndex + 1) % slides.length;
            slides[currentIndex].classList.add('active');
        }
        setInterval(nextSlide, intervalTime);
    }

    const items = document.querySelectorAll('.toggle-item');

    items.forEach(item => {
        item.addEventListener('click', () => {

            item.classList.toggle('active');
            
        });
    });
});