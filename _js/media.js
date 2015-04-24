(function() {
  $('.content > iframe').each(function() {
    var isMap, map, source;
    source = $(this).attr('src');
    map = /maps.google/;
    isMap = map.test(source);
    if (isMap) {
      return $(this).wrap('<figure class="map"></figure>');
    } else {
      return $(this).wrap('<figure class="video"></figure>');
    }
  });

  $('.video').fitVids();

}).call(this);