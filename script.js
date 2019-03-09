$('.door').on('click', function() {
	$('.door').toggleClass('doorOpen');
});

$('.doorway').on('click', function() {
	if ($('.door').hasClass('doorOpen')) {
		$('.doorway').addClass('future');
		var track = document.getElementById('cyberTrack');
		track.volume = 0.1;
		track.play();
	}
});
