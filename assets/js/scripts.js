setTimeout(function() {
	document.body.className = "body"
	document.getElementById("interruption").className = "appear";
}, 3000)

$("#closeIt").click(function() {
  $('.body').toggleClass('bodyResume');
  $('.appear').toggleClass('startDisappearing');
	setTimeout(function() {
		$('.startDisappearing').toggleClass('disappear');
	}, 3000)
});