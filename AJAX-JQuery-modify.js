$('#update').load('data.txt');  // Selects <div> ID "update"
$('.update').load('data.txt');  // Selects <div> with CLASS "update"
// .load automatically creates and send the XHR request

//$('#update:last').load('data.txt');  // Selects last div with ID update
//$('#update:first').load('data.txt');  // Selects first div with ID update
//$('#update:even').load('data.txt');  // Selects even divs with ID update
//$('#update:odd').load('data.txt');  // Selects odd divs with ID update

	//request.onreadystatechange = function() {	
	//	if((request.status===200) && (request.readyState===4)){ 
	//		console.log('Ajax Request Triggered');
	//	}
	//};
	
console.log(jQuery.ajaxSettings.xhr()); 
console.log('+');
console.log(jQuery.ajaxSettings);

