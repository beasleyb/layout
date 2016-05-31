"use strict";

// DOM ready.
$(function(){
	$('#inputButton').on('click', function(){
		console.log($('#inputField').val());
	});
});