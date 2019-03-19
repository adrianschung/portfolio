ScrollReveal({
  scale: 0.85,
  delay: 375,
  duration: 1000,
});
ScrollReveal().reveal('.box');

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
  });
}
