
window.onload = init();
function init(){
var request = new XMLHttpRequest();
request.open('GET', 'data.xml');
request.onreadystatechange = function() {	
	if((request.status===200) && (request.readyState===4)){
	console.log(request.responseXML.getElementsByTagName('speaker')[0]); // Logs entire XML document to console in tree form
	}
};
request.send();

}
