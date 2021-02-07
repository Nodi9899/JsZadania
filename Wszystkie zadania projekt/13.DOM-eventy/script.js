document.getElementById('test-event').addEventListener('click',function(event){console.log(event)})

window.addEventListener('mousemove',function (event){console.log(event)})

document.getElementById('test-event').addEventListener('mouseover', function(event){console.log(event)})

window.addEventListener('keydown', function(event){console.log(event)})

window.addEventListener('scroll', function(event){console.log(event)})

document.getElementById('input-test').addEventListener('change',function(event){console.log(event)});



let span = document.querySelector("#span-ex2");
document.querySelector("#ex2").addEventListener("click", e => {
    span.innerHTML = e.target.getAttribute("data-text");
});


const three = (el) => {
    document.getElementById(el).addEventListener('mouseover', (a)=>{
        a.target.style.backgroundColor = 'blue';;
    })
      document.getElementById(el).addEventListener('mouseout', (a)=>{
        a.target.style.backgroundColor = 'red';
    })
}
three('ex3');


const checkInput = () => {
    let el = document.getElementById('input-test')
    el.addEventListener('input', (a)=>{
        let err = document.getElementById('ex3-err');
        (/\d/).test(a.target.value) ? err.innerHTML = "Nie dawaj numerków" : err.innerHTML = null;
    })
}
checkInput();

function counter(){
	var counter = 0;
	var span = document.querySelector("#ex5 span");
    var btn = document.getElementById("ex5-button");
	
	btn.addEventListener('click', function(){
		counter++;
		span.innerHTML = counter;
		if(counter==10){
			btn.removeEventListener('click', addCounter);
		}
	})
}
counter();


document.addEventListener('scroll', function(event){
	var where window.scrollY;
	var body = document.querySelector('body');
	
	if(where > 200){
		body.style.backgroundColor = 'red';
	} else{
		body.sty;e.backgroundColor = 'white';
	}
});



const calc = () => {
    let input = document.querySelectorAll('#calculator>div:first-of-type>button');
    let output = document.querySelector('#calculator>input');
    let actions = document.querySelectorAll('#calculator>:nth-child(5)>button');
    
    for(const el of input){
        el.addEventListener('click', ()=> {
            output.value =el.innerHTML;
        })
    }
    
    let tempWynik = [];
    
    const actionCreators = (object) =>{
        // let ac = object.innnerText;
        console.log(object)
        tempWynik.push(output.value,object.innerText)
         console.log(tempWynik)
        output.value=null
        if(tempWynik.length >3){
            output.value = eval(tempWynik.slice(0,-1).join(""))
        }
    }
    
 for (const element of actions) {
        element.addEventListener('click', () => {
            console.log(element.innerText)
            actionCreators(element)

        })
    }
    // console.log(actions,typeof actions)
    
    
}

calc();
