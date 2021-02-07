//4.1
let p1 = 2;
let p2 = 6;
if(p1>p2) {
  console.log(p1);  
} else if(p1==p2) {
  console.log("Sa rowne");  
} else {
  console.log(p2);  
} 

//4.2
let firstNumber = 111;
let secondNumber = 222;
let thirdNumber = 3;

if (firstNumber > secondNumber && firstNumber > thirdNumber) {
    console.log(firstNumber);
} else if (secondNumber > firstNumber && secondNumber > thirdNumber) {
    console.log(secondNumber);    
} else {
    console.log(thirdNumber);
}

//4.3

for (var step = 0; step < 10; step++) {
  console.log('Lubię JavaScript');
}

//4.4
let result = 0;
for(let i = 1; i<=10; i++){
    result += i;
}
console.log(result);

//4.5
var n=5
for(var i=0;i<=n;i++){
	if(i%2==0){
		console.log(n+" - parzysta");
	}else{
		console.log(n+" - nieparzysta");
	}
}

//4.6
for(var i=0;i<4;i++){
	for(var j=0;j<4;j++){
		console.log("i= " + i + ", j= " + j);
	}
}


//4.7
for(var i=0;i<=100;i++){
	if (i % 15 == 0) {
		console.log("FizzBuzz");
	}
	else if(i%3==0){
		console.log("Fizz");
	}else if(i%5==0){
		console.log("Buzz");
	}else console.log("FizzBuzz");
}

//4.8
const star = '*'
for (let i = 0; i < 5; i++) {
    let result = '';
    for (let j = 0; j < i; j++) {
        result += star;
    }
    console.log(result)
}