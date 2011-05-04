if(!Boolean(window.location.origin.match(/:5984/)))
{
  var url = 'http://'+window.location.hostname+':5984';
  var storageKey = 'futonFinder-'+url;

  chrome.extension.sendRequest({ url: url }, function(data) {
    if(data)
      localStorage.setItem(storageKey, true);
  });
}
