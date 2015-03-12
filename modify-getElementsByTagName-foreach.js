var request = new XMLHttpRequest();
request.open('GET', 'data.txt');
request.onreadystatechange = function() {	
if(request.status==200){
	//console.log(request);
	var modify = document.getElementsByTagName('ul')[0].getElementsByTagName('li'); //select first list
	var modify2 = document.getElementsByTagName('ul')[0].getElementsByTagName('li'); //select second list
	//modify.innerHTML = request.responseText; //select/modify 2nd tag element
	_.each(modify, function(eachone){
		console.log(eachone);
		eachone.innerHTML = request.responseText; // Output data to each list item in first list, using underscore's foreach method
	});
	
}
};
request.send();
