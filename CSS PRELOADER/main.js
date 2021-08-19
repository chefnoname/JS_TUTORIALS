//Function that eleminates the pre-loader

window.addEventListener('load', () => {
    const preload = document.querySelector('.preload')
    preload.classList.add('preload-finish')
});

