const button = document.querySelectorAll('.button')
const text = document.querySelectorAll('.information')
const arrow = document.querySelectorAll('.selector')

button.forEach((button, index) => {
    button.addEventListener('click', () => {
        const informationActive = text[index].classList.contains('show-information')
        if (informationActive) {
            text[index].classList.remove('show-information')
            arrow[index].classList.remove('color')

        } else {
            hide()
            text[index].classList.add('show-information')
            arrow[index].classList.add('color')

        }
    })

})

function hide() {
    const informationActive = document.querySelector('.show-information')
    if (informationActive) {

        informationActive.classList.remove('show-information')
    }
    arrow.forEach(arrow => {
        arrow.classList.remove('color')

    })

}
