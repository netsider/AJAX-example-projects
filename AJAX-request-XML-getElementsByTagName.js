//TypeError: request.responseXML is null
//Uncaught TypeError: Cannot read property 'getElementsByTagName' of null
window.onload = init();
function init(){
var request = new XMLHttpRequest();
request.open('GET', 'data.xml');
request.onreadystatechange = function() {	
	if(request.status==200){
		console.log(request.responseXML.getElementsByTagName('link')[0]); // Logs entire XML document to console in tree form
	}
};
request.send();

}
