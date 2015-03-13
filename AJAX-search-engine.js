$('#search').keyup(function() {
	var searchField = $('#search').val();
	var myExpression = new RegExp(searchField, "i"); // "i" means to perform a case-insensitive search
	var output = '<ul class="searchresults">';
	$.getJSON('data.json', function(data) { // function literal
		// console.log(data);
		//console.log(searchField);
		$.each(data, function(key, val) {
		if (val.name.search(myExpression) != -1){
			output += '<li>';
			output += '<h2>' + val.name + '</h2>';
			output += '</li>';
			}
		});
		output += '</ul>';
		$("#update").html(output);
	});
});



