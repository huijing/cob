(function() {
  $(document).on('click', '.js-reveal', function(e) {
    var target;
    target = $(this).attr('href');
    $(target).toggleClass('opened');
    return e.preventDefault();
  });

}).call(this);
