// Download Objects

// //getElementById
// const test = document.getElementById("item")

// console.log(test);

// // getElementByTagName - pobieram w formie tablicy

// const test2 = document.getElementsByTagName('ul')
// console.log(test2);

// // getElementByClassName

// const test3 = document.getElementsByClassName('test')
// console.log(test3);

// querySelector (ES6) - nie wspirają żywe kolekcje

// const test = document.querySelector('li')
// console.log(test);

// const ulList = document.querySelector('ul')
// console.log(ulList);

// const LiIteam = ulList.querySelector('li')
// console.log(LiIteam);

// // querySelectorAll (ES6)    nie wspirają żywe kolekcje
// const test2 = document.querySelectorAll('li')
// console.log(test2);

// żywe kolekcje, czyli qSA vs getElement, TagName, ClassName - używamy starszych metod

//TWORZENIE I DODAWANIE ELEMTNÓW NA STRONIE

// const ulList = document.createElement("ul")
// const LiList = document.createElement("li")
// LiList.textContent = "cześć"

// document.body.appendChild(ulList)
// ulList.appendChild(LiList)

//APPEND / APPEND CHILDE

// const div = document.querySelector("div")
// const paragraf = document.createElement("p")

// const h1 = document.createElement("h1")

// const h2 = document.createElement("h2")

// const li = document.createElement("li")

// div.append(paragraf, h1, "witaj")

// textContent, innerText, outerHTML &innerHTML

// const btn = document.querySelector('button')
//btn.outerHTML= 1123 zamienia button na string
//btn.innerHTML = 'asd' zmienie zawartość wewnątrz buttona
//btn.textContent = 'asdsa'
//btn.innerText = 'ADB'

// console.log(btn.innerText);
// console.log((btn.textContent));

// USUWANIE

// const dive = document.querySelector('div')
// const p123 = document.querySelector('p')

//dive.removeChild(p123)
//p123.remove()
//dive.remove()

// addEventListener - Listenery zawsze dajemy na dole 

// const btn1 = document.querySelector(".btn-1")
// const btn2 = document.querySelector(".btn-2")
// const btn3 = document.querySelector(".btn-3")

// btn1.addEventListener("click", function () {
// 	console.log("Kliknięto mnie")
// })

// btn2.addEventListener("mouseover", () => {
// 	console.log("Najechano na mnie")
// })

// const test = () => {
// 	console.log("double test")
// }

// btn3.addEventListener("dblclick", test)

// const bts = document.querySelectorAll('button')
// const smile = () => {
//     console.log('😃');
// }

// bts.forEach(btn => btn.addEventListener('click', smile))

// EVENT
// const btn = document.querySelector('button')

// const test = (e) => {
//     // console.log(e);
//     console.log(e.target);
//     console.log(e.target.classList);
//     console.log(e.target.offsetTop);
// }

// btn.addEventListener('click', test)

//Delegacja Zdarzezń
// const bd = document.querySelector('body')
// const div = document.createElement('div')
// div.classList.add('circle', 'purple')

// bd.append(div, 'hej')



//ADD, REMOVE, TOGGLE

// const addBtn = document.querySelector(".add")
// const removeBtn = document.querySelector('.remove')
// const toogleBtn = document.querySelector('.toggle')
// const text = document.querySelector('p')

// const addClass = () => {
//     text.classList.add('test')
// }

// const removeClass = () => {
//     text.classList.remove('test')
// }


// const toggleClass = () => {
//     text.classList.toggle('test')
// }


// const addClassBtn = () => {
//     addBtn.classList.toggle('test2')
// }
// toogleBtn.addEventListener('click', addClassBtn)


// removeBtn.addEventListener('click', removeClass)
// addBtn.addEventListener('click', addClass)
// toogleBtn.addEventListener('click', toggleClass)