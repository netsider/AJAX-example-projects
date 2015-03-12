var request = new XMLHttpRequest();
request.open('GET', 'data.xml');
request.onreadystatechange = function() {	
	if(request.status==200){
		console.log(request.responseXML); // Logs entire XML document to console in tree form
	}
};
request.send();
