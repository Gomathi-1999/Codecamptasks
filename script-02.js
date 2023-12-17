document.addEventListener('DOMContentLoaded', function () {
    let currentIndex = 0;
    const reviews = document.querySelectorAll('.review');
  
    function showReview(index) {
      reviews.forEach((review, i) => {
        review.classList.remove('active');
        if (i === index) {
          review.classList.add('active');
        }
      });
    }
  
    function changeReview(direction) {
      currentIndex += direction;
      if (currentIndex < 0) {
        currentIndex = reviews.length - 1;
      } else if (currentIndex >= reviews.length) {
        currentIndex = 0;
      }
      showReview(currentIndex);
    }
  
    document.getElementById('prevBtn').addEventListener('click', () => changeReview(-1));
    document.getElementById('nextBtn').addEventListener('click', () => changeReview(1));
  
    // Initial review display
    showReview(currentIndex);
  });