document.addEventListener('DOMContentLoaded', function() {
    const sidebar = document.querySelector('.hide-sidebar-wrap');
    const overlay = document.querySelector('.sb-overlay');
    const sidebarToggles = document.querySelectorAll('.sidebar-button-wrap');

    sidebarToggles.forEach(toggle => {
        toggle.addEventListener('click', function() {
            sidebar.classList.toggle('sidebar-visible');
            overlay.classList.toggle('active');
        });
    });

    overlay.addEventListener('click', function() {
        sidebar.classList.remove('sidebar-visible');
        overlay.classList.remove('active');
    });
});

