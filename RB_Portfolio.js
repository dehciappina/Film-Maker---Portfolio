document.addEventListener("backbutton", yourCallbackFunction, false);

function yourCallbackFunction(){
 alert(window.location);
 }

/*setTimeout(function() {
    $('.sk-circle').fadeOut(1000)
}, 3500)

window.onload = function() {
    $("#loading_page").slideUp(900, 'swing');
}*/

window.addEventListener("load",function() {
    setTimeout(function(){
        // This hides the address bar:
        window.scrollTo(0, 1);
    }, 0);
});

;(function(){
  function id(v){return document.getElementById(v); }
  function loadbar() {
    var ovrl = id("overlay"),
        prog = id("progress"),
        stat = id("progstat"),
        img = document.images,
        c = 0;
        tot = img.length;

    function imgLoaded(){
      c += 1;
      var perc = ((100/tot*c) << 0) +"%";
      prog.style.width = perc;
      stat.innerHTML = "Raphael Bianco - Portfólio" + "<br />" + "<br />" + perc;
      if(c===tot) return doneLoading();
    }
    function doneLoading(){
      ovrl.style.opacity = 0;
      setTimeout(function(){ 
        ovrl.style.display = "none";
      }, 1500);
    }
    for(var i=0; i<tot; i++) {
      var tImg     = new Image();
      tImg.onload  = imgLoaded;
      tImg.onerror = imgLoaded;
      tImg.src     = img[i].src;
    }    
  }
  document.addEventListener('DOMContentLoaded', loadbar, false);
}());





$('#inicio ul li').mouseenter(function() {
    $(this).find('p').finish().slideToggle(250)
    
    $(this).find('img').css('filter', 'brightness(0.55)').css('transition', 1 + 's')
    
    $(this).find('img').css('transform', 'scale(1.1)').css('transition', 2 + 's').css('transitionTimingFunction', 'easeInOut')
    
})

    $('#inicio ul li').mouseleave(function () {
        $(this).find('img').delay(100).css('filter', 'brightness(1)')
        
        $(this).find('p').finish().fadeOut(1000)
        
        $(this).find('img').css('transform', 'scale(1)')
    })

$('#inicio ul li').click(function () {
        $(this).find('img').css('filter', 'brightness(-10)').css('transition', 4 + 's')
    
    $('#contato').hide()
    $('#inicio').slideToggle(650, 'swing')
    $('.contact_details_margin').delay(400).slideToggle(300, 'swing')
    })


$('#inicio_botao').click(function() {
    
    $('html, body').animate({
      scrollTop: 0
    }, 500);
    
    $('#um_dia_de_chef, #negocio_de_familia, #primavera_te_amo, #que_seja_doce, #sessao_de_terapia, #magal_e_os_formigas').slideUp(750, 'swing')
    
    $('#contato').slideUp(500)
    
    $('.contact_details_hide').delay(800).slideDown(750, 'swing')
    
    $('.contact_details_margin').delay(650).slideDown(650, 'swing')
    
    $('#inicio').delay(500).slideDown(850, 'swing')
    
})

$('#contato_botao').click(function() {
    
    $('#um_dia_de_chef, #negocio_de_familia, #primavera_te_amo, #que_seja_doce, #sessao_de_terapia, #magal_e_os_formigas').slideUp(350, 'swing')
    
    
    $('#inicio').slideUp(750, 'swing')
    $('.contact_details_hide').hide()
    
    $('.contact_details_margin').fadeIn()
    
    $('#contato').delay(400).slideDown(850, 'swing')
   
    
})





$('#um_dia_de_chef_li').click(function() {
    $('#um_dia_de_chef').delay(850).slideDown(800, 'swing')
})

$('#negocio_de_familia_li').click(function() {
    $('#negocio_de_familia').delay(700).slideDown(1000, 'swing')
})

$('#magal_e_os_formigas_li').click(function() {
    $('#magal_e_os_formigas').delay(700).slideDown(500, 'swing')
})

$('#primavera_te_amo_li').click(function() {
    $('#primavera_te_amo').delay(700).slideDown(500, 'swing')
})

$('#que_seja_doce_li').click(function() {
    $('#que_seja_doce').delay(700).slideDown(1500, 'swing')
})

$('#sessao_de_terapia_li').click(function() {
    $('#sessao_de_terapia').delay(700).slideDown(1500, 'swing')
})






$('#logotipo_top').click(function() {
    $('#inicio').slideDown(650, 'swing')
    
    $('#um_dia_de_chef, #negocio_de_familia, #primavera_te_amo, #que_seja_doce, #sessao_de_terapia, #magal_e_os_formigas').slideUp(650, 'swing')
    
    $('.contact_details_hide').delay(800).slideDown(750, 'swing')
    
    $('.contact_details_margin').delay(650).slideDown(650, 'swing')
    
    $('#contato').slideUp()
    
    $('html, body').animate({
      scrollTop: 0
    }, 500);
})


$('#mudar_ingles').click(function() {
    $('#inicio_botao').text('Home')
    $('#contato_botao').text('Contact')
    $('#details_location').text('São Paulo - Brazil')
    $('#bottom_credits p').text('Developed by Andre Ciappina')
    
    $("#nome-text").attr("placeholder", "Name");
    $("#email-textarea").attr("placeholder", "Type your message");
})

$('#mudar_portugues').click(function() {
    $('#inicio_botao').text('Início')
    $('#contato_botao').text('Contato')
    $('#details_location').text('São Paulo - Brasil')
    $('#bottom_credits p').text('Desenvolvido por André Ciappina')
    $("#nome-text").attr("placeholder", "Nome");
    $("#email-textarea").attr("placeholder", "Digite sua mensagem");
})



$('#botaoenviar').click (function() {
    var error=false
    
    $('#form_email').find ('input, textarea').each(function() {
        
        if($(this).val().trim() == "" && !error) {
            
            alert('Verifique se todos os campos estão preenchidos.')
            $(this).focus()
            error=true
        }
    })
    
    if(!error) {
        var dados = $('#form_email').serialize()
        $.ajax({
            url: 'email-form.php',
            method: 'post',
            data: dados,
            success: function(retorno) {
                alert('E-mail enviado com sucesso.')
            },
            error: function(err) {
                alert('tente novamente.')
            }
        })
    }
})

/* ABERTURA DE JANELAS SECUNDARIAS

$('#inicio ul li').click (function () {
    var self = this
    if ($(this).data("load")!=true) {
        $.ajax({
            url:$(self).attr("href").replace('#', '') + ".html",
            success:function(data) {
                $($(self).attr("href")).html(data).fadeIn()
                $(this).data("load", true)
            },
            error:function(err) {
                console.error(err)
            }
        })
    }
    
    else {
        $($(this).attr("href")).fadeOut()
    }
});
*/



/*$('#lateral_menu button').click(function clickmenu(ev) {
    var destino=$(this).data('href');
        $('section:visible').fadeOut (220, function (){
            $('section:visible').fadeIn (220, function () {
                
            });
        });
    $('#lateral_menu button').removeClass('ativo')
    $(this).addClass('ativo')
    
    if($(window).width() <= 1130) {
       var top=$('#conteudo-lateral').position().top
       $("html, body").animate({
           scrollTop: top + "px"
       }) 
    }
});*/