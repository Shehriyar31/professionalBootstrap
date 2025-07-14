document.addEventListener('DOMContentLoaded', () => {
    const colorButtons = document.querySelectorAll('.color-btn');
    const heroSection = document.querySelector('.hero-section');
    const contactSection = document.querySelector('.contact-section');
    const testimonialsSection = document.querySelector('#testimonails');
    const navbar = document.querySelector('.navbar');
    const footer = document.querySelector('.main-footer-section');
    const contactDivs = document.querySelectorAll('.contact-div');

    const rootStyles = getComputedStyle(document.documentElement);
    const defaultColor = rootStyles.getPropertyValue('--bs-dark-color').trim();

    function setBackgroundColor(color) {
        if (heroSection) heroSection.style.backgroundColor = color;
        if (contactSection) contactSection.style.backgroundColor = color;
        if (testimonialsSection) testimonialsSection.style.backgroundColor = color;
        if (navbar) navbar.style.backgroundColor = color;
        if (footer) footer.style.backgroundColor = color;
        if (contactDivs.length > 0) {
            contactDivs.forEach(div => {
                div.style.backgroundColor = color;
                div.style.borderColor = color;
                div.style.boxShadow = `0 0 10px ${color}`;
            });
        }
    }

    setBackgroundColor(defaultColor);

    function setActiveButton(color) {
        colorButtons.forEach(btn => {
            if (btn.getAttribute('data-color') === color) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
    }

    setActiveButton(defaultColor);

    colorButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const color = btn.getAttribute('data-color');
            setBackgroundColor(color);
            setActiveButton(color);
        });
    });
});
