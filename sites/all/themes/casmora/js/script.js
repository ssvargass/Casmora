(function ($) {
   
 /*window.onresize = function() {
   var ancho_win = document.documentElement.offsetWidth;
   armaSombra();
   armaSearch(ancho_win);
   ajustaBox(ancho_win);
   agregaBorde(ancho_win);
   giraMenu(ancho_win);
   armaBuscIphone(ancho_win);
   centraSubmenu(ancho_win);
   centraFili(ancho_win);
   acomodaMas();
   
};*/

if(typeof(document.getElementsByClassName) != 'function') {
    document.getElementsByClassName = function (cn) {
    var rx = new RegExp("\\b" + cn + "\\b"), allT = document.getElementsByTagName("*"), allCN = [], i = 0, a;
      while (a = allT[i++]) {
        if (a.className && a.className.indexOf(cn) + 1) {
        if(a.className===cn){ allCN[allCN.length] = a; continue;   }
        rx.test(a.className) ? (allCN[allCN.length] = a) : 0;
        }
      }
    return allCN;
  }
}
onload=function(){
  var c=document.getElementsByClassName('pp'),i=-1;
  while(c[++i])
    alert(c[i].innerHTML);
  
}

jQuery(window).resize(function(){
  var ancho_win = document.documentElement.offsetWidth;


  /* Tablas establecimiento
  ---------------------------------------------------------*/

  // if (ancho_win <= 470){
  //   $('.pt-th').each(function() {
  //     $(this).removeClass("table-active");
  //   });
    
  //   $('.pt-td').each(function() {
  //     $(this).removeClass("table-active");
  //   });
  // }else{
  //   $(".desp-table1").addClass("table-active")  
  // }
  


  if (ancho_win <= 320){
	  ancho_win = 320;
	 }
   armaSombra();
   armaSearch(ancho_win);
   ajustaBox(ancho_win);
   agregaBorde(ancho_win);
   giraMenu(ancho_win);
   armaBuscIphone(ancho_win);
   centraSubmenu(ancho_win);
   centraFili(ancho_win);
   acomodaMas(ancho_win);
   armaInfo(ancho_win);
   tabActivo(ancho_win);
   armaTabs(ancho_win);
   cambiaClass(ancho_win);
   ajustaFooter(ancho_win);
})

  // function tablas_reponsivas(){
  // }

	function cambiaClass(e){
	  var ancho_search = e - 39 - 20;

			if(e <=800){
				$("#trabajadores-table .search-form .views-widget-filter-name ").css({
					'width': ancho_search	
				})
			}else{
				$("#trabajadores-table .search-form .views-widget-filter-name ").css({
					'width': '739'	
				})
			}
	
	  $(".user-register-form").append("<div class='clear'></div>");		
      $('.preheader-nav').prepend($(".login-class-lofout"));
	  $('.preheader-nav').prepend($("#block-search-form"));
	 
	 //$('.preheader-nav .clear').prepend($(".preheader-nav"));
	 
			if (e <= 999){
				$(".banner-bot").addClass("banner-color");
				$(".banner-bot").removeClass("banner-sincolor");
			}else{
				$(".banner-bot").removeClass("banner-color");
				$(".banner-bot").addClass("banner-sincolor");
			}
	}
  function acomodaMas(e){
    //acomoda el mas
      jQuery('.mas').each(function() {
          var ancho_img = $(this).parent().width();
        var alto_img = $(this).parent().height();
		
        ancho_img = ancho_img / 2;
        ancho_img = ancho_img - 25;
        alto_img = alto_img / 2;
        alto_img = alto_img - 25;
		
		
        
        $(this).css({
			'margin-top':alto_img,
          'margin-left':  ancho_img
          
        })
     }) 
  }
  
  function tabActivo(e){
    //acomoda el mas
    
    if (e >= 664 && e <=999){
      jQuery('#block-views-menu-promociones-block .view-id-menu_promociones li .active').each(function() {
        
        jQuery(this).parent().parent().parent().addClass("btn-active");
     }) 
    }else if (e >=1000){
      
    }
  }
  function armaSombra() {
      $('.shadow-slim-middle').each(function() {
        var ancho_padre = $(this).parent().width();
        
        ancho_padre = ancho_padre - 76;
        
        $(this).css({
          'width':  ancho_padre
        })
        
      });
      $('.shadow-big-middle').each(function() {
        var ancho_padre2 = $(this).parent().width();
        ancho_padre2 = ancho_padre2 - 95;
        
        $(this).css({
          'width':  ancho_padre2
        })
        
      });

  }
  
  function ajustaBox(e) {
      
      
      $('.box').each(function() {
        var ancho_content = $(this).parent().width();
        
        ancho_content = ancho_content - 32;
        
        $(this).css({
          'width':  ancho_content
        })
		
        
      });
      
      $('.box-top').each(function() {
        var ancho_content = $(this).parent().width();
        
        ancho_content = ancho_content - 32;
        
        $(this).css({
          'width':  ancho_content
        })
        
      });
      
      $('.box-bottom').each(function() {
        var ancho_content = $(this).parent().width();
        
        ancho_content = ancho_content - 32;
        
        $(this).css({
          'width':  ancho_content
        })
        
      });
      
      $('.box-medium').each(function() {
        var ancho_content2 = $(this).parent().width();
        
        ancho_content2 = ancho_content2 - 32;
        ancho_content2 = ancho_content2 + "!important"
        
        $(this).css({
          'width':  ancho_content2
        })
        
      });
      
      $('.gw-box').each(function() {
        var ancho_content4 = $(this).parent().parent().width();
        
        ancho_content4 = ancho_content4 - 32;
        
        if (ancho_content4 <= 1000){
          $(this).css({
            'width':  ancho_content4
          })
        }
        
      });
      
      $('.box-small').each(function() {
        var ancho_content3 = $(this).parent().width();
        
        if (ancho_content3 <= 675){
          ancho_content3 = ancho_content3 - 28;
          
          $(this).css({
            'width':  ancho_content3
          })
        }
        
      });
	  
	  
      
      
  }
  
   function ajustaFooter(e) {
	  if(e <=1000){
	  
	  var ancho_search = e - 60;
	  ancho_content = e - 32;
	  
	  
	   $(".ref-tit").css({
			'width': ancho_search	
		})
	  if($.browser.msie){
		  ancho_content = ancho_content - 17;
		 
		
	  }
	  $('.footer').css({
		'width':  ancho_content
	  })
	  
	  }else{
		$('.footer').css({
			'width': '1000'
		  })
		$(".ref-tit").css({
			'width': '940'	
		})
	  }
  }
  
  function armaSearch(e) {
      var ancho_search = e - 39 - 20;
      
      if(e <=1000){
        $("#search-form .form-text").css({
          'width': ancho_search 
        })
		$("#edit-custom-search-blocks-form-1--2").css({
          'width': ancho_search
        })
      }else{
        $("#search-form .form-text").css({
          'width': '943'  
        })
		$("#edit-custom-search-blocks-form-1--2").css({
          'width': '943'
        })
      }
   }
   
   function agregaBorde(e) {
      
      if(e <=1000){
        $(".menu-princ li").eq(2).css({
          'border-right': '1px solid #ffffff'
        })
      }else{
        $(".menu-princ li").eq(2).css({
          'border-right': 'none'
        })
      }
   }
   
  
   
   function ubicaDesp(e, ancho, sub_menu){
    posicionReal = jQuery(e).offset();
    var pos_desp = ancho - posicionReal.left;
    
    
    if (pos_desp <= 573){
      jQuery(sub_menu).css({
        'right':'0' 
      })
    }else{
      jQuery(sub_menu).css({
        'right':'inherit' 
      })
    }
    
   }
   function armaBuscIphone(e) {
      
      var ancho_preheader =$(".preheader-nav").width();
      var ancho_search = ancho_preheader - 49 ;
      
      var ancho_login = ancho_preheader - 60;
      
	  
	  ancho_login2 =  ancho_login + 60;
	  
	  ancho_login3 = ancho_login2 - 42;
      if(e <= 660){
        
        $(".preheader-nav .form-text").css({
          'width': ancho_search 
        })
        $(".preheader-nav .login-class").css({
          'width': ancho_login  
        })
		$(".preheader-nav .login-class-lofout").css({
          'width': ancho_login2  
        })
		$(".preheader-nav .login-class-lofout .s-logout").css({
          'width': ancho_login3  
        })
      }else{
        $(".preheader-nav .form-text").css({
          'width': '147'  
        })
        $(".preheader-nav .login-class").css({
          'width': '75' 
        })
		$(".preheader-nav .login-class-lofout").css({
          'width': '151'
        })
		$(".preheader-nav .login-class-lofout .s-logout").css({
          'width': '100'  
        })
      }
      
      
        
        
    }
    
    function centraSubmenu(e) {
      
    
      
      var e = e - 12;
      
      var ancho_nodo = e / 2;
      
      ancho_nodo = ancho_nodo - 20;
      
      if(e <= 660 && e >= 371){
        $(".sub-menu").css({
          'width': e  
        })
        $(".node_acerca_menu").css({
          'width' :   ancho_nodo,
          'float' : 'left',
          'margin' : '0'
        })
    
        
      }else if (e >= 661){
        $(".sub-menu").css({
          'width': '573'  
        })
        $(".node_acerca_menu").css({
          'width' : '170',
          'float' : 'left',
          'margin' : '0'
        })
        
      
      }else if (e <= 370){
        $(".node_acerca_menu").css({
          'float' : 'none',
          'margin':'0 auto'
        })
        $(".sub-menu").css({
          'width': e  
        })
      }
      
      
        
        
    }
  
  
  
    
  
     //Unifica los menus del footer
     
    
     
   function giraMenu(e) {
       
      if(e <= 660){
        jQuery('#block-tax-menu-acerca-de').each(function() {
             $('.preheader ').prepend($(this));
             $('.preheader-de').append($(this));
        });
        
        
      }else{
        jQuery('.region-header').each(function() {
             $('.preheader ').prepend($(this));
             $('.preheader-de').append($(this));
        });
      }
   }
   
   
   function centraFili(e) {
      
      
      if(e <= 1000){
        
        var margen_fili = e / 2;
        margen_fili = margen_fili - 97;
        
        $(".fili").css({
          'margin-left':  margen_fili
        })
      }else{
        $(".fili").css({
          'margin-left':  '0 auto -38px'
        })
      }
  }
  
  function armaInfo(e){
    var padre = $('.flex-nav-container li');
    $('.banner-bot a', padre).click(function(){
      if($(this).parent().hasClass('banner-color')){
        var info_banner = $(this).parents('.texto_slider_principal').clone();
		
        $.colorbox({
          html:info_banner,
          width: '540px',
          height: '300px',
          scrolling: false
        });
		
		$("#colorbox").addClass("color-banner");
        return false;
      } else {
        //console.log('bbb');
      }
    })
	

  }
  
  function armaTabs(e){
    var cant_tabs = $(".node-type-acerca-de .item-list ul li").size();
    cant_tabs = cant_tabs -11;
    if (e <=664){
      if (cant_tabs == 1){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'100%'
        })
      }else if (cant_tabs == 2){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'50%'
        })
      }else if (cant_tabs == 3){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'100%'
        })
      }else if (cant_tabs == 4){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'50%'
        })
      }else if (cant_tabs == 5){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'100%'
        })
      }else if (cant_tabs == 6){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'50%'
        })
      }
    }else if (e >=664 && e <=999){
      if (cant_tabs == 1){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'100%'
        })
      }else if (cant_tabs == 2){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'50%'
        })
      }else if (cant_tabs == 3){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'33%'
        })
      }else if (cant_tabs == 4){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'25%'
        })
      }else if (cant_tabs == 5){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'20%'
        })
      }else if (cant_tabs == 6){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'33%'
        })
      }
    }else if (e >=1000){
        
        $("#block-views-menu-promociones-block .view-id-menu_promociones li").css({
          'width':'100%'
        })
      
    }
  }

  Drupal.behaviors.formBeneficiario = {
    attach: function (context, settings) {
      $(".table-res .view-header .views-field").click(function(){
        var col = $(this).attr('tcol');
        $(".table-res .views-field").removeClass("table-act");
        $(".table-res .views-field.col" + col + "").addClass("table-act");
      });
      $('select', context).customSelect();
      if($('.page-user').length){
        $('.cs-forms form label span').remove();
        // $('#block-usuarios-selecta-referidos label span').remove();
        $('.cs-forms form > div > .form-item').each(function( index ) {
          $(this).find('input').removeAttr('placeholder');
          if($(this).find('input').val() != ''){
            $(this).find('label').hide();
          }
          $(this).find('input').focus(function() {
             $(this).siblings("label").hide();
          });
          $(this).find('label').click(function() {
             $(this).siblings("input").focus();
          });
          $(this).find('input').blur(function() {
            if($(this).val() === ''){
              $(this).siblings("label").show();
            }
          });
        });
        // $('#block-usuarios-selecta-referidos form > div > .form-item').each(function( index ) {
        //   if($(this).find('input').val() != ''){
        //     $(this).find('label').hide();
        //   }
        //   $(this).find('input').focus(function() {
        //      $(this).siblings("label").hide();
        //   });
        //   $(this).find('input').blur(function() {
        //     if($(this).val() === ''){
        //       $(this).siblings("label").show();
        //     }
        //   });.find('input')
        // });
        $('.cs-forms form > div .date-padding .form-item label').html("Fecha de Nacimiento");
        $('.cs-forms form > div .date-padding .form-item input').removeAttr('placeholder');
        if($('.cs-forms form > div .date-padding .form-item input').val() != ''){
          $('.cs-forms form > div .date-padding .form-item label').hide();
        }
        $('.cs-forms form > div .date-padding .form-item input').focus(function() {
           $(this).siblings("label").hide();
          /*if($(this).val() === texto){
            $(this).val('')
          }*/
        });
        $('.cs-forms form > div .date-padding .form-item input').blur(function() {
          if($(this).val() === ''){
            $(this).siblings("label").show();
          }
        });
        $('.cs-forms form > div .date-padding .form-item label').click(function() {
            $(this).siblings("input").focus();
        });
        $('.ui-datepicker-calendar td a').live("mouseup",function() {
          //if($('.cs-forms form > div .date-padding .form-item input').val() != ''){
            setTimeout(function(){ $('.cs-forms form > div .date-padding .form-item label').hide(); }, 100);
          //}
        });
      }
    }
  };

  
   
  $(document).ready(function () {

	/* Lineas Jorge
	--------------------------------------------------------------------------------*/
	
	$('.preheader-menu ul li:nth-child(2)').after('<li></li>');
	$('.preheader-menu ul li:nth-child(3)').append($('#block-views-categorias-block .lititle_menu'));
	$('.preheader-menu ul li:nth-child(3)').append($('#block-views-categorias-block .view-content'));
	$('.preheader-menu ul li .view-content').addClass('sub-menu');
	$('.preheader-menu ul li .fila').addClass('node_acerca_menu');
  
  
	/* Fin Lineas Jorge
	--------------------------------------------------------------------------------*/
	

	
		
	 
    ticktes();
    $(document).bind('cbox_closed', function(){
    	$("#colorbox").removeClass("color-banner");
	});

    
    
    $(".preheader-cont").css({
      'display':'block'  
    })
    //Reubica elementos del footer
    /*$('#block-promotions').masonry({
        // options
        itemSelector : '.item',
        columnWidth : 325
    });*/
    $('#block-promotions .bp-cont').each(function(ind){
      var imagen = $('.bp-img img',this).clone();
      $('.s-lupa',this).colorbox({
        html:imagen,
        maxWidth: '90%',
        scrolling: false
      })
      $('.mas',this).click(function(){
        // console.log('aaa')
      })
     });
	 
	 
     
     
      
     jQuery('.footer-menu').each(function() {
      $('.footer-top').append($(this));
      $('#block-menu-menu-mapa-de-navegaci-n').append($(this));
     })
     
     jQuery('.footer-redes').each(function() {
      $('.footer-top').append($(this));
      $('#block-menu-menu-mapa-de-navegaci-n').append($(this));
     })
     
     jQuery('#block-menu-menu-men-inferior-mapote').each(function() {
      $('.footer-cont').append($(this));
     })
      jQuery('.footer-top').each(function() {
      $('.footer-cont').append($(this));
     })
      jQuery('.footer-logo').each(function() {
      $('.footer-cont').append($(this));
      
      $('.footer').append($('.footer-top'));
      $('.footer').append($('.footer-logo'));
      $('.footer').append($('#block-menu-menu-men-inferior-mapote'));
      
	
      
     })
     
      /*$('.flexslider').flexslider({
      animation: "slide"
      });*/
    $(".caja1-sombra").addClass('shadow-slim-simple');
    $(".caja1-sombra").removeClass('caja1-sombra');
    
    $(".node-type-promocion .bp-cont").addClass('b-small');
    
     //Crear div (.clear), tras los campos del login User Login
     $("#user-login ").append("<div class='clear'></div>")
	 
      $("#block-views-menu-promociones-block .view-id-menu_promociones ul").append("<div class='clear'></div>")
    
    $(".node-type-acerca-de .region-content").append("<div class='clear'></div>");
	
	$(".footer-links .menu").append("<div class='clear'></div>")
	
	$("#custom-search-blocks-form-1 ").append("<div class='clear'></div>")
     
     $("#block-system-main .content ").append("<div class='clear'></div>")
     
     $("#block-system-main .caja-cont ").append("<div class='clear'></div>")
     
     $(".gw-box").append("<div class='clear'></div>")
     
     
     $(".social-line").append("<div class='clear'></div>")
     
     $(".gw-img").append("<div class='clear'></div>")
    
    //Crear sombra debajo de la caja
    $('#user-login').parent().append('<div class="shadow-slim-simple"><div class="shadow-slim-left"></div><div class="shadow-slim-middle" style="width: 924px;"></div><div class="shadow-slim-right"></div><div class="clear"></div></div>')
    
   $('.bp-cont .shadow-slim-simple').append('<div class="shadow-slim-left"></div><div class="shadow-slim-middle" style="width: 924px;"></div><div class="shadow-slim-right"></div><div class="clear"></div>')
    
    $('.shadow-big-double').append('<div class="shadow-big-left"></div><div class="shadow-big-middle" style="width: 924px;"></div><div class="shadow-big-right"></div><div class="clear"></div>')
    
    $('.shadow-big-simple').append('<div class="shadow-big-left"></div><div class="shadow-big-middle" style="width: 924px;"></div><div class="shadow-big-right"></div><div class="clear"></div>')
    
    
    
     $('#search-form').parent().append('<div class="shadow-slim-simple"><div class="shadow-slim-left"></div><div class="shadow-slim-middle" style="width: 924px;"></div><div class="shadow-slim-right"></div><div class="clear"></div></div>')
    
    $(".ps-poll .box").addClass('box-small');
    $(".ps-poll .box").removeClass('box');
    
    $(".ps-cont .box").addClass('box-medium');
    $(".ps-cont .box").removeClass('box');
    
    
    //Elimina margen de los campos de la derecha del formulario de login
    $('#user-login .form-item:odd').css({
    'margin-right':'0'  
    })
    
    
    $('.gw-cont').prepend('<div class="txt-top"></div>');
    
    
    //Crea div contenedor del submenu desplegable header
    
    /*jQuery('.preheader-menu li').each(function() {
        $(this).append('<div class="sub-menu"></div>');
        $('.sub-menu').append($('.node_acerca_menu', this));
    
        
      });*/
    
    //Ubica el logo en la estructura correcta
    jQuery('.logo').each(function() {
         $('.preheader').prepend($(this));
    
        
      });
    
    
    //Ubica el menu principal en la estructura correcta
     $('.contenedor').prepend($('#block-tax-menu-menu-principal'));
     
     $('.header-tot').append($('#block-tax-menu-menu-principal'));
     
     
     
     //Crea la estructura que contiene el campo de búsqueda y el login en el header
     jQuery('.preheader-de .region-header').each(function() {
        $(this).append('<div class="preheader-nav"></div>');
        $('.preheader-nav').append($('#block-search-form', this));
        $('.preheader-nav').append($('.login-class', this));
     });
     jQuery('.preheader-nav').each(function() {
      $(this).append('<div class="clear"></div>');
     })
     
     jQuery('.search-form .container-inline').each(function() {
      $(this).append('<div class="clear"></div>');
     })
     
     
     //Crea elementos necesarios para menu principal responsivo
     
     jQuery('.menu-princ ul').each(function() {
      $(this).append('<div class="sep-menu-right"></div>');
      $(this).append('<div class="clear"></div>');
     })
    
     
     
    
    //crea dos contenedores para hacer la caja del buscador, responsiva
    
    if ($('#search-form').length) {
      jQuery('#block-system-main .content').each(function() {
        $(this).append('<div class="sf-content"></div>');
         $('.sf-content').append($('ul', this));
        $('.sf-content').append($('ol', this));
        $('.sf-content').append($('h2', this));
        $(this).append($('.shadow-slim-simple', this));
        $('.sf-content').append('<div class="box"></div>');
        
         $('.sf-content').prepend('<div class="txt-top"></div>');
        
        $('.box').append($('h2', this));
        $('.box').append($('ol', this));
        $('.box').append($('ul', this));
        
      });
    }
    
     //Crear div (.clear), tras los footer-menu y redes footer
     $("#block-menu-menu-mapa-de-navegaci-n").append("<div class='clear'></div>")
     
  
    
    var ancho_win = document.documentElement.offsetWidth;
	
	if (ancho_win <= 660){
		
		var ancho_sub = ancho_win / 5;
		
		ancho_sub = ancho_sub * 4;
		
		ancho_sub = ancho_sub -42;
		
		$(".s-logout").css({
			'width':ancho_sub
		})
	}
  
  /* Tablas establecimiento
  ---------------------------------------------------------*/
  
  $(".table-res .view-header .views-field").click(function(){
    var col = $(this).attr('tcol');
    $(".table-res .views-field").removeClass("table-act");
    $(".table-res .views-field.col" + col + "").addClass("table-act");
  });

  /*-------------------------------------------------------------------------*/

	if (ancho_win <= 320){
	  ancho_win = 320;
	 }
	 
	 
	  if(ancho_win <=1000){
	  
	  
	  ancho_content = ancho_win - 32;
	  
	   
	  if($.browser.msie){
		  ancho_content = ancho_content - 17;
		 
		
	  }
	  $('.footer').css({
		'width':  ancho_content
	  })
	  
	  }else{
		$('.footer').css({
			'width': '1000'
		  })
	  }
	  
   armaSombra();
   armaSearch(ancho_win);
   ajustaBox(ancho_win);
   agregaBorde(ancho_win);
   giraMenu(ancho_win);
   armaBuscIphone(ancho_win);
   centraSubmenu(ancho_win);
   centraFili(ancho_win);
   armaInfo(ancho_win);
   acomodaMas(ancho_win);
   tabActivo(ancho_win);
   armaTabs(ancho_win);
   cambiaClass(ancho_win);
   ajustaFooter(ancho_win);
    
    
    
    //Acción de menú preheader
    
    $(".bp-img").hover(function(){
		
		
		var ancho_img = $(this).width();
        var alto_img = $(this).height();
		
        ancho_img = ancho_img / 2;
        ancho_img = ancho_img - 25;
        alto_img = alto_img / 2;
        alto_img = alto_img - 25;
		
		
        
        $(".mas", this).css({
			'margin-top':alto_img,
          'margin-left':  ancho_img
          
        })
		
		
       $("img", this).stop(true);
       $(".mas", this).stop(true);
       $("img", this).animate({
        'opacity':'0.3'   
      })
      $(".mas", this).animate({
        'opacity':'1'   
      })
    }, function(){
      $("img", this).stop(true);
      $(".mas", this).stop(true);
      $("img", this).animate({
        'opacity':'1'   
      })
      $(".mas", this).animate({
        'opacity':'0'   
      })
    })
    
    $(".preheader-menu ul li").click(function(){
       $(".sub-menu", this).hide();
    })
    $(".preheader-menu ul li").hover(function(){
      var ancho_win = document.documentElement.offsetWidth;

      var sub_menu = $(".sub-menu", this);
      ubicaDesp(this, ancho_win, sub_menu);
       if($(this).find(".sub-menu").length){

      }else{

      }
	  $("#block-tax-menu-menu-principal").css({
			'z-index':'0'  
	   })

       $(".sub-menu", this).show();
       $(".lititle_menu", this).css({
        'padding-top':'10px'  ,
		'padding-top':'3px'   
      })
    }, function(){
      $(".sub-menu", this).hide();
      $(".lititle_menu", this).css({
        'padding-top':'10px',
		'padding-top':'4px'    
      })
	  $("#block-tax-menu-menu-principal").css({
			'z-index':'1'  
	   })
    })

  

  $(document).bind('cbox_complete', function(){
    $("#cboxLoadedContent").find(".views-exposed-widgets #edit-uid").attr('placeholder','Buscar perfiles aqu&iacute;!')
    $('select').customSelect();
    $("#cboxLoadedContent .pt-th.desp-table2").click(function(){

    $('#cboxLoadedContent .pt-th').removeClass("table-act");
    $('#cboxLoadedContent .pt-td').removeClass("table-act");
    $("#cboxLoadedContent .pt-th.desp-table2").addClass("table-act");
    $("#cboxLoadedContent .pt-td.desp-table2").addClass("table-act");

    })
	
    // if (ancho_win <= 470){
		
    // $('.pt-th').each(function() {
    //   $(this).removeClass("table-act");
    // });
    
    // $('.pt-td').each(function() {
    //   $(this).removeClass("table-act");
    // });
    // $(".desp-table1").addClass("table-act") ;
    
    // }else{
    
    // }


    // $("#cboxLoadedContent").find(".pt-th.desp-table1").click(function(){      
    
    //   $('.pt-th').removeClass("table-act");
    //   $('.pt-td').removeClass("table-act");
    //   $(".pt-th.desp-table1").addClass("table-act");
    //   $(".pt-td.desp-table1").addClass("table-act");
    // })
    
    // $(".pt-th.desp-table2").click(function(){
    
    //   $('.pt-th').removeClass("table-act");
    //   $('.pt-td').removeClass("table-act");
    //   $(".pt-th.desp-table2").addClass("table-act");
    //   $(".pt-td.desp-table2").addClass("table-act");
    
    // })
    // $(".pt-th.desp-table3").click(function(){
    
    //   $('.pt-th').removeClass("table-act");
    //   $('.pt-td').removeClass("table-act");
    //   $(".pt-th.desp-table3").addClass("table-act");
    //   $(".pt-td.desp-table3").addClass("table-act");
    
    // })
    // $(".pt-th.desp-table4").click(function(){
    
    //   $('.pt-th').removeClass("table-act");
    //   $('.pt-td').removeClass("table-act");
    //   $(".pt-th.desp-table4").addClass("table-act");
    //   $(".pt-td.desp-table4").addClass("table-act");
    // })

    $("#colorbox a").click(function(){
    var href = $(this).attr('href');
    window.location.href = href;

    })
  });

})

})(jQuery);


