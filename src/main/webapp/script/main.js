var allJars = document.querySelectorAll('.jamjar');

for (var i=0; i<allJars.length; i++){
	var jar = allJars[i];
	if (i==0){
		jar.style.top = 0;
		jar.style.left = 0;
	}
	else {
		var n = checkWindow();
		switch (n)
		{
			case 0:
				jar.style.top = setTop(i);
				jar.style.left = setTop(i);

			case 1:

			case 2:

		}
		
	}
}

function removepx(pixel){
	var re = pixel.substring(pixel.length-2,pixel);
	return re;
}

function setLeft(i){
	var check = i%3;
	var before = window.getComputedStyle(allJars[i-1]);
	if (check == 0){
		return 0;
	}


	var	p = removepx(before.left);
	var	w = removepx(before.width);
	var	ml = removepx(before.marginLeft);
	var	mr = removepx(before.marginRight);
	return p+w+ml+mr;
}

function setTop(i){

}

function checkWindow(){
	var ele = document.getElementById('featured');
	var eleWidth = window.getComputedStyle(ele).getPropertyValue("width");
	var w = eleWidth.substring(eleWidth.length-2,eleWidth);
	var casenumber;
	if (w > 1080 ){
		casenumber = 0;
	} 
	else if ( 1080 >= w > 720){
		casenumber = 1;
	}
	else if (720 >= w ){
		casenumber = 2;
	}
	return casenumber;
}