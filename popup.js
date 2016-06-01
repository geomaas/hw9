// document.getElementsByClassName('className')
// alert("What's up bitches?!");
// chrome.tabs.create({"url": "http://google.com"});
chrome.browserAction.onClicked.addListener(function(tab) {
  console.log('Turning ' + tab.url + ' green!');
  chrome.tabs.executeScript({
    code: 'document.body.style.backgroundColor="green"'
  });
});
