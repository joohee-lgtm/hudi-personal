function jarInfoManager(jamjar){
	this.user = jamjar.u_id;
	this.title = jamjar.title;
	this.desc = jamjar.description;
	this.date = jamjar.date_created;
	this.speed = jamjar.sec_per_img * 10;
	this.m_title = "";
}


jarInfoManager.prototype = {
	getBgmInfo : function(){
		var ytframe = document.getElementById("player");
		var that = this;
		ytframe.addEventListener('load', function(){
			that.setInfoView();
		}, false);
	},
	
	setInfoView : function(){
		this.setData(0, this.user);
		this.setData(1, this.title);
		this.setData(2, this.desc);
//		this.setData(3, this.m_title);
		this.setData(4, this.date);
	},

	setData : function(num, v){
		var info = document.getElementById("info");
		var li = info.getElementsByClassName("v");
		li[num].innerHTML = v;
	}
}


var jObjInfo = new jarInfoManager(jamjar);
