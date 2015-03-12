//window.onload = init(); // Commented out to stop this file from automatically loading
var mybutton = document.getElementById('buttonload');
mybutton.onclick = init; // Why if I add parenthesis to "init", does it automatically trigger?

function init(){
	var request = new XMLHttpRequest();
	request.open('GET', 'data.json');
	request.onreadystatechange = function() {	
		if((request.status===200) && (request.readyState===4)){ 
			var items = JSON.parse(request.responseText); // Parse request.responseText, which will include all the data from data.json
			//console.log(items); // Output items to console
			var output = '<ul>';
			for (var key in items){
				output += '<li>' + items[key].name + '</li>';
				console.log('Key: ' + key); // Current array position
			}
			output += '</ul>';
			document.getElementById('update').innerHTML = output;
		}
	};
	request.send();
};