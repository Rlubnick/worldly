$(function() {
  $('#scrollDown').on('click', function(e) {
    e.preventDefault();
    window.location.href='#section2';
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});