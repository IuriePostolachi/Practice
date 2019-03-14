$(document).ready(function () {

  $(".modal__form").validate({
    rules: {
      username: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      username: {
        required: "Пожалуйста введите ваше имя",
        minlength: jQuery.validator.format(" Длина от {0} букв"),
        maxlength: jQuery.validator.format(" Длина до {0} букв")
      }
    }
  });
  $(".brif-form").validate({
    rules: {
      username: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      },
      email: {
        required: true,
        email: true
      }
    },
    messages: {
      username: {
        required: "Пожалуйста введите ваше имя",
        minlength: jQuery.validator.format(" Длина от {0} букв"),
        maxlength: jQuery.validator.format(" Длина до {0} букв")
      },
      email: {
        required: "На емайл отправим информацию",
        email: "Введите емайл правильно"
      }
    }
  });
  $(".offer__form").validate({
    rules: {
      username: "required",
      username: {
        required: true,
        minlength: 2,
        maxlength: 15
      }
    },
    messages: {
      username: {
        required: "Пожалуйста введите ваше имя",
        minlength: jQuery.validator.format(" Длина от {0} букв"),
        maxlength: jQuery.validator.format(" Длина до {0} букв")
      }
    }
  });
});

$(document).ready(function () {
  $('.phone').mask('+7 (999) 999-99-99')

});