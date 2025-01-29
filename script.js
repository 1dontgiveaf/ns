function handleIntersection(entries, observer) {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.classList.add('visible');
            }, 200 * index);
            observer.unobserve(entry.target);
        }
    });
}

const observer = new IntersectionObserver(handleIntersection, {
    threshold: 0.5
});

const items = document.querySelectorAll('.item');

items.forEach(item => {
    observer.observe(item);
});