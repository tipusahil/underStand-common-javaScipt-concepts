function mainFunc1( callbackFunc , name){
    callbackFunc(name);
}

function goodMorning(name){//uporer etai holo main function 
    console.log(`good morning ${name}`);
}

const callback1 = mainFunc1( goodMorning , 'shukkor vai')
// 

// callback function 2
function goodEvening(name){
    console.log(`good evening, ${name}`)
}


const callback2 = mainFunc1(goodEvening , 'abdullah')


// ei  callback ta eventlistener diye kora hoi jmn:
function callbackFunctionWithoutBrackets(){
    console.log(`amk call back function er jonno banano hoise.`)
}

document.addEventListener('click' , callbackFunctionWithoutBrackets)