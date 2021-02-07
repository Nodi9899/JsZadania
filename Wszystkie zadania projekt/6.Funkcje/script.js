//1
function hello(){
	console.log("Udało się!");
}
hello();

//2
let x=1;
function f2(x){
	console.log(x);
}
f2(x);

//3
var tab = [1,2,3,4];

function f3(tab){
	for(int i=0; i<tab.length;i++){
		console.log(tab[i]);
	}
}
f3(tab);

//4
var x = "Siemka";
function f4(x){
	setTimeout(setInterval(console.log(x), 3000), 5000);
	console.log("Koniec");
}

