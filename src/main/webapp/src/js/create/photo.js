var data;
google.load('search', '1');
var selectedImages = [];
var pageCursor = 1;
var imageURLHolder = [];

function userDataModel() {
	this.originalURL = [];
	this.tbURL = [];
	// console.log(this.originalURL);

	this.addPhotoURL = function(url) {
		this.originalURL.push(url);
	};

	this.addTbURL = function(url) {
		this.tbURL.push(url);
	};
	// console.log("userDataModel created");
}

function OnLoad() {
	userDataModel = new this.userDataModel();
	// Create a search control
	var searchControl = new google.search.SearchControl();
	var searcher = new google.search.ImageSearch();
	searchControl.addSearcher(searcher);

	searchControl.setSearchCompleteCallback(this, searchComplete);

	// tell the searcher to draw itself and tell it where to attach
	searchControl.draw(document.getElementById("result"));

	// tell the searcher the number of result in each page.
	searcher.setResultSetSize(8);

	var userInput = document.URL;
	userInput = userInput.split("search-photos=");

	// execute an inital search
	if (userInput[1]) {
		var decodedUserInput = decodeURI(userInput[1]);
		// console.log("userInput: " + decodedUserInput);
		searchControl.execute(decodedUserInput);
	} else {
		// console.log("userInput is undefined.");
		searchControl.execute("LINE LEONARD");
	}
	
	setUpSortPhoto();

	//searchControl.setSearchStartingCallback(this, document.prototype.OnSearchStarting);
}

//Refactoring
function searchComplete(searchControl, searcher) {

	// Check that we got results
	if (searcher.results && searcher.results.length > 0) {
		// console.log(searcher.cursor.currentPageIndex);

		// Loop through our results, printing them to the page.
		var results = searcher.results;
		// Grab our content div, clear it.
		var contentDiv = document.getElementById('overview');

		if (pageCursor === 1)
			contentDiv.innerHTML = '';
			
			
			//이벤트버블링이나 캡쳐링 이용하기
		for ( var i = 0; i < results.length; i++) {
			// For each result write it's title and image to the screen
			var result = results[i];
			var imageFrame = document.createElement('div');
			imageFrame.onmouseover = function(e) {
				e.target.style.backgroundColor = "red";
				if (e.target.tagName === "IMG")
					e.target.parentNode.style.backgroundColor = "red";
			};

			imageFrame.onmouseout = function(e) {
				e.target.style.backgroundColor = "white";
				e.target.parentNode.style.backgroundColor = "white";
			};

			imageFrame.onclick = function(e) {
				if (userDataModel.originalURL.length == 90) {
					//Alert은 피곤함.
					alert("Sorry, You cannot add more than 90 photos");
					return;
				}
				
				var frames = document.getElementById("overview").childNodes;
			
				for ( var idx in frames) {
					if (frames[idx] === e.target.parentNode) {
						var url = imageURLHolder[idx];
						userDataModel.addPhotoURL(url);
						userDataModel.addTbURL(e.target.src);
						//userDataModel.originalURL.push(imageURLHolder[idx]);
						//console.log(userDataModel.originalURL);
						//console.log(userDataModel.tbURL);
						updatePhotoCount();
						updateCarousel();
						break;
					}
				}
			};

			//var title = document.createElement('div');

			// We use titleNoFormatting so that no HTML tags are left in the
			// title
			//title.innerHTML = result.titleNoFormatting;
			var newImg = document.createElement('img');

			// There is also a result.url property which has the escaped version
			newImg.src = result.tbUrl;
			imageURLHolder.push(result.url);

			//imgContainer.appendChild(title);
			imageFrame.appendChild(newImg);

			// Put our title + image in the content
			contentDiv.appendChild(imageFrame);
		}
		// Now add links to additional pages of search results.
		//addPaginationLinks(searcher);
	}

	if (pageCursor === 8) {
		// console.log("done");
		return;

	} else {
		searcher.gotoPage(pageCursor);
		pageCursor++;
	}
}

function updatePhotoCount() {
	var numSelectedPhoto = userDataModel.originalURL.length;
	//console.log(numSelectedPhoto);
	var photoCount = document.getElementById("photoCount");
	photoCount.innerHTML = numSelectedPhoto;
}

function updateCarousel() {
	var carousel = document.getElementById("carousel");
	// console.log(carousel);
	// console.log(userDataModel.tbURL);
	var imageFrame = document.createElement('li');
	imageFrame.onclick = function(e) {
		var carousel = e.target.parentNode.parentNode;
		var list = carousel.childNodes;
		for ( var idx in list) {
			if (e.target.parentNode === list[idx]) {
				//console.log("Gotcha!");
				carousel.removeChild(list[idx]);
				userDataModel.tbURL.splice(idx - 1, 1);
				userDataModel.originalURL.splice(idx - 1, 1);
				// console.log(userDataModel.tbURL);
				updatePhotoCount();
				break;
			}
		}
	};
	var newImg = document.createElement('img');
	var lengthOfArr = userDataModel.tbURL.length;
	newImg.src = userDataModel.tbURL[lengthOfArr - 1];
	imageFrame.appendChild(newImg);
	carousel.appendChild(imageFrame);
}

function getSelectedImages() {
	return selectedImages;
}

function emulAcceptCharset(form) {
	// console.log("submit");
	if (form.canHaveHTML) { // detect IE
		document.charset = form.acceptCharset;
	}
	return true;
}

function setUpSortPhoto() {
	var openTab = document.getElementsByClassName("open-tab");
	// getElementsByClassName의 반환형은 배열이다.
	openTab = openTab[0];
	console.log(openTab);
	openTab.addEventListener('click', setArrangePhotoOpen, false);
}

function setArrangePhotoOpen() {
	var arrangePhoto = document.getElementById("arrangePhotos");
	arrangePhoto.className = 'open';
	console.log(arrangePhoto);
}

google.setOnLoadCallback(OnLoad);
