//--------   1   ---------
function Person(name,surname,age,country,city,language){
	this.name=name;
	this.surname=surname;
	this.age=age;
	this.country.country;
	this.city=city;
	this.language=language;
}
Person.prototype.changeAge = function (newAge){
	this.age=newAge;
}
Person.prototype.changeCity = function (newCity){
	this.city=newCity;
}

let one = new Person ("Norbert", "Lejda", 21, "Poland", "Niewiarów", "Polish");
let two = new Person ("Jan", "Nowak", 41, "Germany", "Berlin", "German");
console.log(one);
one.changeAge(24);
two.changeCity("Dortmund");
console.log(one,two);

//--------   2   ---------
function Calc(a, sign, b) {
    this.a = a;
    this.sign = sign;
    this.b = b;

    this.result = 0;
    switch(this.sign) {
        case '+': this.result = this.a + this.b; break;
        case '-': this.result = this.a - this.b; break;
        case '*': this.result = this.a * this.b; break;
        case '/': this.b == 0 ? "Nie dzielimy przez zero": this.result =  this.a/this.b; break;
    }
    this.clear = () => {this.result = 0};
    this.getResult = () => this.result;
};

const add = new Calc(2,'+',8);
console.log(add.getResult());
add.clear();
console.log(add.getResult());

const div = new Calc(2, '/', 0);
console.log(div.getResult());
add.clear();
console.log(div.getResult());
//---------OBSŁUGA PAMIĘCI(?)---------//

function Calc(){
    this.memory = [];
    this.showMemory = function(){
        console.log(this.memory)
    }
    this.clearMemory = function () {
        this.memory = []
    }
    this.add = function (a,b){
        let equation = `${a} + ${b} = ${a +b}`
        console.log(equation)
        this.memory.push(equation)
    }



//--------   3   ---------


function Game ()
{
    Game.prototype.number = null
    this.rand = function () {
        return setInterval(()=>{
            let rand = Math.floor(Math.random() *10 )+1;
            game_one.__proto__.number = rand;
            console.log(this.__proto__.number)
        }, 1000)
    }
    this.check = function (){
        return setInterval (() =>{
            console.log(this.__proto__.number);
            if(this.__proto__.number >= 5){
                console.log('finished');
                clearInterval(first);
                clearInterval(second)
            }
        }, 1000)
    }
}
let game_one = new Game();
let game_two = new Game();

var first = game_one.rand();
var second = game_two.check()
