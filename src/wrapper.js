
// chrome.experimental.processes のラッパ的なもの
function p() {
	var args = Array.prototype.slice.call(arguments);
	
	if (args[0].substring(0, 2) == 'on') {
//		chrome.experimental.processes[args[0]].addListener.apply(null, args.slice(1));
		chrome.experimental.processes[args[0]].addListener(args[1]);
	} else {
		chrome.experimental.processes[args[0]].apply(null, args.slice(1));
	}
}
// chrome.tabs のラッパ的なもの
function t() {
	var args = Array.prototype.slice.call(arguments);
	
	if (args[0].substring(0, 2) == 'on') {
//		chrome.tabs[args[0]].addListener.apply(null, args.slice(1));
		chrome.tabs[args[0]].addListener(args[1]);
	} else {
		chrome.tabs[args[0]].apply(null, args.slice(1));
	}
}
