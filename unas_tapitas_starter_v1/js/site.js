// site.js — modo oscuro con persistencia
(function(){
  const root = document.documentElement;
  const toggle = document.getElementById('themeToggle');
  const saved = localStorage.getItem('tapitas_theme');
  if(saved === 'dark'){ root.classList.add('dark'); }
  if(toggle){
    toggle.addEventListener('click', () => {
      root.classList.toggle('dark');
      localStorage.setItem('tapitas_theme', root.classList.contains('dark') ? 'dark' : 'light');
    });
  }
})();