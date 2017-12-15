chrome.browserAction.onClicked.addListener(function (tab) {
  chrome.tabs.query({'active': true, 'lastFocusedWindow': true}, function (tabs) {
    const url = tabs[0].url.split('watch?v=');
    (url[0] === "https://www.youtube.com/")
      && chrome.tabs.create({ url: "http://notesense.herokuapp.com/single/" + url[1]});
  });
});

