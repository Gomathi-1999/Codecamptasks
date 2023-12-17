document.addEventListener('DOMContentLoaded', function () {
    const icon = document.getElementById('icon');
    const menu = document.getElementById('menu');
  
    icon.addEventListener('click', function () {
      menu.style.display = (menu.style.display === 'flex') ? 'none' : 'flex';
    });
  
    window.addEventListener('resize', function () {
      if (window.innerWidth > 768) {
        menu.style.display = 'flex';
      } else {
        menu.style.display = 'none';
      }
    });
  })