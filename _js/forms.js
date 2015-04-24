(function() {
  $('.js-options input').change(function() {
    var check, type;
    type = $(this).attr('type');
    check = $(this).parent('label');
    if (type === 'checkbox') {
      return check.toggleClass('checked');
    } else if (type === 'radio') {
      check.siblings('label').removeClass('checked');
      return check.addClass('checked');
    }
  });

}).call(this);
