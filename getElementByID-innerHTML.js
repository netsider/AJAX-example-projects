var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
if(request.status==200){
	//console.log(request);
	var modify = document.getElementById('update');
	modify.innerHTML = request.responseText; //output to page
}
};
request.send();
