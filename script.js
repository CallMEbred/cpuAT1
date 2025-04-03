function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
}

function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
}

let currentIndex = 0;

function updateGallery() {
  const gallery = document.querySelector('.gallery');
  const translateX = -currentIndex * 100 / 10; 
  gallery.style.transform = `translateX(${translateX}%)`;
}

function nextImage() {
  currentIndex = (currentIndex + 1) % 10; 
  updateGallery();
}

function previousImage() {
  currentIndex = (currentIndex - 1 + 10) % 10; 
  updateGallery();
}
