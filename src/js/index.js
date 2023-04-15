const ratingState = document.querySelector("#rating-state")
const thankYouState = document.querySelector("#thank-you-state")
const submitButton = document.querySelector("#submit-button")
const ratingButton = document.querySelectorAll(".rating-button")
const ratingAlert = document.querySelector("#rating-alert")
let selectedRating = null

submitButton.addEventListener("click", function(e) {
    e.preventDefault()

    if (selectedRating !== null) {
        ratingState.style.display = "none"
        thankYouState.style.display = "flex"
    } else {
        ratingAlert.textContent = ("You must choose a rating between 1 and 5")
    }

})

ratingButton.forEach(button => {
    button.addEventListener("click", function() {
        this.classList.add("active")
        selectedRating = this.textContent
        
        const rating = document.querySelector(".rating")
        rating.textContent = `${this.textContent}`

        ratingButton.forEach(otherButton => {
            if (otherButton != this) {
                otherButton.classList.remove("active")
            }
        })
    })
})