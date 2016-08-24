$(function () {
  var form = {
    $element: $('#contact-form'),
    $nombre: $('#txtNombre'),
    $email: $('#txtEmail'),
    $contacto: $('#txtContacto'),
    $conocido: $('#selConocido'),
    $otro: $('#txtOtro'),
    $comentarios: $('#txtComentarios'),
    $enviar: $('#btnEnviar')
  };

  function validateForm() {
    if (!form.$nombre[0].checkValidity()) {
      form.$nombre[0].focus();
      form.$nombre.addClass('error');
      return false;
    } else {
      if (form.$nombre.hasClass('error'))
        form.$nombre.removeClass('error')
    }

    if (!form.$email[0].checkValidity()) {
      form.$email[0].focus();
      form.$email.addClass('error');
      return false;
    } else {
      if (form.$email.hasClass('error'))
        form.$email.removeClass('error')
    }

    if (!form.$contacto[0].checkValidity()) {
      form.$contacto[0].focus();
      form.$contacto.addClass('error');
      return false;
    } else {
      if (form.$contacto.hasClass('error'))
        form.$contacto.removeClass('error')
    }

    if (form.$conocido[0].value === '') {
      form.$conocido[0].focus();
      form.$conocido.addClass('error');
      return false;
    } else {
      if (form.$conocido.hasClass('error'))
        form.$conocido.removeClass('error')
    }

    if (!form.$otro.hasClass('hidden')) {
      if (!form.$otro[0].checkValidity()) {
        form.$otro[0].focus();
        form.$otro.addClass('error');
        return false;
      } else {
        if (form.$otro.hasClass('error'))
          form.$otro.removeClass('error')
      }
    }

    if (!form.$comentarios[0].checkValidity()) {
      form.$comentarios[0].focus();
      form.$comentarios.addClass('error');
      return false;
    } else {
      if (form.$comentarios.hasClass('error'))
        form.$comentarios.removeClass('error')
    }

    alert('Gracias!');
  }

  function conocidoHasChange() {
    var currentVal = $(this).val();

    if (currentVal === 'otro') {
      form.$otro.parent().fadeIn(function() {
        $(this).removeClass('hidden');
      });
      form.$otro[0].focus();
      form.$otro.prop('required', true);
    } else {
      var $parent = form.$otro.parent();
      if (!$parent.hasClass('hidden')) {
        $parent.fadeOut(function() {
          $(this).addClass('hidden');
        });
        form.$otro.prop('required', false);
      }
    }
  }

  // Eventos
  form.$conocido.on('change', conocidoHasChange);
  form.$element.on('submit', validateForm);
});
