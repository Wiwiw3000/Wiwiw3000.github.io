document.addEventListener("DOMContentLoaded", function () {
    const button = document.getElementById("buttonCV");
    const img = document.getElementById("mark");

    if (button && img) {
        let isFirst = localStorage.getItem("cvClicked") !== "true";

        img.src = isFirst ? "img/Check Circle Icon.png" : "img/Green Circle.png";

        button.addEventListener("click", function () {
            isFirst = !isFirst;

            if (isFirst) {
                img.src = "img/Check Circle Icon.png";
                localStorage.setItem("cvClicked", "false");
            } else {
                img.src = "img/Green Circle.png";
                localStorage.setItem("cvClicked", "true");
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const progressBars = document.querySelectorAll('.progress');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            const bar = entry.target;
            const targetWidth = bar.getAttribute('data-width');

            if (entry.isIntersecting) {
                // Встановлюємо ширину
                bar.style.width = targetWidth;
            } else {
                // Скидаємо назад до 0 — тоді анімація повториться
                bar.style.width = '0';
            }
        });
    }, {
        threshold: 0.5,
    });

    progressBars.forEach(bar => observer.observe(bar));
});

document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    const subject = `Нове повідомлення від ${name}`;
    const body = `Email: ${email}%0D%0A%0D%0A${encodeURIComponent(message)}`;
    const mailtoLink = `mailto:your@email.com?subject=${encodeURIComponent(subject)}&body=${body}`;

    window.location.href = mailtoLink;
});

particlesJS('particles-js', {
    particles: {
        number: { value: 80 },
        color: { value: '#000000' },
        line_linked: {
            enable: true,
            color: '#000000',
            opacity: 0.2
        },
        move: { speed: 1 },
        size: { value: 2 },
    },
    interactivity: {
        detect_on: 'canvas',
        events: {
            onhover: { enable: true, mode: 'grab' },
            onclick: { enable: false }
        },
        modes: {
            grab: { distance: 140, line_linked: { opacity: 0.5 } }
        }
    }
});

const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show');
});

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".page").classList.add("loaded");
});