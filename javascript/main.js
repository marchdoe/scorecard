$('.menu-link').on('click', function () {
  $('.drawer').toggleClass('is-pulled-down');
});

$('.modal-link').on('click', function () {
  // event.preventDefault();
  $('body').addClass('is-not-scrollable');
});

$('.modal-close').on('click', function () {
  // event.preventDefault();
  $('body').removeClass('is-not-scrollable');
});