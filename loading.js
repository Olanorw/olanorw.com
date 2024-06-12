document.addEventListener("DOMContentLoaded", function() {
    const observerOptions = {
        threshold: 0.5 // Element becomes visible when 50% of it is in the viewport
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target); // Unobserve the element after animation
            }
        });
    }, observerOptions);

    document.querySelectorAll('.animate-on-scroll').forEach(el => {
        observer.observe(el);
    });
});
