
// Construção do efeito ACCORDION (ACORDEON) do JQUERY UI
$(function () {
  $("#acordeon").accordion({
    active: false,
    collapsible: true
  });


  // Validação jQuery igual do material somente para o nome
  $("#form").validate({
    debug: true,
    rules: {
      nome: { required: true, minlength: 10 }
    },
    messages: {
      nome: {
        required: "<li>Por favor entre com seu nome.</li>",
        minlength: "<li>Seu nome deve ser maior.</li>"
      }
      
    }
  }); // fechamento do validate



  // VALIDAÇÃO COM JQUERY

  // a  Representa caracteres alfabéticos (letras) (A-Z,a-z)
  // a  Porém 'a' não permite acentuação nem ç 
  // 9  Representa caracteres numéricos (números) (0-9)
  // *  Representa caracteres alfanuméricos (letras e números) (A-Z,a-z,0-9)
  // Uso do ? transforma o caracter seguinte opcional

  // Mascara para CPF com o .class
  $('.mask-cpf').mask('999.999.999-99');

  // Mascara para o Celular com o seletor ID, 
  // recebe 8 ou 9 digitos
  $("#cel").mask("(99)99999-9999");

  // Mascara para Salario - valores monetários
  $('#salario').maskMoney({
    showSymbol: true, symbol: 'R$ ',
    decimal: ',', thousands: '.', allowZero: true
  });

});