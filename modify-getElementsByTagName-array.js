var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
if(request.status==200){
	//console.log(request);
	var modify = document.getElementsByTagName('ul')[1].getElementsByTagName('li');
	modify[2].innerHTML = request.responseText; //modify 2nd tag element
}
};
request.send();
