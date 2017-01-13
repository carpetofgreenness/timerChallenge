setTimeout(function() {
	document.body.className = "body"
	document.getElementById("interruption").className = "appear";
}, 3000)

$("#closeIt").click(function() {
  $('.body').toggleClass('bodyResume');
	setTimeout(function() {
		$('.appear').toggleClass('disappear');
	}, 3000)
});