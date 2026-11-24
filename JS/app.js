let currentLang = "ka";

function changeLanguage(lang) {
  currentLang = lang;
  localStorage.setItem("preferred_lang", lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    if (btn.getAttribute("data-lang") === lang) {
      btn.classList.add("active");
    } else {
      btn.classList.remove("active");
    }
  });

  const elements = document.querySelectorAll("[data-i18n]");
  elements.forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      el.innerHTML = translations[lang][key];
    }
  });

  const placeholders = document.querySelectorAll("[data-i18n-placeholder]");
  placeholders.forEach((el) => {
    const key = el.getAttribute("data-i18n-placeholder");
    if (translations[lang] && translations[lang][key]) {
      el.placeholder = translations[lang][key];
    }
  });
}

const contactForm = document.getElementById("contact-form");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    const button = this.querySelector("button");
    if (button) {
      button.innerText = translations[currentLang]
        ? translations[currentLang].form_sending
        : "იგზავნება...";
      button.disabled = true;
    }
  });
}

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("active");
      } else {
        entry.target.classList.remove("active");
      }
    });
  },
  {
    threshold: 0.15,
  }
);

const hiddenElements = document.querySelectorAll(".reveal");
hiddenElements.forEach((el) => observer.observe(el));

const burger = document.getElementById("burger-toggle");
const nav = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-links li a");

if (burger && nav) {
  burger.addEventListener("click", () => {
    nav.classList.toggle("nav-active");
    burger.classList.toggle("toggle");
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    });
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth > 855) {
      nav.classList.remove("nav-active");
      burger.classList.remove("toggle");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  const savedLang = localStorage.getItem("preferred_lang") || "ka";
  changeLanguage(savedLang);
});

const qrModal = document.getElementById("qr-modal");
const openQrBtn = document.getElementById("open-qr-btn");
const closeQrBtn = document.getElementById("close-qr-btn");

if (openQrBtn && qrModal && closeQrBtn) {
  openQrBtn.addEventListener("click", () => {
    qrModal.classList.add("show");
  });

  closeQrBtn.addEventListener("click", () => {
    qrModal.classList.remove("show");
  });

  window.addEventListener("click", (e) => {
    if (e.target === qrModal) {
      qrModal.classList.remove("show");
    }
  });
}