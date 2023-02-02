let todoInput // miejsce gdzie użytkownik wpisuje treść zadania
let errorInfo // info o braku zadania / konieczność wpisania tekstu
let addBtn // przycisk ADD - dodaje nowe elemnty do listy
let ulList // lista zadań, tagi
let addNewTodos // nowe li. nowe zadanie

let popup // popup
let popupInfo //tekst w popaupie
let todoEdit // edytowanie Todo
let popupInput // input w popapir
let popupAddBtn // przycisk dodaj
let popupCloseBtn // przycisk anuluj

const main = () => {
	prepareDOMElements()
	prepareDOMEvents()
	//wywoływała funkcje
}
const prepareDOMElements = () => {
	todoInput = document.querySelector(".todo-input")
	errorInfo = document.querySelector(".error-info")
	addBtn = document.querySelector(".btn-add")
	ulList = document.querySelector(".todolist ul")

	popup = document.querySelector(".popup")
	popupInfo = document.querySelector(".popup-info")
	popupInput = document.querySelector(".popup-input")
	popupAddBtn = document.querySelector(".accept")
	popupCloseBtn = document.querySelector(".cancel")
}

const prepareDOMEvents = () => {
	addBtn.addEventListener("click", addNewTodo)
	ulList.addEventListener("click", check)
	popupCloseBtn.addEventListener("click", closePopup)
	popupAddBtn.addEventListener("click", changeToDo)
	todoInput.addEventListener('keyup', clickEnter)
}

/*
1. tworzy nowy element
2.dodawanie elementu do ul listy
3.funkcja odpalana na click po kliknięciu Add
4.Przechwycenie 
5. Zabezpiecznie przed pustym to Dosem

*/

const addNewTodo = () => {
	if (todoInput.value !== "") {
		newTodo = document.createElement("li")
		newTodo.textContent = todoInput.value

		cretToolArea()

		ulList.append(newTodo)
		todoInput.value = ""
		errorInfo.textContent = ""
	} else {
		errorInfo.textContent = "Wpisz treść zadania"
	}
}

/* 1 stworzyć Diva
    2. stworzyć buttony
    3. dodać klasse
*/

const cretToolArea = () => {
	const newDiv = document.createElement("div")
	newDiv.classList.add("tools")
	newTodo.append(newDiv)

	const completeBtn = document.createElement("button")
	completeBtn.classList.add("complete")
	completeBtn.innerHTML = '<i class="fas fa-check"></i>'

	const editBtn = document.createElement("button")
	editBtn.classList.add("edit")
	editBtn.textContent = "EDIT"

	const deleteBtn = document.createElement("button")
	deleteBtn.classList.add("delete")
	deleteBtn.innerHTML = '<i class="fas fa-times"></i>'

	newDiv.append(completeBtn, editBtn, deleteBtn)
}

const check = e => {
	if (e.target.matches(".complete")) {
		e.target.closest("li").classList.toggle("completed")
		e.target.classList.toggle("completed")
	} else if (e.target.matches(".edit")) {
		editTodo(e)
	} else if (e.target.matches(".delete")) {
		deleteToDO(e)
	}
}

const editTodo = e => {
	toDoEdit = e.target.closest("li")

	popupInput.value = toDoEdit.firstChild.textContent

	popup.style.display = "flex"
}

const closePopup = () => {
	popup.style.display = "none"
}

const changeToDo = () => {
	if (popupInput.value !== "") {
		toDoEdit.firstChild.textContent = popupInput.value
		popup.style.display = "none"
	} else {
		popupInfo.textContent = "Musisz podać treść"
	}
}

const deleteToDO = e => {
	e.target.closest("li").remove()

	const allTodos = document.querySelectorAll("li")
	if (allTodos.length === 0) {
		errorInfo.textContent = "Brak zadań na liście"
	}
}
const clickEnter = e => {
	 if (e.key === 'Enter'){
		addNewTodo()
	 }

}
document.addEventListener("DOMContentLoaded", main)
