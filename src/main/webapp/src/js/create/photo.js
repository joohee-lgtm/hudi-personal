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
}

function OnLoad() {
	userDataModel = new this.userDataModel();
	// Create a search control
	var searchControl = new google.search.SearchControl();
	var searcher = new google.search.ImageSearch();
	searchControl.addSearcher(searcher);
	searchControl.setSearchCompleteCallback(this, searchComplete);
	searchControl.draw(document.getElementById("result"));
	searcher.setResultSetSize(8);
	var userInput = document.URL;
	userInput = userInput.split("search-photos=");
	if (userInput[1]) {
		var decodedUserInput = decodeURI(userInput[1]);
		searchControl.execute(decodedUserInput);
	} else {
		searchControl.execute("LINE LEONARD");
	}
	setUpSortPhoto();
	
}

// jQuery를 이용하여 drag-to-sort 구현
$(function() {
	var originalIdx;
	var prevPagesOrder = [];
    $( "#sort-overview" ).sortable({
    	placeholder: "sort-placeholder",
    	forcePlaceholderSize: true,
	    connectWith: ".column",
	    start: function(e, ui) {
	    	originalIdx = ui.helper[0].id;
	        ui.placeholder.height("auto");
	        prevPagesOrder = $("#sort-overview").sortable('toArray');
	        //prevPagesOrder.splice(" ", 1);
	        },
	   update: function(e, ui) {
	   		var currentOrder = $(this).sortable('toArray');
            var second = currentOrder[prevPagesOrder.indexOf(originalIdx)];
            console.log("prev:" + prevPagesOrder);
            for (var idx = 0; idx < this.childNodes.length; idx++) {
	            this.childNodes[idx].id = idx;
            }
            for (var idx = 0; idx < this.childNodes.length; idx++) {
	            console.log(getImgSrc(this, idx));
            }
            console.log(originalIdx);
            console.log(second);
	   }
    });
    $( "#sort-overview" ).disableSelection();
    console.log("Sortable implemented");
  });

function getImgSrc(theDiv, idx) {
	return theDiv.childNodes[idx].childNodes[0].childNodes[0].src
}

function reorderUserDataModel() {
	
}

// jQuery End

//Refactoring
function searchComplete(searchControl, searcher) {
	// Check that we got results
	if (searcher.results && searcher.results.length > 0) {
		// console.log(searcher.cursor.currentPageIndex);
		// Loop through our results, printing them to the page.
		var results = searcher.results;
		// Grab our content div, clear it.
		var contentDiv = document.getElementById('overview');
		if (pageCursor === 1) contentDiv.innerHTML = '';
		//이벤트버블링이나 캡쳐링 이용하기
		for (var i = 0; i < results.length; i++) {
			// For each result write it's title and image to the screen
			var result = results[i];
			var imageFrame = document.createElement('div');
			imageFrame.onclick = function(e) {
				if (userDataModel.originalURL.length == 90) {
					//Alert은 피곤함.
					alert("Sorry, You cannot add more than 90 photos");
					return;
				}
				var frames = document.getElementById("overview").childNodes;
				for (var idx in frames) {
					if (frames[idx] === e.target.parentNode) {
						var url = imageURLHolder[idx];
						userDataModel.addPhotoURL(url);
						userDataModel.addTbURL(e.target.src);
						updatePhotoCount();
						updateCarousel();
						break;
					}
				}
			};
			var newImg = document.createElement('img');
			// There is also a result.url property which has the escaped version
			newImg.src = result.tbUrl;
			imageURLHolder.push(result.url);
			//imgContainer.appendChild(title);
			imageFrame.appendChild(newImg);
			// Put our title + image in the content
			contentDiv.appendChild(imageFrame);
		}
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
	var imageFrame = document.createElement('li');
	var newImg = document.createElement('img');
	var lengthOfArr = userDataModel.tbURL.length;
	newImg.src = userDataModel.tbURL[lengthOfArr - 1];
	imageFrame.appendChild(newImg);
	carousel.appendChild(imageFrame);
	fillOverview(newImg.src);
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
	// getElementsByClassName의 반환형은 배열이므로
	openTab = openTab[0];
	openTab.addEventListener('click', setArrangePhotoOpen, false);
}

function setArrangePhotoOpen() {
	var arrangePhoto = document.getElementById("arrangePhotos");
	var carousel = document.getElementById("carousel");
	var sort_overview = document.getElementById("sort-overview");
	if (arrangePhoto.className === 'open') {
		arrangePhoto.className = '';
		carousel.className = '';
		sort_overview.className = 'sortable';
	} else {
		arrangePhoto.className = 'open';
		carousel.className = 'open';
		sort_overview.className = 'sortable open';
		setArrangeButtonsVisible();
	}
}

function setArrangeButtonsVisible() {}

var slideIdx = 0;
function fillOverview(imgSrc) {
	var overview = document.getElementById("sort-overview");
	console.log(overview);
	var slide = document.createElement('div');
	var imgFrame = document.createElement('div');
	var newImg = document.createElement('img');
	newImg.src = imgSrc;
	overview.appendChild(slide);
	slide.appendChild(imgFrame);
	imgFrame.appendChild(newImg);
	slide.className = "slide";
	slide.id = slideIdx;
	slideIdx++;
}

google.setOnLoadCallback(OnLoad);