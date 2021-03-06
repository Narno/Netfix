function fix() {
  chrome.storage.sync.get({
    bannedSeries: '',
  }, function(items) {
    console.log('NETFIX GO!');
    var series = items.bannedSeries.split(/\r?\n/);
    $.each(series, function(key, value) {
      $("[aria-label*='" + value + "']").parent('.slider-item').hide(1000);
      $("[aria-label*='" + value + "']").parent().parent('.slider-item').hide(1000);
    });
  });
}

document.addEventListener("DOMContentLoaded", function() {
  $(document).bind('DOMSubtreeModified', function() {
    fix();
  });
});
