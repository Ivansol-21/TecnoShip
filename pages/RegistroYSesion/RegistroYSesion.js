// Lógica para mostrar solo la sección correspondiente según el parámetro 'view' en la URL

document.addEventListener('DOMContentLoaded', () => {
  const params = new URLSearchParams(window.location.search);
  const view = params.get('view');
  const secciones = document.querySelectorAll('.slider-regYSes__style');

  if (view === 'registro') {
    // Mostrar solo la sección de registro
    secciones[0].style.display = 'none';
    secciones[1].style.display = 'flex';
  } else if (view === 'sesion') {
    // Mostrar solo la sección de iniciar sesión
    secciones[0].style.display = 'flex';
    secciones[1].style.display = 'none';
  } else {
    // Mostrar ambas si no hay parámetro
    secciones[0].style.display = 'flex';
    secciones[1].style.display = 'flex';
  }
});
