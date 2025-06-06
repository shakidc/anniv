const messages = [
  "Kamu tahu, ada ungkapan terkenal dari M. A. W. Brouwer: 'Bumi Pasundan lahir ketika Tuhan sedang tersenyum'. Namun bagiku, Bumi Mataram jauh lebih istimewa.",
  "Karena Bumi Mataram lahir ketika Tuhan sedang bersuka cita, sebab Ia menyertakan bidadari terbaik dan tercantiknya di sana ❤️",
  "Saat dulu menyatakan cinta, aku berkata bahwa aku memilih menjadi Rahwana yang mencintai Sinta, bukan Rama yang mencintai Dewi Shinta.",
  "Sekarang pun aku masih memilih menjadi Rahwana yang mencintai Sinta, karena aku tahu betapa berharganya kamu bagiku dan karena kamu adalah kamu 🌹",
  "Aku ingin kamu tahu, bahwa aku mencintaimu lebih dari kata-kata yang bisa kuungkapkan 💖",
  "Walaupun aku bingung harus mengungkapkannya dengan cara apa terkadang, aku sadar banyak maaf dan terima kasih dalam setahun ke belakang",
  "Namun sekali lagi terima kasih karena kamu sudah memilih untuk ikut dan terus berjuang ❤️",
  "Aku tahu perjalanan kita masih sangat panjang, namun aku selalu bersyukur karena menjalaninya bersamamu sayang 🌹",
  "Terima kasih sudah hadir dan bertahan 🌹",
  "Aku mencintaimu lebih dari kata-kata yang bisa kuungkapkan 💖"
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
    index = 0;
  }
}

function startAnniversary() {
  const audio = document.getElementById("bgMusic");
  audio.play().catch(err => console.log("Autoplay blocked:", err));

  index = 0;
  showMessage();
  intervalId = setInterval(showMessage, 7000);
}

let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide() {
  slides.forEach(s => s.classList.remove('active'));
  slides[slideIndex].classList.add('active');
  slideIndex = (slideIndex + 1) % slides.length;
}
setInterval(showSlide, 3000);