//I want to put facts and favorites into a accordion nav bar!

//collapsible makes it so all of the headers can collapse, heightStyle allows the "box" to be as big as it needs.
$(document).ready(function() {
	$( ".accordion").accordion( {
		collapsible: true,
		heightStyle: "content"
	});
})

$(document).ready(function() {
	$( ".accordion").accordion( {
		active: true
	});
})

$(document).ready(function() {
    $( ".welcome" ).dialog( {
    	width: 400,
    	height: 200,
    	hide: { effect: "explode", duration: 300},
    	position: { my: "bottom", at: "bottom", of: window }
    });
  } );

$( ".welcome" ).dialog({ autoOpen: false });
$( ".musicButton" ).click(function() {
  $( ".welcome" ).dialog( "open" );
});