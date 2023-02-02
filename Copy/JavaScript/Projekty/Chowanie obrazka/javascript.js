const arrowBtn = document.querySelector('.arrow')
const arrowIcon = document.querySelector('.fas')
const img = document.querySelector('.item1')
const hide = document.createElement('hide')

const showImage = () => {
    img.classList.toggle('hide')
    if(img.classList.contains('hide')){
        arrowIcon.style.transform ='rotate(180deg)' 
    } else {
        arrowIcon.style.transform = 'rotate(0deg)'
    }
}

arrowBtn.addEventListener('click', showImage)

