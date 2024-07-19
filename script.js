document.querySelectorAll('.section').forEach(section => {
    section.addEventListener('wheel', (e) => {
        if (e.deltaY > 0) {
            const next = section.nextElementSibling;
            if (next) {
                next.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            const prev = section.previousElementSibling;
            if (prev) {
                prev.scrollIntoView({ behavior: 'smooth' });
            }
        }
    });
});
