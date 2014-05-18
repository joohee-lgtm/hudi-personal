var jamjar = document.getElementById("flickView");
jamjar.addEventListener('touchstart', handleTouchStart, false);
jamjar.addEventListener('touchmove', handleTouchMove, false);
jamjar.addEventListener('touchend', handleTouchEnd, false);

var xDown = null;
var yDown = null;

function handleTouchStart(evt) {
	xDown = evt.touches[0].clientX;
	yDown = evt.touches[0].clientY;
};

function handleTouchMove(evt) {
	if (!xDown || !yDown) {
		return;
	}
	var xUp = evt.touches[0].clientX;
	var yUp = evt.touches[0].clientY;
	var xDiff = xDown - xUp;
	var yDiff = yDown - yUp; /* most significant */
	if (Math.abs(xDiff) > Math.abs(yDiff)) {
		if (xDiff > 0) {
			moveLeft();
		} else { /* right swipe */
			moveRight();
		}
	} else {
		if (yDiff > 0) { /* up swipe */
		} else { /* down swipe */
		}
	} /* reset values */
	xDown = null;
	yDown = null;
};

function handleTouchEnd(evt) {
	jamjar.style.left = "0px";
}

function moveRight() {
	nAnimateTimer = null;
	fAnimate = function() {
		jamjar.style.left = parseInt(jamjar.style.left, 10) + 20 + "px";

		if (parseInt(jamjar.style.left, 10) < 320) {
			nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
		}
		if ( parseInt(jamjar.style.left, 10) === 320 ) {
			jamjar.style.display = "none";
		}
	};
	nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
}

function moveLeft() {
	//jamjar.style.left = "0px";
	nAnimateTimer = null;
	fAnimate = function() {
		jamjar.style.left = parseInt(jamjar.style.left, 10) - 20 + "px";

		// terminate
		if (parseInt(jamjar.style.left, 10) > -320) {
			nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
			changeJamjar();
		}
	};
	nAnimateTimer = setTimeout(fAnimate, 1000 / 60);
}

function changeJamjar() {
	return;
}