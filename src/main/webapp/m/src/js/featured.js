/* for mobile */
 
function featuredGroupManager(data, shownum){
	this.data = data;
	this.shownum = shownum;
	
}

featuredGroupManager.prototype = {
	setJarShow : function(){
		var dt = this.data;
		var show_data_arr = dt.splice(0,this.shownum);
		this.showJarList(show_data_arr);
	},
	
	showJarList : function(showarr){
		var ul = document.getElementsByTagName("ul")[0];
		for (var i=0; i<showarr.length ; i++){
			var node = this.makeJarObj.cr(showarr[i]);
			this.addEvent(node);
			ul.appendChild(node);
		}
	},
	
	addEvent : function(node){
		var img = node.getElementsByTagName("img")[0];

		img.addEventListener("load", function(){
			var _width = window.getComputedStyle(node).width;
			img.style.width = _width;
			console.log(img);
		},false);
		
		node.addEventListener("click", function(){
			var url = "/collageJam/m/result?id=" +node.id;
			window.location = url;
		}, false);
	},
	
	makeJarObj : {
		cr : function(jarobj){
			var _li =  document.createElement("li");
			var titlespan = this.getSpan(jarobj.title);
			var descspan = this.getSpan(jarobj.description);
			var divimg = this.getImg(jarobj.tb_url);
			_li.innerHTML = titlespan + divimg + descspan;
			_li.id = jarobj.j_id;
			return _li;
		},
		
		getSpan : function(text){
			var _span = "<span>" + text + "</span>"
			return _span;
		},
		
		getImg : function(url){
			var _img = "<div><img src=\"" + url + "\"></div>";
			return _img;
		}
	}
}


window.addEventListener("load",function(){
	var fgm = new featuredGroupManager(data, 5);
	fgm.setJarShow();
	var button = document.getElementsByTagName("button")[0];
	button.addEventListener("click", function(){
		fgm.setJarShow();
	}, false);
},false);
