// const name = "Basia"
// const favMeal = "schab"

// const { last } = require("cypress/types/lodash")

// const { multiply } = require("cypress/types/lodash");

// console.log("Hi ma name " + name + " bartek");

// console.log(`Czesc, jestem ${name} i moim ulubionym ${favMeal} !`);

// const name = "Karol"
// const pet = "hops"
// const age = 45
// console.log(`Czesc jestem ${name}, a to jest imie zwierzaka${pet} - moja rybka`)
// console.log(name + " ma juz " + age + " lat")
// -----------------------------------------------------------------------
// const text1 = "powiększ mnie!"
// console.log("%cText1", "font-size: 16px; color: blue; padding: 5")
// console.log(text1.toUpperCase())

// const text2 = "ZAPISZ MNIE MAŁYMI LITERAMI"
// console.log("%cText2", "font-size: 16px; color: blue; padding: 10")
// console.log(text2.toLowerCase())

// const text3 = "$#%#^ wytnij te dziwne znaki na początku!"
// const search1 = "wytnij"
// console.log("%cText3", "font-size: 16px; color: blue; padding: 10")
// const search2 = text3.indexOf(search1)
// console.log(` "${search1}" is ${search2} `)
// console.log(text3.slice(6))

// const text4 = 'sprawdź, czy zawieram słowo "czy"'
// const czy = "czy"
// console.log("%cText4", "font-size: 16px; color: blue; padding: 10")
// console.log(
// 	`The word "${czy}" ${text4.includes("czy") ? "is" : "is not"} in the text1`
// )

// const text5 =
// 	'wyLoguj w konsoli tylko literę "L", która znajduje się w wyrazie "Wyloguj"'
// console.log("%cText5", "font-size: 16px; color: blue; padding: 10")
// console.log(text5.charAt(2))

// const text6 = "pies zamień każde słowo pies, na słowo kot pies"
// console.log("%cText6", "font-size: 16px; color: blue; padding: 10")
// console.log(text6.replaceAll("pies", "kot"))

// const text7 = "podziel, ten, string, od, przecinków"
// console.log("%cText7", "font-size: 16px; color: blue; padding: 10")
// console.log(text7.split(","))
// ---------------------------------------------------------------
// ZADANIE INSTRUKCJE WARUNKOWE

// 1.
// let x = 50
// let y = 30

// if(x>y) {
//     console.log(`${x} jest większy od ${y}`);
// }

// 2
// const color = "blue"
// const colorNew = "green"

// if (color === colorNew) {
// 	console.log(`ten sam color`)
// } else {
// 	console.log(`różne kolory`)
// }

// 3.
// const x = 100
// const y = 101

// if (x > y) {
// 	console.log(`x > y`)
// } else if (x === y) {
// 	console.log(`x = y `)
// } else {
// 	console.log(`x < y`)
// }

// 4.
// const promo = "24%"

// switch (promo) {
// 	case "10%":
// 		console.log(`promocja 10%`)
// 		break
// 	case "5%":
// 		console.log(`promocja jest 5%`)
// 		break
// 	case "30%":
// 		console.log("promocja jest 30%")
// 		break
// 	default:
// 		console.log(`Promocja ${promo}`)
// 		break
// }

// // 5. Zadanie
// const x = 21

// if (x%2== 0) {
//     console.log(`${x} jest parzyste`)
// } else {
//     console.log(`${x} nie jest parzyste`);
// }

//6.

// const x = 50
// let text

// if (x >= 100) {
//     text =`x jest większy 100`
// }else if (x < 100 && x > 30) {
//     text =`x jest średniakiem`
// }else  {
//     text =`x jest maly`
// }
// console.log(text);

console.log(`-------------`)
//FOR
// const city = ['amsterdam', 'roterdam', 'eidhowen', 'malme']

// for (let c = 0; c < city.length; c++) {
//     console.log(`To miasto nazywa się ${city[c].charAt(0).toUpperCase() + city.slice(1)} `);
// }

