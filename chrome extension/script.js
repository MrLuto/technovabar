/*Handle requests from background.html*/
function handleRequest(
	//The object data with the request params
	request, 
	//These last two ones isn't important for this example, if you want know more about it visit: http://code.google.com/chrome/extensions/messaging.html
	sender, sendResponse
	) {
	if (request.callFunction == "toggleSidebar")
		toggleSidebar();
}
chrome.extension.onRequest.addListener(handleRequest);

/*Small function wich create a sidebar(just to illustrate my point)*/
var sidebarOpen = false;
function toggleSidebar() {
	if(sidebarOpen) {
		var el = document.getElementById('mySidebar');
		el.parentNode.removeChild(el);
		sidebarOpen = false;
	}
	else {
		var sidebar = document.createElement('div');
		sidebar.id = "mySidebar";
		sidebar.innerHTML = "\
			<iframe id='if1' width='100%' height='100%' style='visibility:visible' src='https://technovabar.mrluto.tech/'></iframe>\
		";
		sidebar.style.cssText = "\
			position:fixed;\
			top:0px;\
			left:0px;\
			width:200px;\
			height:100%;\
			background:black;\
			box-shadow:inset 0 0 1em black;\
			z-index:999999;\
			overflow-y: hidden;\
			overflow-x: hidden;\
			border:none;\
		";
		document.body.appendChild(sidebar);
		sidebarOpen = true;
	}
}