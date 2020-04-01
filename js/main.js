$(document).ready(function () {
  $('.header__burger').on('click',function(){
    $('.header__burger, .nav__menu').toggleClass('active');
    $('body').toggleClass('lock');
    $('main').toggleClass('invisible')
  });
  $('.video__play').on('click', function(){
    console.log('good');
  })


});