// deklaracja funkcji, Ważne hoisting - funkcja jest najpierw wywoływana a później jest tworzona

// function test() {
//     console.log('Hello');
// }

// test()

// // wyrażenie funkcyjne - tworzymy funkcje przypisując ją do zmiennej

// const hello = function () {
//     console.log('good day');

// }
// hello()

// // wyrażenie z parametrem / argumneta

// function add(parametr) {
//   console.log(`Podany agrumetr to:` + parametr);
// }
// add(`ciocia`)

// function add(x, y) {
//     return x + y
//   }
//   add(5,3)

// function comaBack(x, y ) {
//     if (x < y) return
//     console.log(x+y);
// }

// comaBack(23,4)

//FUNKCJA ANONIOMOWE

// heading.addEventListener('click', function(){
//     console.log('Kliknient mnie');
// })

// const heading = document.querySelector('li')
// function test (){
//     console.log('Kliknij');
// }
// heading.addEventListener('click', test)

//FUNKCJE STRZAŁKOWE
// const arrowFunction = (name) => {
//     console.log(`Mama na imie ${name}`);

// }
// // MOżemy nie używać nawiasów podając jeden paramtetr "surname"
// const test = surname => {
//     console.log(`Nazywam się ${surname}`);
// }

// //MOżliwość zapisania funkcji
// const test3 = age => console.log(`Show my age: ${age}`);
// test3(20)

// //Jeżeli podajemy więcej parametrów
// const test4 = (hobby, family) => console.log(`NIa mam ${hobby} and ${family}`);
// test4('szachy', 'braci')

// const dog = (size, highh) => {
//     console.log(`My dog is: ${size} and ${highh}`);
// }
// dog(23,150)

// const child = student => console.log(`Jestem studentem w szkole ${student}`);
// child("Cambrige")

//DOMYŚLNE parametry funkcji
// const Hello = (name = 'Cześć drogi użytkowniku') => {
// 	console.log(`Cześć ${name}, jak się masz?`)
// }
// Hello("Ania")
// Hello()

// const add = (x = null,  y = null) => {
//     console.log(x + y);
// }
// add(5, 6)
// add(3)
// add()

//SPREAD
// const arr = [1, 2, 3, 4]
// console.log(arr)
// console.log(...arr)

// // REST

// const numbers = (x, y, ...z) => {
// 	console.log(x, y, z)
// 	console.log(z.map(el => el * 2))
// }
// numbers(1, 23, 34, 45, 456, 234)

// ZAKRESY

// const name = "Lisa" // zakres Globalny. Dostęp do zmiennej jest z każdego miejsca

// const test = () => {
// 	const name = "Wojtek" //Zakres lokalny ponieważ znajduje się w funkcji. Dostęp do tej zmiennej tylko ramach fukcji
// 	console.log(`Name w funkcji - ${name}`)

// 	const test2 = () => {
// 		const name = 'Zbyszek'
// 		console.log(name)
// 	}
// 	test2()
// }
// test()

// console.log(`Name without function - ${name}`)

//FOR EACH, CALLBACK

const numbers = [0.5, 2, 3, "abc"]
const names = ["Lili", "Radek", "Marek", "Przemiek"]

numbers.forEach(num => console.log(num * num))

console.log(`---------------`);

const bigName = names.map(name => name.toUpperCase())
console.log(bigName)

console.log(`--------------`)

const showBigNames = name => {
	console.log(name.toUpperCase())
}
names.forEach(showBigNames)

console.log(`------------`);

names.forEach(el => console.log(el.toUpperCase()))