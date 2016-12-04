
$('.frm_register').validate({
    rules:{
        nombre: {
            required            : true,
            minlength           : 3, 
            maxlength           : 30,
            minWords            : 1,
            maxWords            : 4,
            lettersonly         : true
        },
        apellido: {
            required            : true,
            minlength           : 3, 
            maxlength           : 30,
            minWords            : 1,
            maxWords            : 4,
            lettersonly         : true
        },
        email: {
            required            : true,
            email               : true, 
            maxlength           : 50, 
            minlength           : 6
        },
       
        contrasena: {
            required            : true, 
            minlength           : 6
        },
        confirmar_contrasena: {
            required            : true, 
            maxlength           : 10, 
            minlength           : 6, 
            equalTo             : '#contrasena'
        }
        
    },
    messages:{
        nombre:{
            required            :"Tu nombre  es requerido",
            minlength           :"El mínimo número de caracteres permitidos son {0}",
            maxlength           :"El máximo número de caracteres permitidos son {0}",
            minWords            :"Ingrese mínimo {0} palabras",
            maxWords            :"Ingrese máximo {0} palabras",
            lettersonly         :"Ingrese solo letras"
        },
        apellido:{
            required            :"Tu apellido es requerido",
            minlength           :"El mínimo número de caracteres permitidos son {0}",
            maxlength           :"El máximo número de caracteres permitidos son {0}",
            minWords            :"Ingrese mínimo {0} palabras",
            maxWords            :"Ingrese máximo {0} palabras",
            lettersonly         :"Ingrese solo letras"
        },
        email:{
            required            :"Tu email es requerido",
            email               :"El e-mail no es válido",
            minlength           :"El minimo permitido son {0} caracteres",
            maxlength           :"El máximo permitido son {0} caracteres"
        }, 
        contrasena: {
            required            :"Por favor ingrese su nueva contraseña",   
            maxlength           :"El máximo permitido son {0} caracteres",
            minlength           :"El minimo permitido son {0} caracteres"
        },
        confirmar_contrasena: {
            required            :"Por favor confirme su contraseña",    
            maxlength           :"El máximo permitido son {0} caracteres",
            minlength           :"El minimo permitido son {0} caracteres",
            equalTo             :"Las contraseñas no coinciden"
        },
       
    },
    onkeyup : false,
    onclick : false,
    debug: false,
    ignore: ':hidden:not(:checkbox)',
    errorPlacement: function(error, element) {
        if ($(element).hasClass("customSelect1")){
            $(element).parent().addClass("customselect-labelerror")
            $(element).parent().append($( error ));
        } else {
           $(error).insertAfter(element);
           $(element).addClass('error');
        }
        if($(".comunCheck_yes input").not(":checked")){
            $(".errorcusradio").show();
        }
    },
    highlight: function (element, error) { 

        setTimeout(function(){
            $(".comunCheck_yes label.error").remove();
        },200);

    }, 
    unhighlight: function (element, error) {        
        $(element).removeClass('error');
        $(error).remove();
        if ($(element).hasClass("customSelect1")){
            $(element).parent().removeClass("customselect-labelerror")
        }

        if($(".comunCheck_yes input").is(":checked")){
            $(".errorcusradio").hide();
        }
    },
    showErrors: function(element, errorMap, errorList) {
        this.defaultShowErrors(); 
    },
    submitHandler: function( form ) {



        $.post( BASE_URL + 'register/register' , $( '.form-horizontal' ).serializeArray(), function(resp, textStatus, xhr) {
            

              response = $.parseJSON( resp );
              
              if ( response.status == "SUCCES" ) {

                  //$( '.form-horizontal' ).html("");  

                  alert( response.message );

              }  else {

                  alert( response.message )      

              }




        });

        return false;

    }
});