// DOM Elements
const mobileMenuBtn = document.getElementById("mobile-menu-btn")
const mobileMenu = document.querySelector(".mobile-menu")
const themeToggle = document.getElementById("theme-toggle")
const currentYear = document.getElementById("current-year")

// Set current year in footer
if (currentYear) {
  currentYear.textContent = new Date().getFullYear()
}

// Mobile menu toggle
if (mobileMenuBtn && mobileMenu) {
  mobileMenuBtn.addEventListener("click", () => {
    mobileMenu.classList.toggle("active")
  })
}

// Theme toggle
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme")

    // Save theme preference to localStorage
    const isDarkTheme = document.body.classList.contains("dark-theme")
    localStorage.setItem("darkTheme", isDarkTheme)
  })

  // Load saved theme preference
  if (localStorage.getItem("darkTheme") === "true") {
    document.body.classList.add("dark-theme")
  }
}

// Accordion functionality for academics page
const accordionHeaders = document.querySelectorAll(".accordion-header")

if (accordionHeaders) {
  accordionHeaders.forEach((header) => {
    header.addEventListener("click", () => {
      const accordionItem = header.parentElement
      const accordionContent = header.nextElementSibling

      accordionItem.classList.toggle("active")

      if (accordionItem.classList.contains("active")) {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + "px"
        header.querySelector("i").classList.replace("fa-chevron-down", "fa-chevron-up")
      } else {
        accordionContent.style.maxHeight = 0
        header.querySelector("i").classList.replace("fa-chevron-up", "fa-chevron-down")
      }
    })
  })
}

// Contact form submission
const contactForm = document.getElementById("contact-form")
const formStatus = document.getElementById("form-status")

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const formData = new FormData(contactForm)

    fetch("contact-form-handler.php", {
      method: "POST",
      body: formData,
    })
      .then((response) => response.text())
      .then((text) => {
        formStatus.textContent = text
        contactForm.reset()
      })
      .catch((error) => {
        formStatus.textContent = "Oops! There was an error."
        console.error("Error:", error)
      })
  })
}
