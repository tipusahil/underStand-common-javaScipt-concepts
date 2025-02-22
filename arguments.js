/* 

function er jonno argument ki ki pass kora hocce sobdekte  caile function er vitor theke (arguments) keyword ta console e print  korlei sob argument obj akare dekabe. kintu jodi function er baire theke (arguments) keyword ta console kora hoi tkn habijabi output dibe. 
arguments hocce  array er moto dekte kintu obj  (array lik obj)
// (arguments)  (for of) kinba (for loop) calano jabe.but argument e push/pop esob relateed jinish gulo calano jabna. tobe
*/

function forArgo( a, b, c){

    console.log(arguments)//  [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }
    console.log(arguments[2])// 3 > 2no indx e 3 ase argumnt  tai ota print korbe. caile argument er spcific kuno argument indx numbr diye dka jai, 
/*     (arguments) eta hocce ekta special keyword jeta shudo function er vitor thekei console korle deka jai .& peramitar hisebe jodi kisu naw thake taw arguments jodi thake taile arguments gulo function er vitor theke console kore deka jabe, & argument hocce ekta object. */

}

// console.log(arguments);///output: onk kisu habijabi output  dibe jeta buje asbena, tai (arguments) dekte caile function er vitor theke call korle sundor kore ekta simple object er moto kore argument gulo dekabe.
forArgo( 1, 2, 3, 4, 5);