```javascript
/* =========================
   MOBILE MENU
========================= */

const menu = document.getElementById("menu");
const nav = document.getElementById("nav");

menu.addEventListener("click", () => {

    nav.classList.toggle("open");

    if (nav.classList.contains("open")) {
        menu.textContent = "✕";
    } else {
        menu.textContent = "☰";
    }

});


/* =========================
   TYPING EFFECT
========================= */

const typing = document.getElementById("typing");

const words = [
    "DEVELOPER",
    "DESIGNER",
    "PROGRAMMER",
    "PROBLEM SOLVER"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;


function type() {

    const word = words[wordIndex];

    if (!deleting) {

        typing.textContent =
            word.substring(0, letterIndex + 1);

        letterIndex++;

        if (letterIndex === word.length) {

            deleting = true;

            setTimeout(type, 1300);

            return;
        }

    } else {

        typing.textContent =
            word.substring(0, letterIndex - 1);

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            wordIndex++;

            if (wordIndex >= words.length) {
                wordIndex = 0;
            }

        }

    }

    setTimeout(type, deleting ? 50 : 100);
}

type();


/* =========================
   CUSTOM CURSOR
========================= */

const cursor = document.querySelector(".cursor");
const cursorOutline =
    document.querySelector(".cursor-outline");

const mouseGlow =
    document.querySelector(".mouse-glow");


document.addEventListener("mousemove", (e) => {

    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";

    cursorOutline.style.left = e.clientX + "px";
    cursorOutline.style.top = e.clientY + "px";

    mouseGlow.style.left = e.clientX + "px";
    mouseGlow.style.top = e.clientY + "px";

});


/* =========================
   CURSOR HOVER
========================= */

const clickable =
    document.querySelectorAll("a, button");


clickable.forEach(element => {

    element.addEventListener("mouseenter", () => {

        cursorOutline.style.width = "60px";
        cursorOutline.style.height = "60px";

    });

    element.addEventListener("mouseleave", () => {

        cursorOutline.style.width = "35px";
        cursorOutline.style.height = "35px";

    });

});


/* =========================
   ACTIVE NAVIGATION
========================= */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top =
            section.offsetTop - 250;

        if (window.scrollY >= top) {

            current =
                section.getAttribute("id");

        }

    });


    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            "#" + current
        ) {

            link.classList.add("active");

        }

    });

});


/* =========================
   CLOSE MOBILE NAV
========================= */

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

        menu.textContent = "☰";

    });

});


/* =========================
   PROJECT TILT
========================= */

const projects =
    document.querySelectorAll(".project");


projects.forEach(project => {

    project.addEventListener("mousemove", (e) => {

        const rect =
            project.getBoundingClientRect();

        const x =
            e.clientX - rect.left;

        const y =
            e.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -3;

        const rotateY =
            ((x - centerX) / centerX) * 3;

        project.style.transform =
            `perspective(800px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-10px)`;

    });


    project.addEventListener("mouseleave", () => {

        project.style.transform =
            "perspective(800px) rotateX(0) rotateY(0) translateY(0)";

    });

});


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(
        ".section-heading, .about-content, .skill, .project, .cta"
    );


const observer =
    new IntersectionObserver(
        (entries) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.style.opacity = "1";

                    entry.target.style.transform =
                        "translateY(0)";

                }

            });

        },
        {
            threshold: 0.15
        }
    );


revealElements.forEach(element => {

    element.style.opacity = "0";

    element.style.transform =
        "translateY(40px)";

    element.style.transition =
        "all 0.8s cubic-bezier(.2,.8,.2,1)";

    observer.observe(element);

});
```
