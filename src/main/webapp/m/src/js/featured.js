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
			ul.appendChild(node);
		}
	},
	
	makeJarObj : {
		cr : function(jarobj){
			var li =  document.createElement("li");
			var titlespan = this._span(jarobj.title);
			var descspan = this._span(jarobj.description);
			var divimg = this._img(jarobj.tb_url);
			li.innerHTML = titlespan + divimg + descspan;
			return li;
		},
		
		_span : function(text){
			var span = "<span>" + text + "</span>"
			return span;
		},
		
		_img : function(url){
			var img = "<div><img src=\"" + url + "\"></div>";
			console.log(img);
			return img;
		}
	}
}

var fgm = new featuredGroupManager(data, 5);
var button = document.getElementsByTagName("button")[0];
button.addEventListener("click", function(){
	fgm.setJarShow();
}, false);
