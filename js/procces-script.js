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

document.addEventListener("DOMContentLoaded", () => {
    document.querySelector(".page").classList.add("loaded");
});