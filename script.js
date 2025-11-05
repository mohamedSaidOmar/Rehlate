const toggleMenu = document.getElementById('toggle-menu');
        const navLinks = document.getElementById('nav-links');

        toggleMenu.addEventListener('click', () => {
            navLinks.classList.toggle('active');
});

const links = navLinks.querySelector('a');
links.forEach(ele => {
    ele.addEventListener('click', () => {
        navLinks.classList.remove('active')
    })
});