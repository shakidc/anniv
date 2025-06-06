const messages = [
  "Selamat Anniversary Sayang ❤️",
  "Hari ini adalah pengingat betapa berharganya kamu untukku 💕",
  "Aku bersyukur bisa berbagi hidup bersamamu 🎁",
  "Terima kasih sudah hadir dan bertahan 🌹",
  "Aku mencintaimu lebih dari kata-kata 💖"
];

let index = 0;
let intervalId;

function showMessage() {
  const box = document.getElementById("messageBox");
  if (index < messages.length) {
    box.style.opacity = 0;
    setTimeout(() => {
      box.textContent = messages[index];
      box.style.opacity = 1;
      index++;
    }, 400);
  } else {
    clearInterval(intervalId);
  }
}

function startAnniversary() {
  const audio = document.getElementById("bgMusic");
  audio.play().catch(err => console.log("Autoplay blocked:", err));

  index = 0;
  showMessage();
  intervalId = setInterval(showMessage, 3000); // pesan muncul setiap 5 detik
}

// Slideshow otomatis
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlide, 3000);