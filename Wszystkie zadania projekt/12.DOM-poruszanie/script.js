//1
console.log(document.getElementById("buz").parentElement.nodeName);

console.log(document.getElementById("baz").nextSibling);

console.log(document.getElementById("foo").childNodes);

console.log(document.getElementById("foo").childNodes[1]);

//2
// function f(id){
	// id.addEventListener("click", console.log(id.nextSibling.textContent))
// }

// f("ex2");

//3, 4

document.getElementById("ex3").onclick = function(){
	var x = document.getElementById("ex3").children[2].nextSibling;
	if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}


//5
 document.getElementById("ex5").onmouseover = function(){
	 var color = this.style.color;
	 document.this.childNodes[4].style.color = color;
 }
document.getElementById("ex5").children[0].onmouseover = function(){
	var color = this.style.backgroundColor;
	document.getElementById("ex5").children[3].children[0].style.backgroundColor = color;
}

document.getElementById("ex5").children[0].onmouseover = function(){
	var color = this.style.backgroundColor;
	document.getElementById("ex5").children[3].children[10].style.backgroundColor = color;
}

