//1
var tab = [4,6,2,87];
for(int i=0;i<tab.length;i++){
	console.log(tab[i]);
}

//2
var tab = [7,3,"elo",7,"cze",5];

for(int i=0;i<2;i++){
	console.log(tab[i]);
}

console.log(tab[tab.length-1]);

for(int i=0;i<tab.length;i++){
	console.log(tab[i]);
}

for(int i=0;i<tab.length;i+=2){
	console.log(tab[i]);
}

for(int i=0;i<tab.length;i++){
	console.log(tab[i]);
}

//3
var tab = [3,7,8,5,34,65,2];

var sum = 0;
for(int i=0;i<tab.length;i++){
	sum+=tab[i];
}
console.log(sum);

var diff = 0;
for(int i=0;i<tab.length;i++){
	diff-=tab[i];
}
console.log(diff);

var avg = 0;
for(int i=0;i<tab.length;i++){
	avg+=tab[i];
}
avg/=tab.length;
console.log(avg);

for(int i=0;i<tab.length;i++){
	if(tab[i]%2==0){
		console.log(tab[i]);
	}
}

for(int i=0;i<tab.length;i++){
	if(tab[i]%2!=0){
		console.log(tab[i]);
	}
}

var max = tab[0];
for(int i=1;i<tab.length;i++){
	if(tab[i]>max){
		max=tab[i];
	}
}
console.log(max);

var min = tab[0];
for(int i=1;i<tab.length;i++){
	if(tab[i]<min){
		min=tab[i];
	}
}
console.log(min);

for(int i=tab.length;i>0;i--){
	console.log(tab[i]);
}


//4
var tab = [3,7,8,5,34,65,2];
function f1(tab){
	var sum = 0;
	for(int i=0;i<tab.length;i++){
		sum+=tab[i];
	}
	console.log(sum);
}
f1(tab);

//5
var tab = [3,7,8,5,34,65,2];
function f2(tab){
	var avg = 0;
	for(int i=0;i<tab.length;i++){
		avg+=tab[i];
	}
	avg/=tab.length;
	
	for(int i=0;i<tab.length;i++){
		console.log(tab[i]*avg);
	}

}
f2(tab);

//6
var tab = [3,7,8,5,34,65,2];
var sum = 0;
var avg = 0;
var count=0;
function f1(tab){
	for(int i=0;i<tab.length;i++){
		if(tab[i]%2==0){
			sum+=tab[i];
			count++;
		}
	}
	avg=sum/count;
	console.log(avg);
}


//8
let exampleArrayA = [7, 6, 3, 4];
let exampleArrayB = [5, 6, 2, 8];

function sumOfArraysIndex(arrayA, arrayB){
    let array = [];
    arrayA.forEach((num, i) =>{
        array.push(num + arrayB[i]);
    });
    return array;
}

console.log(sumOfArraysIndex(exampleArrayA, exampleArrayB));

//9
function getArrayWithOppositeSigns(numbers) {
    const result = [];
    for(let number of numbers) {
        result.push(-number);
    }
    return result;
}

console.log(getArrayWithOppositeSigns([1,-2,3]));