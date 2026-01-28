// ===== Home Button Interaction =====
const startBtn = document.getElementById("startBtn");

if (startBtn) {
    startBtn.addEventListener("click", () => {
        alert("Welcome! Thanks for visiting our website.");
    });
}

// ===== Contact Form Handling =====
const contactForm = document.querySelector(".contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();
        alert("Your message has been sent successfully!");
        contactForm.reset();
    });
}
