var d = new Date();
var n = d.getTime(); 
var i = 0;
console.log(n);

setTimeout(function() {
	document.body.className = "body"
}, 3000)

// document.
// getElementById("closeIt").addEventListener("click", function(event){
// 	document.body.className = "bodyResume"
// })



$("#closeIt").click(function() {
  $('.body').toggleClass('bodyResume');
});