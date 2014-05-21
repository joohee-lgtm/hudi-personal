var Featured = {};

Featured.jarArray
	= document.getElementById('featured').getElementsByTagName('div')[0].children;



Featured.BasicSetting = {
	row : 3,
	len : Featured.jarArray.length,
	column : parseInt(this.len/this.row),
	remain : this.len%this.row
};

Featured.BasicSetting.column 
	= parseInt(Featured.BasicSetting.len/Featured.BasicSetting.row);
