    document.addEventListener('DOMContentLoaded', function() {
        const menuBar = document.querySelector('#menu-bar');
        const navbar = document.querySelector('.header .navbar');

        menuBar.addEventListener('click', function() {
            navbar.classList.toggle('active');
        });
    });


    

