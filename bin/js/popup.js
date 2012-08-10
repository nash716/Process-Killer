
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
// async.waterfall 的なもの
function execute() {
	var funcs = Array.prototype.slice.call(arguments),
		last = funcs.pop();

	function wrap() {
		var args = Array.prototype.slice.call(arguments);

		if (funcs.length != 0) {
			args.unshift(wrap);
		} else {
			args.unshift(null);
			last.apply(null, args);
			return;
		}
		
		try {
			funcs.shift().apply(null, args);
		} catch(e) {
			last(e);
		}
	}
	
	wrap();
}
window.onload = main;

var procs = [
	{
		text: 'すべてのプロセスを停止',
		description: 'タブとプラグインのプロセスを停止します。',
		value: 'all',
		selected: false
	}, {
		text: 'プラグインプロセスを停止',
		description: 'プラグインのプロセスを停止します。タブのプロセスはそのままです。',
		value: 'plugin',
		selected: false
	}, 	{
		text: 'タブプロセスを停止',
		description: 'タブのプロセスを停止します。プラグインのあるタブは停止しません。',
		value: 'tab',
		selected: false
	}
];

function main() {
	$('#proc').ddslick({
		data: procs,
		width: 500
	});
}