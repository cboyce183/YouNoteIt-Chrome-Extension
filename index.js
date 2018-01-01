chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    let url = tabs[0].url.split('watch?v=');
    url[1].includes('&') ? url = url[1].split('&') : url = url[1];
    (url[0] === "https://www.youtube.com/")
      && chrome.tabs.create({ url: "http://notesense.herokuapp.com/single/" + url});
  });
});

