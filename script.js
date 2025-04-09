// script.js - Add any interactive elements here later

console.log("ResiduAll Website Initialized");

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            let headerOffset = 70; // Default offset
            const header = document.querySelector('header');
            if (header) {
                 // Recalculate header height on click, in case it changes (e.g., responsive)
                headerOffset = header.offsetHeight;
            }

            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

// Basic alert for "Buy" buttons (replace with actual e-commerce logic later)
document.querySelectorAll('.product-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('Redirecionando para a página de compra (funcionalidade a implementar).');
        // In a real application, you would redirect to a checkout page or add to cart.
    });
});