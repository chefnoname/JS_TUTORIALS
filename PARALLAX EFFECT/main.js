const parallax = (e, distance, speed) => {
    const item = document.querySelector(e);
    item.style.transform = `translateY(${distance * speed}px)`;
};

window.addEventListener('scroll', () => {
    parallax('header', window.scrollY, 1);
    parallax('.small-rose', window.scrollY, 0.4);
    parallax('.big-rose', window.scrollY, 0.2);

});