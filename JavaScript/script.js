// On attend que le DOM soit chargé
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;
    const intervalTime = 5000; // 5000ms = 5 secondes

    function nextSlide() {
        // 1. Retirer la classe active de l'image actuelle
        slides[currentIndex].classList.remove('active');

        // 2. Calculer l'index de la photo suivante
        // Le modulo (%) permet de revenir à 0 quand on arrive à la fin
        currentIndex = (currentIndex + 1) % slides.length;

        // 3. Ajouter la classe active à la nouvelle image
        slides[currentIndex].classList.add('active');
    }

    // Lancer l'intervalle automatique
    setInterval(nextSlide, intervalTime);
});