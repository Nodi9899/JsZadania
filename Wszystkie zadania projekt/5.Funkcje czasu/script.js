
var x = 0;
var tab = [5,2,7,4,1,9];
body onload = setInterval(function(){
	if(x<=15){
		clearInterval();
	}
	setTimeout(function(){
		for(int i=0;i<tab.length;i++){
			console.log(tab[i]);
		}
	}, 2000)
	x++;
	console.log("Cześć po raz " + x);
}, 3000);