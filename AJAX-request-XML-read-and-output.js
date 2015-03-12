window.onload = init();
function init(){
	var request = new XMLHttpRequest();
	request.open('GET', 'data.xml');
	request.onreadystatechange = function() {	
		if((request.status===200) && (request.readyState===4)){ // was giving the following errors without (request.readyState===4):
		//TypeError: request.responseXML is null && Uncaught TypeError: Cannot read property 'getElementsByTagName' of null
		console.log(request.responseXML.getElementsByTagName('speaker')[0]); // Logs first element to console
		console.log(request.responseXML.getElementsByTagName('name')[0].firstChild); // Logs the first element's <name> tags' first child to console
		console.log(request.responseXML.getElementsByTagName('name')[0].firstChild.nodeValue); // Logs the first element's <name> tags' firstChild's nodeValue to console
		var items = request.responseXML.getElementsByTagName('name');
		var output = '<ul>';
			for(var i = 0;i < items.length; i++){
				output += '<li>' + items[i].firstChild.nodeValue + '</li>';
				console.log(items[i].firstChild.nodeValue);
			}
		output += '</ul>';
		document.getElementById('update').innerHTML = output;
		}
	};
	request.send();
};