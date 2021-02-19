const a = document.querySelector("#box1")
console.log(a);
const boxNodeList = document.querySelectorAll("box")
console.log(boxNodeList);

// tag name selector
const tagName = document.getElementsByTagName("h1")
console.log("tagname : ", tagName);

// attribute selector
const attribute = document.querySelector('[data-atr="box1"]');
console.log("attribute : ", attribute);

// multipleAttribute selector and multipleId...multipleClass
const multipleAttribute = document.querySelectorAll('[data-atr="box1"],[id="box2"]');
console.log("multipleAttribute : ", multipleAttribute);

// dom manipulation...........................................

// create element
var newDiv = document.createElement('div');
console.log(newDiv);
newDiv.innerHTML = `<p>lorem100101010</p>  
    <h1>h1hh1h1h1h1hh1h1</h1>
    ` // element
var newParagraph = document.createElement('p');
var uncleName = 'Zawad Ahmed';
newParagraph.textContent = 'His name is: ' + uncleName + '!';   // text
console.log(newParagraph);


// add class 
// newDiv.className = 'newDiv'
newDiv.classList.add("new-div")
console.log("add class ", newDiv);
newDiv.firstElementChild.classList.add("firstElement")
console.log("firstChild : ", newDiv);
newDiv.lastElementChild.classList.add("last")
console.log("lastChild : ", newDiv);


// replace class "foo" with class "bar"
newDiv.classList.replace("new-div", "bar-1");
console.log("replace : ", newDiv);

// remove class
newDiv.lastElementChild.classList.remove("last")
console.log("remove :", newDiv);



// ইলিমেন্টে অ্যাট্রিবিউট নিয়ে খেলা করাঃ

// add attribute
newDiv.setAttribute('data-attr', 'something');
console.log("addAttribute : ", newDiv);
// modified attribute
newDiv.setAttribute('data-attr', 'someOtherThing');
console.log("modifiedAttribute : ", newDiv);
// remove attribute
newDiv.removeAttribute('data-attr');
console.log("removeAttribute : ", newDiv);