$(document).ready(function(){
  //Functions
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
});

