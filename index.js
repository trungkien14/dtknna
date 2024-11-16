const slides = document.querySelectorAll(".section__title-slides img");
const slidesText = document.querySelectorAll(".section__desc-slides .section__desc-title")
let slideIndex = 0;
let intervalId = null;

// initializeSlider();

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {



    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        slidesText[slideIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 105000);
    }

}
function showSlide(index) {

    if (index >= slides.length) {
        slideIndex = 0;
    }
    else if (index < 0) {
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slides[slideIndex].classList.add("displaySlide");

    slidesText.forEach(slide => {
        slide.classList.remove("displaySlide")
    });
    slidesText[slideIndex].classList.add("displaySlide");


}
function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}
function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}

const selectBtn = document.querySelector('.js-select-btn');
const selectList = document.querySelector('.js-select-list');
const selectBtnIcon = document.querySelector(".select-btn i");

function showList() {
    selectList.classList.toggle('open');
    selectBtnIcon.classList.toggle('action');
}

function closeList() {
    selectList.classList.remove('open');
    selectBtnIcon.classList.remove('action');

}

selectBtn.addEventListener('click', showList);

document.addEventListener('click', (event) => {
    if (!selectBtn.contains(event.target)) {
        closeList();
    }
});



const listPerson = document.querySelectorAll(".select-list .option");
const selectBtnText = document.querySelector(".select-btn span");
listPerson.forEach((item) => {
    item.addEventListener("click", () => {
        selectBtnText.textContent = item.textContent;
    });
});
