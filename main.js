const hamburger = document.querySelector(".hamburg");
const cancel = document.querySelector(".cancel");
const dropdown = document.querySelector(".dropdown");

const allLinks = document.querySelectorAll('nav a, .dropdown a');
const sections = document.querySelectorAll('section');

function showSection(targetId) {
    sections.forEach(section => {
        section.classList.toggle("hidden", section.id !== targetId);
    });
}

showSection("home");

allLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const targetId = link.getAttribute("href").substring(1);
        showSection(targetId);

        dropdown.classList.remove("active");
    });
});

hamburger.addEventListener("click", () => {
    dropdown.classList.add("active");
});

cancel.addEventListener("click", () => {
    dropdown.classList.remove("active");
});