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
          $('.closebuttonmodal').removeClass('hidden')
          $('#header').removeClass('close');
        }else{
          $('#header').addClass('close');
          $('.closebuttonmodal').addClass('hidden');
        }
    });
    
    //ハンバーガーメニュー、モーダル
    $('.hamburger').click(function(){
        $('.hamburgerModal').fadeIn();
    });

    $('#close').click(function(){
        $('.hamburgerModal').fadeOut();
        $('#header').addClass('close');
        $('.closebuttonmodal').addClass('hidden');
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
    
    $('.close').click(function(){

    })
    
});