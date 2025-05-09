function isInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top <= window.innerHeight &&
      rect.bottom >= 0
    );
  }

  // Collect all elements with class "BRINGING" and "Play"
  const bringings = document.querySelectorAll('.BRINGING');
  const plays = document.querySelectorAll('.Play, .PLAY'); // both Play and PLAY
  const elementsToAnimate = [...bringings, ...plays];

  function checkVisibility() {
    elementsToAnimate.forEach(el => {
      if (isInViewport(el) && !el.classList.contains('animate')) {
        el.classList.add('animate');
      }
    });
  }

  window.addEventListener('scroll', checkVisibility);
  window.addEventListener('load', checkVisibility);



  const counts = document.querySelectorAll('.count')
const speed = 97

counts.forEach((counter) => {
    function upDate(){
        const target = Number(counter.getAttribute('data-target'))
        const count = Number(counter.innerText)
        const inc = target / speed        
        if(count < target){
            counter.innerText = Math.floor(inc + count) 
            setTimeout(upDate, 15)
        }else{
            counter.innerText = target
        }
    }
    upDate()
})






document.getElementById("feedbackForm").addEventListener("submit", function() {
  document.getElementById("feedbackMessage").textContent = "Thank you for your feedback!";
});






  
  let lastScrollTop = 0;
  const navbar = document.getElementById("mainNavbar");
  
  window.addEventListener("scroll", function () {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  
    // Hide navbar when scrolling down and not at the top
    if (scrollTop > lastScrollTop && scrollTop > 150) {
      navbar.style.top = "-100px";
    }
  
    // Show navbar when scrolling up
    else if (scrollTop < lastScrollTop) {
      navbar.style.top = "0";
    }
  
    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  });
  