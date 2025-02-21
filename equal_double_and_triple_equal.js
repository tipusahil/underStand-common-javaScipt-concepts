

/* 
1. (==) shudo value  check korte (==)double equal use kora hoi but always (===) triple equal sign use koratai recomended. karon double equal kisu prbm kor felee, tai ei bisoye google / chatgpt theke ask korle concept ta valo vabe bujte parbo, nahoi abu saiyd course er (32no module er 32-4) no videeo deklei hobe.

double equal  sign diye compare korle ( type coercion)hoi ,ortat eke to shudo value chck kore 2ndly data type o poriborton kore feele compare korar jonno ejonnoi (==) use na korlei valo jmn:     console.log(5 == "5"); // true// string ta k numbr e convrt kore compare korse kintu tirple equal sign use korle data typ poriborton korna.
//  ,ar eije compar korar jonno data type shuddo chang kore fele eta k (type coercion) bolee.

2.(===) value & datatype check kortee (===) triplee equal sign use kora hoi.
3. non-primitive ortat ( object & array) er ketre (double equal) usee na koratai aro valo
*/

const first = 2;
const second = "2";

// if(first == second) {//true ans dibe.
if(first == second) {//false ans dibe. karon ek sate data type o check kore.
    console.log(`values are equal`)
}
else{
    console.log(`value are nooot equal`);
}