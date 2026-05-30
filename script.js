// NAVBAR SCROLL EFFECT

window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {
        header.style.background = "rgba(0,0,0,0.9)";
        header.style.boxShadow = "0 5px 20px rgba(255,140,0,0.15)";
    } 
    else {
        header.style.background = "rgba(0,0,0,0.5)";
        header.style.boxShadow = "none";
    }

});


// MENU CARD HOVER EFFECT

const cards = document.querySelectorAll(
    ".menu-card, .food-card"
);

cards.forEach((card) => {

    card.addEventListener("mouseenter", () => {
        card.style.transform = "translateY(-12px)";
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "translateY(0)";
    });

});


// SMOOTH FADE-IN ANIMATION

const sections = document.querySelectorAll(
    ".about, .menu, .deals, .location, .contact"
);

const observer = new IntersectionObserver(
    (entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });

    },
    {
        threshold: 0.2
    }
);

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(60px)";
    section.style.transition =
        "all 1s ease";

    observer.observe(section);

});