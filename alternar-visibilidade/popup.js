/**
twitter.com/henriqueramos
*/

document.addEventListener('DOMContentLoaded', function () {
    chrome.runtime.getBackgroundPage(function(bg) {
		if(bg.statusSistema == "on" || bg.statusSistema == "standby"){
			$("#warn").html("<span style=\"color:red; font-weight:bold\">Imagens escondidas!</span>");
			$("#status option[value=on]").attr('selected','selected');
		}else if(bg.statusSistema == "off"){
			$("#warn").html("<span style=\"color:green; font-weight:bold\">Imagens habilitadas</span>");
			$("#status option[value=off]").attr('selected','selected');
		}
    });
});
$("document").ready(function(){
	$("#status").on("change", function(data){
		var statusSistema = $(this).val();
		if(statusSistema == "on"){
			chrome.tabs.getSelected(null, function(tab) {
				if(tab.url == "https://twitter.com/" || tab.url == "http://twitter.com/"){
					chrome.runtime.sendMessage({type: "statusApp", statusApp:"on"});
					chrome.tabs.executeScript(null, {code:"jQuery(\"div.is-preview\").each(function(i, e){jQuery(this).hide();});jQuery(\"#timeline\").on(\"DOMSubtreeModified\",function(){jQuery(\"div.is-preview\").hide();});"});
					$("#warn").html("<span style=\"color:red; font-weight:bold\">Imagens escondidas!</span>");
				}
			});
		}else{
			chrome.tabs.getSelected(null, function(tab) {
				if(tab.url == "https://twitter.com/" || tab.url == "http://twitter.com/"){
					chrome.runtime.sendMessage({type: "statusApp", statusApp:"off"});
					chrome.tabs.executeScript(null, {code:"jQuery(\"div.is-preview\").each(function(i, e){jQuery(this).show();});jQuery(\"#timeline\").off(\"DOMSubtreeModified\");"});
					$("#warn").html("<span style=\"color:green; font-weight:bold\">Imagens habilitadas</span>");
					
				}
			});
		}
	});
});