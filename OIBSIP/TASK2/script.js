const menuBtn = document.querySelector(".menu-btn");
const nav = document.querySelector(".navbar nav");

menuBtn.addEventListener("click", () => {
  nav.classList.toggle("mobile-active");
});

document.querySelectorAll(".navbar nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("mobile-active");
  });
});


/* HERO WORD CHANGE */

const typingText = document.getElementById("typingText");

const words = [
  "LEARNING",
  "BUILDING",
  "CREATING",
  "IMPROVING"
];

let index = 0;

setInterval(() => {

  typingText.style.opacity = "0";
  typingText.style.transform = "translateY(8px)";

  setTimeout(() => {

    index = (index + 1) % words.length;

    typingText.textContent = words[index];

    typingText.style.opacity = "1";
    typingText.style.transform = "translateY(0)";

  }, 250);

}, 1800);

typingText.style.transition = "0.3s";


/* CURSOR GLOW */

const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", e => {

  cursorGlow.style.left = e.clientX + "px";
  cursorGlow.style.top = e.clientY + "px";

});


/* SCROLL REVEAL */

const revealItems = document.querySelectorAll(
  ".story-title, .story-text, .stack-card, .project-row, .value-item, .section-heading"
);

const observer = new IntersectionObserver(entries => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {

      entry.target.classList.add("show");

    }

  });

}, {
  threshold: 0.12
});

revealItems.forEach(item => {

  item.classList.add("hidden");
  observer.observe(item);

});


/* ADD REVEAL CSS USING JS */

const revealStyle = document.createElement("style");

revealStyle.innerHTML = `

.hidden {
  opacity: 0;
  transform: translateY(30px);
  transition: opacity .7s ease, transform .7s ease;
}

.show {
  opacity: 1;
  transform: translateY(0);
}

`;

document.head.appendChild(revealStyle);


/* ACTIVE NAV */

const sections = document.querySelectorAll("section[id]");
const links = document.querySelectorAll(".navbar nav a");

window.addEventListener("scroll", () => {

  let current = "";

  sections.forEach(section => {

    const top = section.offsetTop - 180;

    if (window.scrollY >= top) {
      current = section.getAttribute("id");
    }

  });

  links.forEach(link => {

    link.style.color = "";

    if (link.getAttribute("href") === "#" + current) {
      link.style.color = "#f5f5f5";
    }

  });

});