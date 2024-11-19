const body = document.querySelector("body"),
  nav = document.querySelector("nav"),
  // up = document.querySelector(".up-btn"),
  searchToggle = document.querySelector(".searchToggle"),
  sidebarOpen = document.querySelector(".sidebarOpen"),
  siderbarClose = document.querySelector(".siderbarClose");

//   js code to toggle search box
searchToggle.addEventListener("click", () => {
  searchToggle.classList.toggle("active");
});

//   js code to toggle sidebar
sidebarOpen.addEventListener("click", () => {
  nav.classList.add("active");
});

body.addEventListener("click", (e) => {
  let clickedElm = e.target;

  if (
    !clickedElm.classList.contains("sidebarOpen") &&
    !clickedElm.classList.contains("menu")
  ) {
    nav.classList.remove("active");
  }
});

//   js code for slider
let slide = document.querySelectorAll(".slide");
let current = 0;

function cls() {
  for (let i = 0; i < slide.length; i++) {
    slide[i].style.display = "none";
  }
}

function next() {
  cls();
  if (current === slide.length - 1) current = -1;
  current++;

  slide[current].style.display = "block";
}

function prev() {
  cls();
  if (current === 0) current = slide.length;
  current--;

  slide[current].style.display = "block";
}

function start() {
  cls();
  slide[current].style.display = "block";
}
start();

// js code fore navbar changing color
window.addEventListener("scroll", function () {
  let head = document.querySelector("nav");
  head.classList.toggle("stiky", window.scrollY > 150);
});

window.addEventListener("scroll", function () {
  let up = document.querySelector(".up-btn");
  up.classList.toggle("stiky", window.scrollY > 150);
});


document.getElementById('booking-form').addEventListener('submit', function(event) {
  event.preventDefault();  // Prevents form from submitting the default way

  // Gather the data
  const fullName = document.getElementById('full-name').value;
  const email = document.getElementById('email').value;
  const phone = document.getElementById('phone').value;
  const bookingDate = document.getElementById('booking-date').value;
  const bookingTime = document.getElementById('booking-time').value;
  const departureDate = document.getElementById('departure-date').value;
  const departureTime = document.getElementById('departure-time').value;

  // Example of processing the booking data (send to server, etc.)
  console.log('Booking Submitted:', {
      fullName,
      email,
      phone,
      bookingDate,
      bookingTime,
      departureDate,
      departureTime
  });

  // Show success message
  document.getElementById('success-message').classList.remove('hidden');
  
  // Optionally, clear the form after successful submission
  document.getElementById('booking-form').reset();
});
