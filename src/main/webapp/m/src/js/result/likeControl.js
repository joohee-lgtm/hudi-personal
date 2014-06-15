/* mobile like controller */
function likeController(likebtn) {
	this.btn = likebtn;
	this.curlike = jObjInfo.likes;
}

likeController.prototype = {
	setBtn : function() {
		var that = this;
		var btn = that.btn;
		btn.addEventListener('click', function() {
			that.updateView();
		}, false);
	},

	updateView : function() {
		var infoSet = document.getElementById("info");
		var k = infoSet.getElementsByClassName("v")[5];
		this.curlike = this.curlike + 1;
		k.innerHTML = this.curlike;
		this.updateServerData(this.curlike);
	},

	updateServerData : function(likes) {
		
		var xhr = new XMLHttpRequest();
		xhr.open("POST", "/collageJam/likeadd", true);
		xhr.setRequestHeader('Content-Type',
				'application/x-www-form-urlencoded');

		xhr.onreadystatechange = function() {
			if (xhr.readyState === 4 && xhr.status === 200) {
				console.log("conn success");
			}
		};
		
		var data = {
			jid : jamjar.j_id,
			like : likes
		};
		
		xhr.send("data="+JSON.stringify(data));
		return false;
	}
}

var likebutton = document.getElementById("addlike");
var like = new likeController(likebutton);
///like.setBtn();
like.setBtn();