var ticktes = function(){
  $ = jQuery;
  $('.btn-ticket').click( function(){
    if($(this).text() == "Participa en la rifa"){
      $(this).text("Volver");
	  
	  var alt =$(".form-item-cs-direct-name").height();
	 
      var numCampos = $('.ticket-form input',$(this).parent().parent()).size();
	  numCampos = numCampos - 2; 
      var altoCampo = 63 + 20;
      var altoForm = numCampos * altoCampo ;
      
      var altoTicket = $(this).parent().parent().height() - 462;
      
      var margenForm = -235 - altoTicket;
	  

      $('.ticket-form',$(this).parent().parent()).animate({
        'margin-top':margenForm 
      }, 300)
      $('.ticket-rifa-img',$(this).parent().parent()).animate({
        'height':'176'
        }, 300)
      $('.ticket-directa-img',$(this).parent().parent()).animate({
        'height':'176'
        }, 300)
      
        
      $('.ticket-txt',$(this).parent().parent()).animate({
        'opacity':'0'
      }, 300, function(){
        $('.ticket-form',$(this).parent().parent()).animate({
        'opacity':'1',
        'height':altoForm
        }, 300) 
        
        $('.ticket-form',$(this).parent().parent()).css({
        'z-index':'9'
        })  
      })
      
      $('.ticket-rifa-img img',$(this).parent().parent()).animate({
        'opacity':'0'
        }, 300)
      $('.ticket-directa-img img',$(this).parent().parent()).animate({
        'opacity':'0'
        }, 300)
    
    }else{
      $(this).text("Participa en la rifa");
      
      $('.ticket-form',$(this).parent().parent()).animate({
        'height':'257',
        'opacity':'0',
        'margin-top':'-256'
        }, 300, function(){
          $('.ticket-form',$(this).parent().parent()).css({
            'z-index':'-1'
          })
          $('.ticket-txt',$(this).parent().parent()).animate({
            'opacity':'1',
            'height':'auto'
          }, 300)
          $('.ticket-rifa-img img',$(this).parent().parent()).animate({
            'opacity':'1'
          }, 300)
          $('.ticket-rifa-img',$(this).parent().parent()).animate({
            'height':'180'
          }, 300)
          $('.ticket-directa-img img',$(this).parent().parent()).animate({
            'opacity':'1'
          }, 300)
          $('.ticket-directa-img',$(this).parent().parent()).animate({
            'height':'180'
          }, 300)
        }) 
    }    
  })
}

