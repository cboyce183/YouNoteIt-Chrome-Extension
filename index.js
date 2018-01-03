chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    if (tabs[0].url.includes('https://www.youtube.com/')) {
      let url = tabs[0].url.split('watch?v=');
      url[1].includes('&') ? url = url[1].split('&') : url = url[1];
      chrome.tabs.create({ url: "http://notesense.herokuapp.com/single/" + url[0]});  
    }
  });
});

