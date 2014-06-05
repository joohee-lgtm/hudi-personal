var head 		= document.getElementById('data');
var child 		= document.createElement('div');
var json 		= JSON.stringify(jamjar);
child.innerHTML = json; 
head.appendChild(child);
