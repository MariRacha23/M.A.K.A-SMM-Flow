const translations = {
  ka: {
    nav_home: "მთავარი",
    nav_services: "სერვისები",
    nav_about: "ჩვენ შესახებ",
    nav_contact: "კონტაქტი",
    hero_title: "გაზარდე შენი ბიზნესი სოციალურ მედიაში",
    hero_desc:
      "ჩვენ ვქმნით ციფრულ ნაკადს (Flow), რომელიც შენს ბრენდს წარმატებამდე მიიყვანს.",
    hero_btn: "დაგვიკავშირდით",
    services_title: "ჩვენი სერვისები",
    smm_title: "SMM მენეჯმენტი",
    smm_desc:
      "გვერდების სრული მართვა, პოსტების დაგეგმვა, აუდიტორიასთან კომუნიკაცია და ყოველთვიური რეპორტინგი.",
    ads_title: "რეკლამა (Meta Ads)",
    ads_desc:
      "მიზნობრივი სარეკლამო კამპანიების გამართვა, ბიუჯეტის ოპტიმიზაცია და მაქსიმალური გაყიდვების მიღწევა.",
    content_title: "კონტენტის შექმნა",
    content_desc:
      "ტრენდული Reels/TikTok ვიდეოების იდეები და მონტაჟი, ფოტოგადაღება და უნიკალური ვიზუალური სტილი.",
    web_title: "ვებ-საიტების დამზადება",
    web_desc:
      "თანამედროვე, სწრაფი (Frontend Development) და ადაპტური საიტების აწყობა თქვენი ბიზნესის წარმატებისთვის.",
    about_title: "ჩვენი ისტორია & Frontend Dev",
    about_desc1:
      "M.A.K.A SMM Flow დაიბადა დიდი იდეითა და ოჯახური შთაგონებით. სახელის მიღმა ჩვენთვის ყველაზე ძვირფასი ადამიანების ინიციალები დგას, რაც თითოეულ პროექტს განსაკუთრებულ პასუხისმგებლობასა და ენერგიას სძენს.",
    about_desc2:
      "SMM მარკეტინგთან ერთად, ვარ <strong>Frontend დეველოპერი</strong> — რაც ნიშნავს იმას, რომ თქვენი ბრენდისთვის არა მხოლოდ სოციალური მედიის ვიზუალს, არამედ სრულყოფილ, სწრაფ და თანამედროვე ვებ-საიტსაც შევქმნი!",
    contact_title: "დაგვიკავშირდით",
    form_name: "თქვენი სახელი",
    form_email: "ელ-ფოსტა",
    form_message: "თქვენი შეტყობინება",
    form_button: "გაგზავნა",
    form_sending: "იგზავნება...",
    footer_rights: "ყველა უფლება დაცულია.",
    contact_form_title: "მოგვწერეთ და მალე გიპასუხებთ",
    contact_info_title: "პირდაპირი კავშირი",
    qr_btn_subtitle: "მობილურზე გასახსნელად",
    qr_btn_title: "საიტის QR კოდი 📱",
    modal_qr_title: "დასკანერე და გახსენი მობილურში",
    modal_qr_desc: "მიუშვი კამერა QR კოდს საიტის მობილურში გასახსნელად",
  },
  en: {
    nav_home: "Home",
    nav_services: "Services",
    nav_about: "About Us",
    nav_contact: "Contact",
    hero_title: "Grow Your Business in Social Media",
    hero_desc:
      "We create a digital Flow that leads your brand to ultimate success.",
    hero_btn: "Contact Us",
    services_title: "Our Services",
    smm_title: "SMM Management",
    smm_desc:
      "Complete page management, post scheduling, audience communication, and monthly reporting.",
    ads_title: "Meta Ads",
    ads_desc:
      "Targeted advertising campaigns, budget optimization, and achieving maximum sales.",
    content_title: "Content Creation",
    content_desc:
      "Trending Reels/TikTok content ideas & editing, photography, and a unique visual style.",
    web_title: "Web Development",
    web_desc:
      "Building modern, fast (Frontend Development), and responsive websites for your business success.",
    about_title: "Our Story & Frontend Dev",
    about_desc1:
      "M.A.K.A SMM Flow was born with a big idea and family inspiration. Behind the name are the initials of our loved ones, bringing special dedication and energy to every project.",
    about_desc2:
      "Alongside SMM marketing, I am a <strong>Frontend Developer</strong> — meaning I don't just shape your social media, but also build fast, modern, and high-quality websites for your brand!",
    contact_title: "Contact Us",
    form_name: "Your Name",
    form_email: "Your Email",
    form_message: "Your Message",
    form_button: "Send Message",
    form_sending: "Sending...",
    footer_rights: "All rights reserved.",
    contact_form_title: "Send us a message, we'll reply soon",
    contact_info_title: "Direct Contact",
    qr_btn_subtitle: "To open on mobile",
    qr_btn_title: "Website QR Code 📱",
    modal_qr_title: "Scan to open on mobile",
    modal_qr_desc:
      "Point your camera at the QR code to open the site on mobile",
  },
};

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
    threshold: 0.2,
  },
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