// //WHILE
// let x = 0
// while ( x < 10 ){
//     x += 2
//     console.log(x);

// }

// DO WHILE
// let x = 20
// do {
//     x -= 3
// } while (x > 0){
//     console.log(x);
// }

// const numbers = [5,8,10,23,48,60]
// for (let number of numbers) {
//     console.log(number/5);
// }
// console.log(`-------`);

// for (let x of numbers) {
//         if (x%2 == 0) {
//             console.log(`%cCyfra ${x} jest parzysta`, "background:yellow");
//         } else {
//             console.log(`%cCyfra ${x} nie jest parzysta`, "background:orange");
//         }
//     }

//TABLICE
// 1. Zadanie
// const letters = ['c', 'd'];
// letters.push('e','f');
// letters.unshift('a', 'b')
// console.log(letters);
// console.log(letters.includes('c'));

// 2. zadanie
// const number = [5, 8, 10, 23, 48, 60]
// const food = ['strawberry', 'orange', 'pizza', 'hamburger' ]
// const menu = number.concat(food)
// console.log(menu);
// const menu1 = [...food, ...number]
// console.log(menu1);

// 3. zadanie
// const number = [5, 8, 10, 23, 48, 60]
// number.forEach(num => console.log(num * 2))
// console.log(`---------`);
// const newNumber = number.map(num1 => num1 * 5 )
// console.log(newNumber);

// for ( let x of newNumber) {
//     if (x%2 == 0) {
//         console.log(`Jest liczbą parzystą ${x}`);
//     } else {
//         console.log(`Nie jest liczbą parzystą ${x}`);
//     }
// }

// 4. Zadanie

// const colors = ['blue']
// colors.unshift('yellow')
// colors.push('green')
// // console.log(colors);

// for ( let x of colors  ) {
//     console.log(`My favorite colour ${x.toUpperCase()}`);
// }

// for (let c = 0; c < colors.length; c++) {
//     console.log(`Best color ${colors[c].charAt(0).toLocaleUpperCase() + colors[c].slice(1)}`);
// }

// 5. Zadanie

// const cars = 'Audi, Mercedes, BMW, Nissan, Dodge'
// const newCars = cars.split(', ')
// console.log(newCars);

// newCars.length > 3 ? console.log('Jest OK') : console.log('Nie jest ok');

// // if ( newCars.length > 3) {
// //     console.log('Jest OK');
// // } else {
// //     console.log('Nie jest ok');
// // }

// if (newCars.includes('Audi')) {
//     newCars.push('Volvo')
//     console.log(newCars);
// } else {
//     newCars.pop()
//     console.log(newCars);

// }

// FUNKCJE
// Parametr / Argument

// function data(imie, wiek) {
//     console.log(`Cześć mam na imie ${imie} i mam ${wiek} lat`);
// }

// data('Janek', 30)

// Zadanie dodaje element i sprawdź czy jest parzyste 2 way to achive goal
// 1 Solution
// let score
// const parzyste = x => {
// 	console.log(`Liczba ${score} jest parzysta`)
// }

// const nieparzysta = x => {
// 	console.log(`Liczba ${score} jest nie parzysta`)
// }

// const add = (x, y) => {
// 	score = x + y

// 	// if (score%2 == 0) {
// 	//     parzyste()
// 	// }else {
// 	//     nieparzysta()
// 	// }
// 	score % 2 == 0 ? parzyste() : nieparzysta()
// }
// add(2, 5)

// 2. Solution

// const add = (x ,y) => {
//     const score = x + y
//     score % 2 == 0 ? parzysta(score) : nieparzysta(score)
// }

// const parzysta = (x) => {
//     console.log(`Liczba ${x} jest nie halo`);
// }
// const nieparzysta = (x) => {
//     console.log(`Liczba ${x} jest halo`);
// }

// add(3,18)

//ZADANIE 2 Zmiana celcjusza na fahrenthaina

// let celsius
// let temp

