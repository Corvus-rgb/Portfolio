window.addEventListener('load', () => {
    // Espera 4 segundos (2000 ms) antes de empezar a ocultar el loader
    setTimeout(() => {
        const loader = document.getElementById('loader');
        
        // Aplica el efecto de desaparición suave
        loader.style.opacity = '0';
        loader.style.transition = 'opacity 0.5s ease';
        
        // Quita el loader por completo cuando termina la transición
        setTimeout(() => {
            loader.style.display = 'none';
        }, 500);
        
    }, 2000); 
});