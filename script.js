$(window).on('scroll', function() {
  if ($(this).scrollTop() > 140){
    $('#header').addClass('sticky');
    $('h2').addClass('sticky')
  }
  else {
    $('#header').removeClass('sticky');
    $('h2').removeClass('sticky');
  }
});