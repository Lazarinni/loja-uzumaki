let currentIndex = 0;

function move(direction) {
    const track = document.querySelector('.carrossel-track');
    const items = document.querySelectorAll('.produto');
    const itemWidth = items[0].clientWidth + 20; // Inclui margem
    const totalItems = items.length;
    const maxIndex = totalItems - 1;

    currentIndex += direction;

    if (currentIndex < 0) {
        currentIndex = 0;
    } else if (currentIndex > maxIndex) {
        currentIndex = maxIndex;
    }

    const offset = -currentIndex * itemWidth;
    track.style.transform = `translateX(${offset}px)`;
}
// Animação Card

document.querySelector('.product-card').addEventListener('click', function() {
    alert('Produto clicado!');
});

// Fim animação card
