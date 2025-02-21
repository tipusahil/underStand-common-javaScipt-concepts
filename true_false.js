/* 1.
2.any number ( +ve ,-ve) 0 chara positive kinba negative sob number truty & 0 hocce falsy number. 
3. jekuno "string" hocce truty value kintu ("") mt string hoccee falsy
*/

// 1.
// const x = false;
// 2.
// const x = -2;//true
// 3.
// const x = 3;//true
// 4.
// const x = 0;//false
// 5.
// const x = "xyz 534";//true 
// 5.
// const x = "";//false 
// 6.
// const x = "  ";//true //  but jodi mt string e ekta space o thake thle setaw (true) , normal space chara just mt string (false)
// 7.
// const x = '0'; // true // eta zero holew eta string tai eeta true & eta mt string holew vitore 0 ase tai oi hisebew eta (true)
// 8.
// const x = 0;//false //karon eta string na, eta direct (0) tai eta false , & 0 chara positive kinba negative sob num (true)

// 9.
// const x =false;//false // eta boolean er (false) tai eta false kintu jodi quetetion r vitore lika hoi tkn seta ar boolean er false thakena ,tai ota true hoyee jabe,  quetetion er bitore likle seta string hisebee count korbe.same (true) er ketrew emn.

// 10.
// let  x;// false //karon  (undefined)sob kisui hoccee false ,jotovabei undefined ashukna keno always (false) e hobee.

// 11.
// const x = null;//false //karon (null) sob smy false

// 12.
// const x = {};// true // (object) always (true) seeta (mt object) holew true , same array er ketrew

// 13.
const x = [];//true // (array) always (true) seta (mt arry) hoolew true e hobe.




if(x){
    console.log(` value of x is truty number.`);
} else {
    console.log(`value of x is falsy`)
}


// fals hole kuno kisu korte caile or
//  false check korte caile:

const y = 0;

//ei (!y)etar manee holo jodi  (y = 0) = false seta k (y) k etar madddome (!y) true  kora hoi then bolee hoi j false naki tkn false ans dei
 /*  
 if ( !X)  (!)single exclaimation diye: eta diy falsy check kora hoi. ortat (x) er man false kina 
 if ( !!Y ) (!!)DOUBLE exclaimation diye: eta diye true check kora hoi. ortat (Y) er man true kina 
 */

// if( y === false ){
if( !y ){ //uporer line er shortcut hocce eta //ei (!y)etar  diye (!) eta diye false kina check kora hoi shortcut way te
console.log(`value y is falsy`);
}

if(!!z) {//(!!) doubl exclaimation sign diye true kina check kora hoi. true hole block e dukbe. 
    console.log(` value z is truty`);
}