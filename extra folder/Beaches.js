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