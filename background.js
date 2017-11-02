// whether or not columns mode is active
var useColumns = true;
// send messages when the button is clicked
chrome.browserAction.onClicked.addListener(function(tab) {
  var message;
  if(useColumns) {
    message = "stop";
    useColumns = false;
  } else {
    message = "start";
    useColumns = true;
  }
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.sendMessage(tabs[0].id, {greeting: message}, null);
  });
});
