//1
var tab = [];
  document.querySelectorAll('.more-divs').forEach((element) => {
      if (!tab.includes(element.tagName)) {
          tab.push(element.tagName);
      }
});
  console.log(tab);
    
//2
  
function display(a) {
      console.log(a.innerHTML);
      console.log(a.outerHTML);
      console.log([...a.classList].join(''));
      console.log([...a.classList]);
      console.log(a.dataset)
}
display(document.querySelector('.short-list'));    
 
//3
  
  function showMe(...int) {
        return {
            sum: int.reduce((prev, curr) => parseInt(prev) + parseInt(curr)),

            difference: int.reduce((prev, curr) => prev - curr),
        }
    }

    let numb = document.querySelector('#datasetCheck').dataset;
    console.log(showMe(numb.numberone, numb.numbertwo, numb.numberThree));
  
//4
  
  var span = document.querySelector('#spanText');
  span.innerHTML = "something new";
  
//5
  
  span.classList.add('newClass');
  
//6
  
  function allClasses(classList){
    var list = [...classList];

        list.forEach((b) => console.log(b));
        console.log(list.join('+'));
  }
  var classes = document.querySelector('#classes');
    allClasses(classes.classList);
    classes.classList = '';
    console.log('Usunięto wszystkie klasy.');
  
//7
  
  var allLi = document.querySelector('#longList').querySelectorAll('li');
  allLi.forEach((c) => {
    if(c.dataset.text == null) c.setAttribute("data-text", "text");
  });
  
//8
   var theFirst = (string) => { 
        return {
            newClass: string
        };
     };

    var theSecond = (object) => {
        return object.newClass;
    };

    var object = theFirst('something');
    var string = theSecond(object);
    var xxx = document.querySelector('#myDiv').classList;
    xxx.add(string);
  
//9
  
    function abc(num) {
        var element = document.querySelector('#numbers');
        var classX = num % 2 == 0 ? 'even' : 'odd';
        element.classList = classX;
    }
    var random = Math.round(Math.random() * 10);

    abc(random);
  
//10
  
    var listValues = document.querySelector('#longList');
    
    function showTab(listValues) {
        var li = [];
        listValues.querySelectorAll('li').forEach((d) => {
            li.push(d.innerHTML);
        });
        return li;
    }

    console.log(showTab(listValues));
  
//11
  
  function switchThem(child) {
        let childs = [...child];
        childs.forEach((element) => {
            var newNmb = Math.round(Math.random() * 10);
            element.dataset.oldValue = element.innerHTML;
            element.innerHTML = newNmb;
        });
    }

    let child = document.querySelector('#longList').children;
    switchThem(child)
);