window.addEventListener('load', () => {
    // Espera 4 segundos (2000 ms) antes de empezar a ocultar el loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        
        // efecto de desaparición 
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        // se quita cuando termina la transición
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
        
    }, 2000); 
    //(bloquear el scroll del móvil)
document.body.style.overflow = 'hidden';

window.addEventListener('load', () => {
  const loader = document.querySelector('.loader-container');
  loader.classList.add('hidden');
  
  document.body.style.overflow = '';
});
});