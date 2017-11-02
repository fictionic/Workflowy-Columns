// whether or not columns mode is active
var useColumns = true;
// send messages when the button is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  // toggle flag
  var message;
  if (useColumns) {
    message = "stop";
    useColumns = false;
  } else {
    message = "start";
    useColumns = true;
  }
  // alert content scripts
  chrome.tabs.query({url: "*://workflowy.com/*"}, function(tabs) {
    tabs.forEach(function(tab) {
      if (tab.url.match(/.*\.com\/#\/.*/)) {
        chrome.tabs.sendMessage(tab.id, message, null);
      }
    });
  });
  // toggle icon
  if (useColumns) {
    chrome.browserAction.setIcon({ path: 'icons/icon_38.png' });
  } else {
    chrome.browserAction.setIcon({ path: 'icons/inactive_38.png' });
  }
});
