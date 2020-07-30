chrome.runtime.onInstalled.addListener(function () {
	// localStorage に key:value をセット
	chrome.storage.sync.set({ color: '#3aa757' }, function () {
		console.log('The color is green.');
	});
	chrome.declarativeContent.onPageChanged.removeRules(undefined, function () {
		chrome.declarativeContent.onPageChanged.addRules([
			{
				conditions: [
					// 以下のサイトでのみ有効にする
					new chrome.declarativeContent.PageStateMatcher({
						pageUrl: { hostEquals: 'https://bm.best-hit.tv/reds/' },
					}),
				],
				actions: [new chrome.declarativeContent.ShowPageAction()],
			},
		]);
	});
});
