/* 


#.8 way to get undifind:
1.( reason 1) evab variable declar korar pore variabl er set na kore output dekte cailee (undifind) dibe, karon variabl er man define kora hoini.
2.// (reason 2) function theke return na paile console e output dekt e caile undifined dibe.
3. (reason 3) //ekane just 2ta argumeeent pass kora hocce & peramitar er jonno kuno dfault  valu set kora hoini. protam 2tar man tiktak dekalew, baki 2tar man(c & d) er man undefined dekabe,
4. (reason 4)
5.  (reason 5)
6. (reason 6)
7. (reason 7)
8. (reason 8) kuno ekta data set kora hoini seta define kora hoi (null) diye (undefined) use kora manaina tai (null) use korte hbe.
*/


//( reason 1)
// const a;// (const) diy kora jabna emn
let first;//(reason 1)
console.log(first);// undefined (reason 1)


// (reason 2)
function second( a , b ){
 
 const total = a + b;

}

const result = second();// (reason 2) function theke return na paile console e output dekt e caile undifined dibe.
console.log(result);// output: undefined
// 

// (reason 3)
function third( a, b, c, d){
    const  total = a + b + c + d;
    console.log( a, b, c, d)// output: 1 2 undefined undefined
}
third( 1, 2);// output: 1 2 undefined undefined 
//ekane just 2ta argumeeent pass kora hocce & peramitar er jonno kuno dfault  valu set kora hoini. protam 2tar man tiktak dekalew, baki 2tar man(c & d) er man undefined dekabe,


// (reason 4)
// ki return kora hobe eta jodi bole deewa /define kor dewa na hoi tkn o undifind dibe.
function fourth( a, b){
    return// ekane ki return korbe seta define kore bola dewa hoini.
}
const ress = fourth( 4,5)
console.log(ress);// undefined



// (reason 5)
const fifth = {name:"tipu", age:22}; 
console.log(fifth.salary , fifth.name);//output: undefined tipu
//ekane salary name  kuno property (fifth) obj e nai, kintu ami output dekte cacci ,tai oi jaigai undifined dibe, ar jeeta define kora ase otar output tiktak dibe. ortat ami emn ekta property kujteci jeta obj er modde nai, tkn undefined dibe.


// (reason 6)
const six = [1,2,3];

console.log(six[0], six[5])// output: 1 undefined 
// jkn kuno array er index ase (dhori) 5ta obdi kintu ami output dekte cacci array er index num 4 er, jeta array nai shuddo ,tkn sei jaigai undefined dibe.

// (reason 7)
const seven = [1,2,3,4,5];
 delete seven[2];// evabei delete kora uchit na, karon array er majkanee evabe delete kore dile gorto er moto hoye jai, tai (splice) er maddomee delete koratai recomended, & evabe delete korle undefined dei. & array ta dekte niser  moto hoye jai.
 console.log(seven);// output: [ 1, 2, <1 empty item>, 4, 5 ]


// (reason 8)
const eight = undefined;//evabe variable er man undefined set kora jai. kintu (undefined ) set na kore (null) set koratai manan soi.karon: suppose ( kuno ekta jinish surver e udpate kora hoini ar user cacce sei jinish ta ,tkn seta (null) name set kore rakle bujai jinish ta nai ekono)
 const nine = null;

// (reason 9)