const numbers = [1, 2, 3, 4, 5];


// 1. index number er maddome for loop: 
for (let i = 0; i < numbers.length; i++) {
    const number1 = numbers[i];
    console.log(number1)
}

// 2. (for of) loop diyee array er upodan gulo ekta ekta kore access:
for (const num1 of numbers) {
    console.log(`(for of) loop diye = ${num1}`)
}

// (for of) loop exampl 2: > array eer vitore multipl obj thakbe, segulo k caile jekuno loop diye jegulo arra yeer upore calateee hoi segulo diy access kora jabe.

const products = [
  {id:1, brand:'mackbook air' , price:120000},
  {id:2, brand:'mackbook panda' , price:10000},
  {id:3, brand:'hp air' , price:50000},
  {id:4, brand:'lenovo air' , price:30000},
];

for(const product1 of products){
    // console.log(`example 2thek : ${product1}`)
    console.log(`example 2thek : ${product1.brand}`)
}