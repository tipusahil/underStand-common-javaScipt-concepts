/* 
closure er syntex hocce etai.
1. kuno ekta function er vitor theke arekta func k return kora hole take closure bole, & sei return kora function ta main func er variable access korte pare.
2. (2.) closure func likle jei variable theke call kora hobe jmn (foodServer1) era tader  nijosso ekta variable nijeder man rakbe, 

// syntex:
function kicthen() {
    let counter= 0;
    return function (){//annonimous function return kora hoise.
        counter++;
        return counter;
    }
}

const foodServer1= kicthen();// (2.)
const foodServer2 = kicthen();//2.
const foodServer3= kicthen();
const foodServer4 = kicthen();

console.log(foodServer1());//[Function (anonymous)]

console.log(foodServer2());//[Function (anonymous)]
console.log(foodServer3());//[Function (anonymous)]

console.log(foodServer4());//[Function (anonymous)]

