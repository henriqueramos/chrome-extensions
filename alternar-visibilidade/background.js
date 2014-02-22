/**
twitter.com/henriqueramos
*/

var statusSistema = "standby";

chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status == 'complete' && statusSistema == "standby") {
		chrome.tabs.getSelected(null, function(tab){
			if(tab.url == "https://twitter.com/" || tab.url == "http://twitter.com/"){
				chrome.tabs.executeScript(null, {code:"$(\"div.is-preview\").each(function(i, e){$(this).hide();});$(\"#timeline\").on(\"DOMSubtreeModified\",function(){$(\"div.is-preview\").hide();});"});
				statusSistema = "on";
			}
		});
	}
});

chrome.runtime.onMessage.addListener(
	function(request,sender,sendResponse) {
		if(request.type == "statusApp") {
			if(request.statusApp == "on"){
				statusSistema = "on";
			}else if(request.statusApp == "off"){
				statusSistema = "off";
			}
		}
	}
);