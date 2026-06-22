$(document).ready(function () {

  //Tooltip de Bootstrap
  const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
  [...tooltipTriggerList].map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl);
  });

  //Alerta al enviar formulario
  $("form").submit(function (event) {
    event.preventDefault();
    alert("Mensaje enviado correctamente");
  });

});
