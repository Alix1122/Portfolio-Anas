// skills / experience / education animation

var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("active-tab");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-tab");
}

// -----------------------------------------------

const burger = document.getElementById("burger");
const navMenu = document.getElementById("nav-menu");
const navLinks = document.querySelectorAll(".nav-link");

// Ouvrir/fermer le menu burger
burger.addEventListener("click", () => {
    burger.classList.toggle("active");
    navMenu.classList.toggle("active");
});

// Fermer le menu après avoir cliqué sur un lien
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    });
});

// Fermer le menu en cliquant en dehors
document.addEventListener("click", (e) => {
    if (
        !navMenu.contains(e.target) &&
        !burger.contains(e.target) &&
        navMenu.classList.contains("active")
    ) {
        burger.classList.remove("active");
        navMenu.classList.remove("active");
    }
});

// ---------------------------------------------------

const scriptURL = 'https://script.google.com/macros/s/AKfycbyQ4yMs0oJBzNguckkY07LcOzaccJ5ihF5UvvFfsgIy4jLqclzjl-wDYjslAKG7gBvj2g/exec'

const form = document.forms['contact-form']

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thank you! Your message is submitted successfully." ))
    .then(() => { window.location.reload(); })
    .catch(error => console.error('Error!', error.message))
})