// const fahrenheit = (x) => {
//     celsius = x
//     temp = x * 1.8 + 32
//     console.log(`${celsius} stopni C = ${temp} fahrentheita`);
// }
// fahrenheit(20)

// ZADANIE 3. CAllback/ forEach

// const num = 10
// const numbers = []

// for (let i = 0; i < num; i++) {
// 	numbers.push(i)
// }

// const CheckNumber = number => {
// 	if (number % 3 === 0 && number !== 0 ) {
// 		console.log(`${number} jest podzielna przez 3`)
// 	} else {
// 		console.log(`${number} nie jest podzielne przez 3 lub jest równe 0`)
// 	}
// }
// numbers.forEach(CheckNumber)

// const num = 8
// const numbers = []

// for (let x = 0; x < num; x++) {
// 	numbers.push(x)
// }

// const CheckNumber = number => {
// 	number % 3 === 0 && number !== 0
// 		? console.log(`${number} jest podzielne przez 3`) : console.log(`${number} nies jest podzielne przez 3  lub ${number} = 0`)
// }

// numbers.forEach(CheckNumber)

// const heading = document.querySelector('h1')
// console.log(heading);

// const array = document.querySelectorAll('p')
// console.log(array);

// const dive = document.querySelector('.test')
// console.log(dive);

// const paragraf = dive.querySelector('#test')
// console.log(paragraf);

//DODAWANIE ELEMENTÓW

// const body = document.querySelector('body')
// const ulList = document.createElement('ul')
// const number = 10
// body.append(ulList)

// for(let i = 1; i<= number; i++ ) {
//     const addLi = document.createElement('li')
//     addLi.textContent = i
//     ulList.append(addLi)

// }

// const lastli = ulList.querySelector('li:last-child')
// lastli.textContent = 'Jestem ostatnim elementem'

// lastli.style.backgroundColor = 'royalblue'
// lastli.style.padding = '20px 40px'
// lastli.style.fontSize = '40px'

// const btn1 = document.querySelector('.btn1')
// const btn2 = document.querySelector('.btn2')
// const squer = document.querySelector('.square')
// const p1 = document.querySelector('.p1')
// const p2 = document.querySelector('.p2')
// const body = document.querySelector('body')

// const Hi = () => {
//     console.log('Cześć');
// }

// const colorRed = () => {
//     squer.style.backgroundColor = 'red'
// }

// const colorBlue = () => {
//     squer.style.backgroundColor = 'blue'
// }

// const toggleShow = () => {
//     p1.classList.toggle('show')
//     p2.classList.toggle('show')
// }

// btn1.addEventListener('dblclick', Hi)
// squer.addEventListener('mouseover', colorRed)
// squer.addEventListener('mouseleave', colorBlue)
// btn2.addEventListener('click', toggleShow)

// const img = document.querySelector('img')

// img.setAttribute('src', 'https://unsplash.it/600/400')
// img.setAttribute('alt', 'losowy obrazek')

// const name = () => {
//     console.log('cokolwiek');

// }

// setTimeout(name, 5000)

// const liItems = document.querySelectorAll('li')
// console.table(liItems);

// let number = 1

// for (const liItem of liItems){
//     liItem.textContent = number
//     liItem.dataset.id = number
//     number++
// }

// const li3 = document.querySelector('[data-id="3"]')

// console.log(li3.closest('div'));

const btn1 = document.querySelector(".btn1")
const btn2 = document.querySelector(".btn2")
const btn3 = document.querySelector(".btn3")

function Meal(name, price) {
	this.name = name
	this.price = price
}

Meal.prototype.show = function () {
	console.log(`Potrawa ${this.name} kosztuje ${this.price} `)
}

const menu1 = new Meal("Barszcz", 50)
const menu2 = new Meal("Krokiet", 20)
const menu3 = new Meal("Kluski", 10)

btn1.addEventListener("click", () => menu1.show())
btn2.addEventListener("click", () => menu2.show())
btn3.addEventListener("click", () => menu3.show())

// btn2.addEventListener('click', menu2.schow())


