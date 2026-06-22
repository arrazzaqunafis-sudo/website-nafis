// Toogle class active
const navbarNav = document.querySelector('.navbar-nav');
        const hamburger = document.querySelector('#hamburger-menu');

//*ketika di klik hamburger menu di klik
hamburger.addEventListener('click', function(e) {
            e.preventDefault(); // supaya tidak reload halaman
            navbarNav.classList.toggle('active');
        });

// klik di luar menu
        document.addEventListener('click', function(e) {
            if (!menu.contains(e.target) && !menuBtn.contains(e.target)) {
                menu.classList.remove('active');
            }

 });