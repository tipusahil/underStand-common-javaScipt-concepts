/* 
eakne ja kora hoise, je karone callback function bola hocce ta holo:
 ekta main function create kora hoise, otar peramitar er (argument) hisebe arekta functionName pass kora hocce (without bracket.. jevabe eventlistener e callback kora hoi). 
//  normally ekta function er peramitar hisebe (string,boolean,number,function,array,object) sob kisu pass kora jai, so jkn function pass kora hoi tkn bracket chra pass korte hoi, & eta kaj aro sohoj kore dei, & main function k templete er moto kore use kora jai.
*/

function mainFunc1(callbackFunc, name) {
    callbackFunc(name);
}

function goodMorning(name) {//uporer etai holo main function 
    console.log(`good morning ${name}`);
}

mainFunc1(goodMorning, 'shukkor vai')//  good morning shukkor vai
mainFunc1(goodMorning, 'hisbullah vai')// good morning hisbullah vai 
/* */


// callback function 2
function goodEvening(name) {
    console.log(`good evening, ${name}`)
}


mainFunc1(goodEvening, 'abdullah'); // good evening, abdullah
mainFunc1(goodEvening, 'muhammad') ;//good evening, muhammad


// ei  callback ta eventlistener diye kora hoi jmn:
// function callbackFunctionWithoutBrackets() {
//     console.log(`amk call back function er jonno banano hoise.`)
// }

// document.addEventListener('click', callbackFunctionWithoutBrackets)