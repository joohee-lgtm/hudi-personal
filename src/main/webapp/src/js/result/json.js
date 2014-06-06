var head 		= document.getElementById('data');
var child 		= document.createElement('div');
child.id		= "jamjar";
var json 		= JSON.stringify(jamjar);
child.innerHTML = json; 
head.appendChild(child);

console.log(aUrl);
