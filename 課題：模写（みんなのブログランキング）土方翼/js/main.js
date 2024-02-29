$(function() {
    //slick
    $(".slideItems").slick({
        autoplay: true,
        autoplaySpeed: 4000,
        infinite: true,
        slidesToShow:2,
        slidesToScroll:1,
      });
    
    //ハンバーガーメニュー変形
      $(".hamburger").click(function() {
        if($('#header').hasClass('close')) {
          $('#header').removeClass('close');
        }else{
          $('#header').addClass('close');
        }
    });
    
    //ハンバーガーメニュー、モーダル
    $('.hamburger').click(function(){
        $('.hamburgerModal').fadeIn();
    });

    $('#close').click(function(){
        $('.hamburgerModal').fadeOut();
    });

    $('.pointer').click(function(){
      var $acordion=$(this).find('.acordion');
      if($acordion.hasClass('open')) {
        $acordion.removeClass('open');
        $acordion.slideUp();
      } else {
        $acordion.addClass('open');
        $acordion.slideDown();
      }

    });
    
    
});