
//1st API key - inspire button






// 2nd API Key- Maps- in HTML doc


















//Page views- local storage


var count= document.getElementById("count");

//function
pageVisits();

//function defined
function pageVisits(){

//using 'let' value as we want the value to chnage as the number of visits increase- const is for fixed values?
let visits;

//  set to 'one' as we have already visited the page- open through the inspector tool-> local storage 

if (!localStorage.getItem("visits")) localStorage.setItem ("visits",1);

//if local storage value doesn't already exisit?
else {

    //'+' changes from string(text) to number value
visits =+localStorage.getItem("visits");

var visitedCount=visits +1;

//adds the number of visits to local storage
localStorage.setItem("visits",visitedCount)
}

count.innerText=localStorage.getItem("visits");


}


//element id check

console.log(count);

