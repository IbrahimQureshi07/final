
let currentImageIndex = 0;
const images = [
  "G-imges/G.img-1.jpg",
  "G-imges/G.img-2.jpg",
  "G-imges/G.img-3.jpg",
  "G-imges/G.img-4.jpg",
  "G-imges/G.img-5.jpg",
  "G-imges/G.img-6.jpg",
  "G-imges/G.img-7.jpg",
  "G-imges/G.img-8.jpg",
  "G-imges/G.img-9.jpg",
  "G-imges/G.img-10.jpg",
  "G-imges/G.img-11.jpg",
  "G-imges/G.img-12.jpg",
  "G-imges/G.img-13.jpg",
  "G-imges/G.img-14.jpg",
  "G-imges/G.img-15.jpg",
];


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



function openModal(index) {
  currentImageIndex = index;
  document.getElementById("modalImage").src = images[index];
  document.getElementById("modal").style.display = "block";
  document.getElementById("blur-bg").style.display = "block";
}


function closeModal() {
  document.getElementById("modal").style.display = "none";
  document.getElementById("blur-bg").style.display = "none";
}


function changeImage(direction) {
  currentImageIndex += direction;
  if (currentImageIndex < 0) currentImageIndex = images.length - 1;
  if (currentImageIndex >= images.length) currentImageIndex = 0;
  document.getElementById("modalImage").src = images[currentImageIndex];
}



window.addEventListener("scroll", () => {
  document.querySelectorAll(".gallery-item").forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 50) {
      el.classList.add("visible");
    }
  });
});



function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
}
