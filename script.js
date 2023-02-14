// Your JS code here.
function debounce(func, wait = 20, immediate = true) {
        let timeout;
        return function() {
          const context = this, args = arguments;
          const later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          const callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      }

 function checkSlide(e) {
        const slideIns = document.querySelectorAll('.slide-in');
        slideIns.forEach(slideIn => {
          // halfway through the image
          const slideInAt = (window.scrollY + window.innerHeight) - slideIn.height / 2;
          // bottom of the image
          const imageBottom = slideIn.offsetTop + slideIn.height;
          const isHalfShown = slideInAt > slideIn.offsetTop;
          const isNotScrolledPast = window.scrollY < imageBottom;
          if (isHalfShown && isNotScrolledPast) {
            slideIn.classList.add('active');
          } else {
            slideIn.classList.remove('active');
          }
        });
      }

      window.addEventListener('scroll', debounce(checkSlide));