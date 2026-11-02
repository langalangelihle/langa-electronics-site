// main.js - accordion, service search, gallery + lightbox, scroll animations

// Gallery data: the gallery is built dynamically from this list
const galleryItems = [
  { src: "images/pexels-471572265-android-broken-screen.jpg", alt: "Smartphone with a cracked screen awaiting repair", caption: "Screen repairs" },
  { src: "images/pexels-thefullonmonet-brokenlaptop.jpg", alt: "Laptop with damaged screen on a workbench", caption: "Laptop repairs" },
  { src: "images/pexels-kelvin809-android-unlocking.jpg", alt: "Android phone being unlocked", caption: "Phone unlocking" },
  { src: "images/service-accessories1.jpg", alt: "Phone and computer accessories on display", caption: "Accessories" },
  { src: "images/windows-installation.png", alt: "Windows installation screen on a computer", caption: "Software installation" },
  { src: "images/virus.jpg", alt: "Computer warning about a virus infection", caption: "Virus removal" }
];

document.addEventListener("DOMContentLoaded", function () {
  initAccordion();
  initServiceSearch();
  initGallery();
  initReveal();   // must run last so it sees the gallery items
});

// ----- Accordion: one panel open at a time -----
function initAccordion() {
  const headers = document.querySelectorAll(".accordion-header");
  headers.forEach(function (header) {
    header.addEventListener("click", function () {
      const isOpen = header.getAttribute("aria-expanded") === "true";

      // Close all panels first
      headers.forEach(function (h) {
        h.setAttribute("aria-expanded", "false");
        h.nextElementSibling.hidden = true;
      });

      // Open the clicked one (unless it was already open)
      if (!isOpen) {
        header.setAttribute("aria-expanded", "true");
        header.nextElementSibling.hidden = false;
      }
    });
  });
}

// ----- Search: filters service cards as the user types -----
function initServiceSearch() {
  const input = document.getElementById("serviceSearch");
  if (!input) return;                       // not on this page
  const items = document.querySelectorAll(".service-item");
  const noResults = document.getElementById("noResults");

  input.addEventListener("input", function () {
    const query = input.value.toLowerCase().trim();
    let visible = 0;

    items.forEach(function (item) {
      const match = item.textContent.toLowerCase().includes(query);
      item.hidden = !match;
      if (match) visible++;
    });

    noResults.hidden = visible > 0;
  });
}

// ----- Gallery + lightbox -----
function initGallery() {
  const grid = document.getElementById("galleryGrid");
  if (!grid) return;

  // Build the lightbox overlay once
  const lightbox = document.createElement("div");
  lightbox.className = "lightbox";
  lightbox.hidden = true;
  lightbox.innerHTML =
    '<button type="button" class="lightbox-close" aria-label="Close image">&times;</button>' +
    '<figure><img src="" alt=""><figcaption></figcaption></figure>';
  document.body.appendChild(lightbox);

  const lbImg = lightbox.querySelector("img");
  const lbCaption = lightbox.querySelector("figcaption");

  function open(item) {
    lbImg.src = item.src;
    lbImg.alt = item.alt;
    lbCaption.textContent = item.caption;
    lightbox.hidden = false;
  }

  function close() {
    lightbox.hidden = true;
  }

  // Create one thumbnail button per gallery item
  galleryItems.forEach(function (item) {
    const btn = document.createElement("button");
    btn.type = "button";
    btn.className = "gallery-item";

    const img = document.createElement("img");
    img.src = item.src;
    img.alt = item.alt;
    img.loading = "lazy";

    const cap = document.createElement("span");
    cap.textContent = item.caption;

    btn.append(img, cap);
    btn.addEventListener("click", function () { open(item); });
    grid.appendChild(btn);
  });

  // Close by: X button, clicking the dark background, or Esc key
  lightbox.querySelector(".lightbox-close").addEventListener("click", close);
  lightbox.addEventListener("click", function (e) {
    if (e.target === lightbox) close();
  });
  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") close();
  });
}

// ----- Scroll animation: fade cards in as they appear -----
function initReveal() {
  const targets = document.querySelectorAll(".service-card, .service-item, .gallery-item");
  if (!("IntersectionObserver" in window)) return;   // older browsers: just show everything

  const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.15 });

  targets.forEach(function (el) {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
