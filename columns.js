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
function updateColumns() {
  unMarkColumns();
  markColumns();
}

window.addEventListener("load", go);

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
async function go() {
  // sleep 2 seconds so all workflowy's code loads
  await sleep(2000);
  // make columns
  updateColumns();
  // set up refresh
  $('.mainTreeRoot').keydown(updateColumns);
}
