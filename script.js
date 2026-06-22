// ======================
// CUSTOM CURSOR
// ======================

const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', (e) => {

    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';

});

// ======================
// SCROLL REVEAL
// ======================

const revealElements = document.querySelectorAll(
    '.card, .project, .achievement, .about p, .contact, .hero-left, .hero-right'
);

function revealOnScroll() {

    const triggerBottom = window.innerHeight * 0.85;

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {

            element.classList.add('reveal');
            element.classList.add('active');

        }

    });

}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ======================
// HEADER EFFECT
// ======================

const header = document.querySelector('.header');

window.addEventListener('scroll', () => {

    if (window.scrollY > 50) {

        header.style.background = "rgba(15,15,15,.95)";
        header.style.boxShadow = "0 10px 30px rgba(0,0,0,.25)";

    }

    else {

        header.style.background = "rgba(15,15,15,.7)";
        header.style.boxShadow = "none";

    }

});

// ======================
// HERO FADE IN
// ======================

window.addEventListener('load', () => {

    const heroLeft = document.querySelector('.hero-left');
    const heroRight = document.querySelector('.hero-right');

    heroLeft.style.opacity = "0";
    heroLeft.style.transform = "translateY(40px)";

    heroRight.style.opacity = "0";
    heroRight.style.transform = "translateY(40px)";

    setTimeout(() => {

        heroLeft.style.transition = "1s ease";
        heroLeft.style.opacity = "1";
        heroLeft.style.transform = "translateY(0)";

    }, 200);

    setTimeout(() => {

        heroRight.style.transition = "1s ease";
        heroRight.style.opacity = "1";
        heroRight.style.transform = "translateY(0)";

    }, 500);

});

// ======================
// PROJECT HOVER TILT
// ======================

const projects = document.querySelectorAll('.project');

projects.forEach(project => {

    project.addEventListener('mousemove', (e) => {

        const rect = project.getBoundingClientRect();

        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const rotateY = ((x / rect.width) - 0.5) * 8;
        const rotateX = ((y / rect.height) - 0.5) * -8;

        project.style.transform =
            `perspective(1000px)
             rotateX(${rotateX}deg)
             rotateY(${rotateY}deg)
             translateY(-8px)`;

    });

    project.addEventListener('mouseleave', () => {

        project.style.transform =
            'perspective(1000px) rotateX(0) rotateY(0)';

    });

});

// ======================
// ACTIVE NAV LINK
// ======================

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const sectionTop = section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") === "#" + current
        ) {
            link.classList.add("active");
        }

    });

});
