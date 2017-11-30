# Workflowy-Columns

A replacement for [this Stylish user style](https://userstyles.org/styles/132660/workflowy-2-3-4-5-6-columns), which no longer works after Workflowy changed how tags are encoded in the HTML. Pure CSS is no longer powerful enough on its own; we need a JavaScript kludge. So here we are.

In action:

![demo gif](https://thumbs.gfycat.com/SpecificYawningDugong-size_restricted.gif)

## Installation

Download this repository. If you downloaded it as a zip, unzip it. Navigate to chrome://extensions/, and make sure "Developer mode" is checked. Click "Load unpacked extension...", select the downloaded folder, and hit OK.

## Usage

Include one of the tags `#cols-2`, `#cols-3`, etc. (up to `#cols-6`) in the name of a node to make its contents arrange into the desired number of columns.
Columns can be nested.
The view refreshes automatically.

Click the extension icon to globally toggle columns functionality.

## Issues

There are several. Off the top of my head:

- The order of the child nodes does not entirely determine which column they end up in; "bigger" nodes (with more visible children) can move siblings out of the way.
- The contents of a column-ified node scroll horizontally, which is annoying.
- The expand/collapse button doesn't show always show up properly.
- Sometimes the whole extension breaks, and needs to be restarted (I'm pretty sure this only happens when "zooming" in or out of a node).

Please report any additional issues here! (If it's about the script giving an error, please include the stack trace from the developer console.)
