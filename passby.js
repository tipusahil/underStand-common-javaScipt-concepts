/* 

*/

let num1 = 5;
let num2 = 5;
function primitiveDataTYPEholeRefarance_dhore_rake_na(num1, num2) {

    num1 = 10;//variable er biaree etar man 5 set kora hoisilo kintu function er vitrore reassign kora hoise ,but eta jodi barie theke console kore mma ndeka hoi tkn 5 e dekabe, kintu jodi functio ner vitor theke deka hoi tkn 10 dekabee. refarence dhore raknea, primitivee data hole.

    console.log(num1 + num2) //output: 15
}
console.log(`functione er baire theke ${ num1 + num2}`)// refarence dhore rakenai bidai  function er baire value change hoini, function er vitoree primitivee datatype er value set kora hole seta shudo function er vitorei oi value ta changee dekabe.
primitiveDataTYPEholeRefarance_dhore_rake_na(num1, num2);




// non-primitive data typeee hole refarence dhore rake jar karone value efunction er vitore change korle bairew change hoi : 

let stu1= {name:'tipu' , age: '22'};
let stu2= {name:'sahil' , age: '21'};

function non_primitiveDataTYPEholeRefarance_dhore_rake( stu1 , stu2) {
stu1.name= 'mustafa';
console.log(` function er vitor theke non-primitive ${stu1.name}`)
}

console.log(` function er baire func call korar age theke non-primitive ${stu1.name}`)// jei function e stu1.name er data change kora hoise sei function call korar agei console kora hoise bidai ager value tai dekacce, jeta func tion er vitore change kora hoise ota dekaccena..
non_primitiveDataTYPEholeRefarance_dhore_rake( stu1 , stu2)//refarence dhore rakce bidai name (mustafa) dekacce
console.log(` function er baire  theke func call korar pore non-primitive ${stu1.name}`)//refarence dhore rakce bidai name (mustafa) dekacce