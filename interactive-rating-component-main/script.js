
const cardMainDOM = document.querySelector(".card--main");
const cardThankYouDOM = document.querySelector(".card--thank-you")
const buttonsRatingDOM = document.querySelectorAll(".card__btn-rating")
const buttonSubmitDOM = document.querySelector(".btn-submit")
const resultNumber = document.querySelector(".card__result__number")

buttonsRatingDOM.forEach(element => {
    element.addEventListener("click", () => buttonSelect(element));
});

buttonSubmitDOM.addEventListener("click", submitRating);

function buttonSelect(selectedButton){
    
    buttonsRatingDOM.forEach(element => {
        element.classList.remove("card__btn-rating--active");
    })

    selectedButton.classList.add("card__btn-rating--active");
}

function submitRating(){
    const selectedButton = document.querySelector(".card__btn-rating--active")
    if(selectedButton){
        cardThankYouDOM.classList.remove("hidden");
        cardMainDOM.classList.add("hidden");
        resultNumber.textContent = selectedButton.textContent;
    } else {
        alert("Rate first to proceed")
    }
}

