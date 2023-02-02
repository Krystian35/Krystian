// const numbers = [1, 2, 3, 4, 5]
// console.log(numbers)
// console.log(`----------`)

// //unshift dodaj elementy na początku tablicy
// numbers.unshift("abcd", -1, 0)
// console.log(numbers)
// console.log(`----------`)

// //shift usuwa elemnt z indeksem 0
// numbers.shift()
// console.log(numbers)
// console.log(`----------`)

// // push - dodaje elemnty na końcu tablicy - metoda destrukcyjna zmienia zawartośc orginalnej
// const colors = ["red", " blue", "gold"]
// colors.push("pink", "yellow")
// console.log(colors)
// console.log(`----------`)

// // pop - usuwa ostatni element
// colors.pop()
// console.log(colors)
// console.log(`----------`)

// ----- ARRAY METHOD -------

// const numbers = [1, 2, 3, 4, 5]

// function multiply(x) {
//     return x * 2
// }

// Metoda map : itteruje wszystkie elementyw tablicy, zwraca NOWĄ tablice
// const newNumbers = numbers.map(multiply)
// console.log(numbers);
// console.log(newNumbers);

// Metoda concat łączy 2 tablice natomiast nie zmienia elementów w tablicach łączonych
// console.log(numbers);
// numbers.push(6,7,8)

// const abc = ["a", "b", "c"]
// const newABC = abc.concat(numbers)
// console.log(newABC);

// ... Spread/Rest operator - działa podobnie jak concat z tym, że jeszcze mamy dostęp osobno do każdego elementu
// console.log(...abc);
// const drinks = ['pepsi', 'coffe', 'juc', 'appel', 'margarita']
// const meal = ['schabowy', 'barszcz', 'krokiet']

// const menu = [...drinks, ...meal]
// console.log(...menu);

// ZADANIE 

// const numbers = [0, 0, 1, 1, 2, 2, 2]
// const colors = ["red", "green", "blue", true, 123]
// const cars = [123, true, "audi", "bmw", "mercedes", "ferrari", "🤷‍♂️", "👀"]

// // slice - wycinanie elementów
// console.log("%cNumbers2", "font-size: 16px; color: blue; padding: 10")
// const numbers2 = numbers.slice(0, 2)
// console.log(numbers2)

// console.log("%cNumbers3", "font-size:16px; color: green; padding:10")
// const numbers3 = numbers.slice(4)
// console.log(numbers3)

// // splice - wycinanie
// console.log("%crandomStuff", "font-size: 16px; color:grren")
// const randomStuff = colors.splice(-2)
// console.log(randomStuff)
// console.log("%cColors", "font-size:16px; color: green; padding:10")
// console.log(colors)

// const newCars = cars.splice(2, 4, "test")
// console.log("%ccars", "font-size:16px; color:blue")
// console.log(cars)
// console.log("%cnewCars", "font-size:16px; color:blue")
// console.log(newCars)

// const numbers = [0, 23, 48, 175, 2, 34, 11]
//  function number(x) {
//     return x% 2 === 0
//  }
// // console.log(numbers.filter(number));

// //FOR EACH

// numbers.forEach(num => console.log(num * 2))

// console.log(numbers.includes(10));
// console.log(numbers.indexOf(0));

// MAP VS forEach

// const numbers = [0, 1, 2, 3]

// // Jeżeli chcemy wykonać tylko kod na danej tablicy bez zwracania(wyświetlanie) używamy forEacha

// const newNumbers = numbers.forEach(number => console.log(number * 2))
// console.log(newNumbers);

// console.log(`------------`);

// // Jeżeli chcemy zwrócić (wyświetlić) nową wartośc, która jest przechowywana w nowej zmiennej (mapNumber) używamy map

// const mapNumber = numbers.map(number => (number * 2))
// console.log(mapNumber);

const array1 = ['a', 'b', 'c', 'd', 'e'];
console.log(array1);

// copy to index 0 the element at index 3
console.log(array1.copyWithin(1, 3));
// expected output: Array ["d", "b", "c", "d", "e"]