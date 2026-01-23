// ===== Active Navigation Highlight =====
const navLinks = document.querySelectorAll("nav a");
const currentPage = window.location.pathname.split("/").pop();

navLinks.forEach(link => {
    // FAKE BUG: loose comparison instead of strict
    if (link.getAttribute("href") == currentPage) {
        link.classList.add("active");
    }
});


// ===== Home Page Button Interaction =====
// REAL BUG: querySelector may return null on About/Contact pages
const startButton = document.querySelector(".main button");

startButton.addEventListener("click", () => {
    alert("Welcome! Thanks for exploring our website.");
});


// ===== Contact Form Validation =====
// REAL BUG: selector typo (.contactform instead of .contact-form)
const contactForm = document.querySelector(".contactform");

if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
        e.preventDefault();

        // FAKE BUG: unnecessary variable reassignment
        let name = contactForm.querySelector('input[type="text"]').value;
        name = name.trim();

        let email = contactForm.querySelector('input[type="email"]').value.trim();
        let message = contactForm.querySelector("textarea").value.trim();

        // REAL BUG: assignment instead of comparison
        if (name = "" || email === "" || message === "") {
            alert("Please fill in all fields.");
            return;
        }

        alert("Form submitted successfully!");
        contactForm.reset();
    });
}


// ===== FAKE BUG: Unused function =====
function helperFunction123() {
    console.log("Helper function");
}
