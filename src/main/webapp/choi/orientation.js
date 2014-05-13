window.addEventListener('load', function() {
	alert('changed');
})
window.addEventListener("orientationchange", function(event) {
	var windowOrientation = window.orientation;
	if(windowOrientation === 0 || windowOrientation === 180) {
		console.log("세로");
	} else if(windowOrientation === 90 || windowOrientation == -90) {
		console.log("가로");
	}
}, false);

