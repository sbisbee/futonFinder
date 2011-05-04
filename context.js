var STORAGE_KEYS = {
  ALREADY_RAN: 'futonFinderWashere',
  FUTON_URL: 'futonURL'
};

if(localStorage.getItem(STORAGE_KEYS.ALREADY_RAN) !== 'true' && !Boolean(window.location.origin.match(/:5984/))) {
  localStorage.setItem(STORAGE_KEYS.ALREADY_RAN, true);

  var url = 'http://'+window.location.hostname+':5984';

  chrome.extension.sendRequest({ url: url }, function(futonFound) {
    if(futonFound)
      localStorage.setItem(STORAGE_KEYS.FUTON_URL, url);
  });
}
