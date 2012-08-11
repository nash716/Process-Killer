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
	}, {
		text: 'タブプロセスを停止',
		description: 'タブのプロセスを停止します。プラグインのあるタブは停止しません。',
		value: 'tab',
		selected: false
	}, {
		text: '停止したプロセスを修復',
		description: '停止したプロセスをもう一度起動させます。',
		value: 'recover',
		selected: false
	}
];

function main() {
	$('#proc').ddslick({
		data: procs,
		width: 500
	});
}