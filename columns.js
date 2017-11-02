function unMarkColumns() {
  var classes = ['cols', 'cols-2', 'cols-3', 'cols-4', 'cols-5', 'cols-6'];
  classes.forEach(function(name) {
    $("." + name).removeClass(name);
  });
}

function markColumns() {
  for(var i=2; i<7; i++) {
    $('.project:has(> .name > .content > span[title="Filter #cols-' + i + '"]) > .children').addClass("cols cols-" + i);
  }
}

// main update function
function updateColumns() {
  unMarkColumns();
  markColumns();
}

// refresh stuff
var observer = new MutationObserver(function(mutations) { updateColumns(); });
function setupRefresh() {
  observer.observe($('.mainTreeRoot')[0], {
    childList: true,
    attributes: false,
    characterData: false,
    subtree: true
  });
}
function teardownRefresh() {
  observer.disconnect();
}

// startup
window.addEventListener("load", async function go() {
  function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  // sleep 2 seconds so all workflowy's code loads
  await sleep(2000);
  // first time marking columns
  markColumns();
  // set up refresh
  setupRefresh();
});

// listen for messages from background script
chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?  "from a content script:" + sender.tab.url : "from the extension");
    if (request.greeting == "stop") {
      teardownRefresh();
      unMarkColumns();
    } else {
      markColumns();
      setupRefresh();
    }
  });
