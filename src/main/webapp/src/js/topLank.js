function topRank(rankObjs){
	this.jarobjs = rankObjs;
}

topRank.prototype = {
	showData : function(){
		var aboutApp = document.getElementById("aboutApp");
		var lis = aboutApp.getElementsByTagName("li");
		for (var i =0; i < lis.length ; i++){
			this.setLi(lis[i], this.jarobjs[i]);
		}
	},
	
	setLi : function(li, obj){
		var img = "<img src=\"" + obj.tb_url + "\">";
		var like = "<p>" + obj.likes + "</p>";
		var title = "<p>" + obj.title + "</p>";
		li.innerHTML = like+img+title;
		this.addEvent(li, obj.j_id);
	},
	
	addEvent : function(li, jid){
		var i = li.getElementsByTagName("img")[0];
		i.addEventListener("load", function(){
			this.style.width = "200px";
		}, false);
		
		i.addEventListener("error", function(){
			i.src = "./src/img/nophoto.jpg";
			i.style.width = "200px";
		}, false);

		li.addEventListener("click", function(){
			window.location = "/collageJam/result?id=" + jid;
		}, false)
	}
}

var topRankObj = new topRank(topJarObjs);

topRankObj.showData();
