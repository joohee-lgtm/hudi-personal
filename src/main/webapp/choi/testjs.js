document.getElementById('keys').addEventListener('click', onKeyDown, false);

function onKeyDown(e) {
	var key = e.target;
	if(key.className === 'key') {
        console.log('KEY: '+key.getAttribute('value'));
    }
	else {
		console.log('out of range');
	}
}
                