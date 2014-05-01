var photobt = document.getElementById('create');
var resultbt = document.getElementById('resultButton');

var photo = document.getElementById('photoSelectWrap');
var result = document.getElementById('resultWrap');

var images = [];

photobt.onclick = function(){
	result.style.display = "none";
	photo.style.display = "block"
}

resultbt.onclick = function(){
	result.style.display = "block";
	photo.style.display = "none"
	images = userDataModel.originalURL;
}

photo.style.display = "block";
result.style.display = "none";