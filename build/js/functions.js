$(document).ready(function(){
  //Functions



  function cards() {
    $envForm = $('.envelope-form');
    $('.green-card-trigger').on('click', function(){
      $envForm.removeClass('white-card orange-card purple-card').addClass('green-card');
    });
    $('.white-card-trigger').on('click', function(){
      $envForm.removeClass('green-card orange-card purple-card').addClass('white-card');
    });
    $('.orange-card-trigger').on('click', function(){
      $envForm.removeClass('white-card green-card purple-card').addClass('orange-card');
    });
    $('.purple-card-trigger').on('click', function(){
      $envForm.removeClass('white-card orange-card green-card').addClass('purple-card');
    });
  };

  function modals() {
    $('.popup-with-zoom-anim').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',

        closeBtnInside: true,
        preloader: false,

        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-zoom-in'
      });
  }

  function form() {
    // Маска для телефона
    $("[name=tel]").mask("+7(999) 999-99-99");

    // Обработка форма на AJAX
    $.validator.addMethod("minlenghtphone", function (value, element) {
      return value.replace(/\D+/g, '').length > 10;
    }, "Введите полный номер.");
    $.validator.addMethod("requiredphone", function (value, element) {
      return value.replace(/\D+/g, '').length > 1;
    }, "Это поле необходимо заполнить.");

    $("form").each(function(){
      if($(this).hasClass('card-form')) {
        $(this).validate({
          rules: {
            name: {
              required: true,
            },
            tel: {
              requiredphone: true,
              minlenghtphone: true
            }
          },
          submitHandler: function(form, event){
            event = event || window.event;
            $(form).ajaxSubmit({
                //dataType: 'script',
                error: function(){
                  alert("Ошибка!");
                },
                success: function(responseText, statusText, xhr){
                  // Отправка данных формы в Comagic
                  /*
                  Comagic.addOfflineRequest({
                      name: $(form).find('[name="name"]').val(),
                      phone: $(form).find('[name="tel"]').val(),
                  });
                  */
                  // Цель на отправку формы
                  /****  Поменять номер счетчика ****/
                  //yaCounter29402220.reachGoal('ORDER');

                  // Очистка форм после отправки
                  $('.form-input').val('');
                  $('.envelope').addClass('step-1').delay(600).queue(function(){
                      $('.envelope-body .top, .envelope').addClass('step-2').delay(300).queue(function(){
                        $('.programms').addClass('z30').delay(1200).queue(function(){
                          $('#success-trigger').trigger('click');

                            setTimeout(function(){
                            $('#success-dialog .mfp-close').trigger('click');
                            $('.envelope').removeClass('step-1');
                            $('.envelope-body .top, .envelope').removeClass('step-2');
                            $('.programms').removeClass('z30');
                            $('.envelope-body .close').removeClass('step-3');
                            $('.envelope').removeClass('step-3');
                            }, 5 * 1000);
                        });
                        $('.envelope-body .close').addClass('step-3');
                        $('.envelope').addClass('step-3');
                      });
                  });
                }
              }
            );
            return false;
          }
        });
      } else {
        $(this).validate({
          rules: {
            name: {
              required: true,
            },
            tel: {
              requiredphone: true,
              minlenghtphone: true
            }
          },
          submitHandler: function(form, event){
            event = event || window.event;
            $(form).ajaxSubmit({
                //dataType: 'script',
                error: function(){
                  alert("Ошибка!");
                },
                success: function(responseText, statusText, xhr){
                  // Отправка данных формы в Comagic
                  /*
                  Comagic.addOfflineRequest({
                      name: $(form).find('[name="name"]').val(),
                      phone: $(form).find('[name="tel"]').val(),
                  });
                  */
                  // Цель на отправку формы
                  /****  Поменять номер счетчика ****/
                  //yaCounter29402220.reachGoal('ORDER');

                  // Очистка форм после отправки
                  $('.form-input').val('');
                  // Появление "спасибо"
                  $('#success-trigger').trigger('click');

                  // Через 5 сек скрываем "спасибо"
                  setTimeout(function(){
                    $('#success-dialog .mfp-close').trigger('click');
                  }, 5 * 1000)
                }
              }
            );
            return false;
          }
        });
      }
    });


  }
  function etc() {
    $('a[href=#]').click(function(e){
      e.preventDefault()
    });

    $(window).stellar();

    $(".tel-mask").mask("+7 (999) 999-99-99");

    $(".flip-container").on({
      mouseenter: function() {
        $(this).addClass("hover");
      },
      mouseleave: function() {
        $(this).removeClass("hover");
      }
    });

    //Programms
    $('.programms .item').on('click', function(){
      $(this).removeClass("hover");
    });
  };

  function map() {
    ymaps.ready(function () {
        var myMap = new ymaps.Map('map', {
                center: [55.726315, 37.399399],
                zoom: 16,
                controls: ['zoomControl']
            }, {
                searchControlProvider: 'yandex#search'
            }),
            myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            }, {
                iconLayout: 'default#image',
                iconImageHref: 'images/map-marker.png',
                iconImageSize: [124, 187],
                iconImageOffset: [-60, -195]
            });

        myMap.geoObjects.add(myPlacemark);
        myMap.behaviors.disable('scrollZoom');
    });
  };

  function carousel() {
    var owl = $('.carousel');
    owl.owlCarousel({
        loop:true,
        margin:0,
        nav:true,
        items: 1,
        navRewind: false,
        onInitialized: callback
    });
    function callback(event) {
      $ownNavs = $('.owl-prev, .owl-next');
      $ownNavs.addClass('front').append('<i></i>');
      $ownNavs.hover(function () {
       $(this).toggleClass("front end");
    });
    }
  };

  function waypoint() {
    var $programms = $('.programms');
    var $shorty = $('.shorty');

    // =======================================
    $programms.waypoint(function(direction) {
      if (direction === 'down') {
        $('.leaves').hide();
        $('.header').addClass('remove-fixed');
      }
    }, {
      offset: '25%'
    });

    $programms.waypoint(function(direction) {
      if (direction === 'up') {
        $('.leaves').show();
        $('.header').removeClass('remove-fixed');
      }
    }, {
      offset: '50%'
    });
    // =======================================
    $shorty.waypoint(function(direction) {
      if (direction === 'down') {
        $('.shorty .item').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('animated');
                },(i*350)+0);
            })(this);
        });
      }
    }, {
      offset: '75%'
    });
    $shorty.waypoint(function(direction) {
      if (direction === 'up') {
        $('.shorty .item').removeClass('animated');
      }
    }, {
      offset: '90%'
    });
    // =======================================
    $programms.waypoint(function(direction) {
      if (direction === 'down') {
        $('.programms .item').each(function(i) {
            (function(self) {
                setTimeout(function() {
                    $(self).addClass('animated');
                },(i*350)+0);
            })(this);
        });
      }
    }, {
      offset: '75%'
    });
    $programms.waypoint(function(direction) {
      if (direction === 'up') {
        $('.programms .item').removeClass('animated');
      }
    }, {
      offset: '90%'
    });
  };

  //Func init
  etc();
  carousel();
  map();
  waypoint();
  form();
  modals();
  cards();
});

