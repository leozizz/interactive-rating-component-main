const ratingState = document.querySelector("#rating-state")
const thankYouState = document.querySelector("#thank-you-state")
const submitButton = document.querySelector("#submit-button")
const ratingButton = document.getElementsByName("ratings")
const ratingAlert = document.querySelector("#rating-alert")
let rating = document.querySelector(".rating")

submitButton.addEventListener("click", function(e) {
    e.preventDefault()

    checkRadioValues(ratingButton)

    rating.textContent ? changeStates() : selectionAlert()

})

function checkRadioValues(radios) {
    for (let i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            rating.textContent = `${radios[i].value}`
            break
        }
    }
}

function changeStates() {
    ratingState.style.display = "none"
    thankYouState.style.display = "flex"
}

function selectionAlert() {
    ratingAlert.textContent = "You must choose a rating between 1 and 5"
}