$(document).ready( function () {
	
	$('form').submit( function (e) {
		
		e.preventDefault();
		
		var data = {};
		
		data.name = $('#name').val();
		data.uri = $('#uri').val();
		data.photo = $('#photo').val();
		data.comment = $('#comment').val();
		
		$('aside').grow('append', data);

	});
		
	$('aside').grow({
		templateURL: 'templates/comments.html',
		cache: false,
		animation: 'slide',
		speed: 1000
	});
});