//Reveal objects upon scrolling
ScrollReveal({
  scale: 0.85,
  delay: 375,
  duration: 1000,
});
ScrollReveal().reveal('.box');

//Smooth scrolling for buttons to elements
var buttons = ['about', 'code', 'apps', 'skills', 'hire'];
for (var i = 0; i < buttons.length; i++) {
  let btn = `#${buttons[i]}-btn`;
  let div = `#${buttons[i]}`;
  $(btn).click(function() {
    $('html, body').animate(
      {
        scrollTop: $(div).offset().top,
      },
      'slow'
    );
    return false;
  });
}

//Smooth scrolling for button to return to top
$('#top').click(function() {
  $('html, body').animate({ scrollTop: 0 }, 'slow');
  return false;
});

//Hide button up on load
$('#top').hide();

//Fade button to return to top depending on scroll location
$(window).scroll(function() {
  const duration = 500;
  if ($(this).scrollTop() > $('#about').offset().top) {
    $('#top').fadeIn(duration);
  } else {
    $('#top').fadeOut(duration);
  }
});
