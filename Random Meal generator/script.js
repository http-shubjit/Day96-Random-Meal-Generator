document.addEventListener("DOMContentLoaded", function () {
    const stars = document.querySelectorAll('.star');
    const ratingContainer = document.getElementById('star-rating');
    let rating;

    stars.forEach(star => {
        star.addEventListener('click', setRating);
        star.addEventListener('mouseover', hoverRating);
        star.addEventListener('mouseout', resetRating);
    });

    function setRating(e) {
        rating = e.target.getAttribute('data-rating');
        ratingContainer.setAttribute('data-rating', rating);
        updateStars();
    }

    function hoverRating(e) {
        const hoverRating = e.target.getAttribute('data-rating');
        updateStars(hoverRating);
    }

    function resetRating() {
        updateStars();
    }

    function updateStars(hoverRating = rating) {
        stars.forEach(star => {
            const starRating = star.getAttribute('data-rating');
            if (starRating <= hoverRating) {
                star.classList.add('active');
            } else {
                star.classList.remove('active');
            }
        });
    }
});
