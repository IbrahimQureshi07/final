let currentImageIndex = 0;
const images = [
  "imges/G.img-1.jpg",
  "imges/G.img-2.jpg",
  "imges/G.img-3.jpg",
  "imges/G.img-4.jpeg",
  "imges/G.img-5.jpg",
  "imges/G.img-6.jpg",
  "imges/G.img-7.jpg",
  "imges/G.img-8.jpg",
  "imges/G.img-9.jpg",
  "imges/G.img-10.jpg",
  "imges/G.img-11.jpg",
  "imges/G.img-12.jpg",
  "imges/G.img-13.jpg",
  "imges/G.img-14.jpg",
  "imges/G.img-15.jpg",
];


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
