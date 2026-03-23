const hamburger = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");

const allLinks = document.querySelectorAll('nav a, .dropdown a');
const sections = document.querySelectorAll('section');

// Show only one section
function showSection(targetId) {
    sections.forEach(section => {
        section.classList.toggle("hidden", section.id !== targetId);
    });
}

// Default: show home only
showSection("home");

// Navigation click (desktop + mobile)
allLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        showSection(targetId);

        // Close dropdown if open
        dropdown.classList.remove("active");
    });
});

// Open menu
hamburger.addEventListener("click", () => {
    dropdown.classList.add("active");
});

// Close menu
cancel.addEventListener("click", () => {
    dropdown.classList.remove("active");
});