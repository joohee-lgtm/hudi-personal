
//전체적으로 이름은...
//javascript변수의 타입은 동적으로 변경되는데 다시 말해 미리 그 타입을 알 수가 없음. 그걸 보완하기 위해서 헝가리안 표기법을 컨벤션으로 사용하는데... 이 말을 고민해보고 적용해보면 좋겠음.

var data;  //초기화 해주는 게 필요함..  숫자면 (-1) , 객체면 null, boolean이면 true 등등
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

	// var 키워드 생략할 필요 없음.
	userDataModel = new this.userDataModel(); //여기서 this가 왜 필요하지?? debugger를 키고 this가 가리키는 게 무엇인지 확인바람. 참고로 window 컨택스트는 생략가능함.
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

	//searchControl.setSearchStartingCallback(this, document.prototype.OnSearchStarting);
}

//Refactoring
//맞아 리팩토링 해야 할 듯 ^^ 반드시...
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
			//오 이미 알고 있음. 하면 됨 ㅎㅎ. 다음번엔 되어 있기를 . 이런거 개선이 기능하나 더 추가하는 것보다 의미있음.
		for ( var i = 0; i < results.length; i++) {//length값은 미리 변수에 담아두고 사용하기. 지금은 매번 객체를 참고해서 그 길이를 계산하는 과정을 되풀이 함.
			// For each result write it's title and image to the screen
			var result = results[i];
			var imageFrame = document.createElement('div');

			//addEventListener를 사용하는 습관 필요 
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
			
				//for문안에서 너무 큰 일이 일어나고 있는데. 중첩된 루프는 코드의 복잡도가 높다는 뜻이야...어떻게 개선할 수 있을까?
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

	if (pageCursor === 8) { //이런건 상수처리하는게 더 좋음.(최재은에게 설명했으니 물어보삼. 너가 최재은은 아니겠찌..)
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

	//addEventListener 사용하도록 .
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

google.setOnLoadCallback(OnLoad);
