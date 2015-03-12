var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {
if(request.status==200){
	//console.log(request);
	var modify = document.getElementsByTagName('ul')[0].getElementsByTagName('li'); //select first list
	modify[2].innerHTML = request.responseText; //select/modify 2nd tag element
}
};
request.send();
