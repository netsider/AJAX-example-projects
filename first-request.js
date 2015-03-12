var request = new XMLHttpRequest();
request.open('GET', 'data.txt'); // Change to true, (default - so it's not there)
request.onreadystatechange = function() {
if(request.status===200){
	console.log(request);
	console.log("request.status is:" + request.status);
	document.writeln(request.responseText);
}
if(request.readyState===4){
	console.log('request.readyState is: ' + request.readyState);
}
}
request.send();