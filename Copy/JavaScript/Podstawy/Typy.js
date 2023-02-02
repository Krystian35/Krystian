// const num1 = 23
// const num2 = "45"

// console.log(num2);

// const num4 = 123123.123129

// //console.log(num4.toFixed(2));

// const num5= '123123'
// console.log(parseInt(num5));

//Boolean 
// if (1) {
//     console.log("True");
// } else {
//     console.log("False");
// }

//tablice
// const colors = ['red', 'green', 'blue']
// console.log(colors);

// //funkcje
// function test (){
//     console.log("Część jestem typem");
// }
// test()

// //obiekt
// const person = {
//     name: 'Ala',
//     age: 23,
//     favcolor: null
// }
// console.log(person);

class Person1 {
    constructor (name, age) {
        this.name = name
        this.age = age
    }
    sayHi(){
        console.log(`Hi, I am ${this.name}`);
    }
    showAge(){
        console.log(`I am ${this.age} yesrs old`);
    } 

}

const person2 = new Person1('Ania', 33)
person2.sayHi()
person2.showAge()