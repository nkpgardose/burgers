$(document).on('click', '.js-burger', function (e) {
  e.stopPropagation();
  $(this).toggleClass('is-active');
});
