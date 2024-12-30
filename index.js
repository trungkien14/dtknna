const slides = document.querySelectorAll(".section__title-slides img");
const slidesText = document.querySelectorAll(".section__desc-slides .section__desc-title")
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider)

function initializeSlider() {
    if (slides.length > 0) {
        slides[slideIndex].classList.add("displaySlide");
        slidesText[slideIndex].classList.add("displaySlide")
        intervalId = setInterval(nextSlide, 8000);
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

const serviceLists = document.querySelectorAll(".survice__list");
let serviceIndex = 0;

function initializeServiceSlider() {
    showServiceList(serviceIndex);
}

function showServiceList(index) {
    serviceLists.forEach((list, i) => {
        list.style.display = i === index ? "flex" : "none";
    });
}

function prevServiceList() {
    serviceIndex--;
    if (serviceIndex < 0) {
        serviceIndex = serviceLists.length - 1;
    }
    showServiceList(serviceIndex);
}

function nextServiceList() {
    serviceIndex++;
    if (serviceIndex >= serviceLists.length) {
        serviceIndex = 0;
    }
    showServiceList(serviceIndex);
}

document.querySelector('.btn-prev-survice').addEventListener('click', prevServiceList);
document.querySelector('.btn-next-survice').addEventListener('click', nextServiceList);

document.addEventListener("DOMContentLoaded", initializeServiceSlider);


const btnToTop = document.querySelector(".btn-to-top");

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 400 || document.documentElement.scrollTop > 400) {
        btnToTop.style.display = "block";
    } else {
        btnToTop.style.display = "none";
    }
}

const navBarLeft = document.querySelector(".navbar-left")
const navBarRight = document.querySelector(".navbar-right")


function actionNav() {
    navBarLeft.classList.toggle("display");
    navBarRight.classList.toggle("display");
}

document.querySelectorAll('#nav > li').forEach(item => {
    item.addEventListener('click', function (e) {

        const subnav = this.querySelector('.subnav');
        if (subnav) {
            subnav.style.display = subnav.style.display === 'block' ? 'none' : 'block';
        }
        ;
    });
});

const navOpen = document.querySelector(".nav__top-open");
const navClose = document.querySelector(".nav__top-close");

function activeMenu() {
    navOpen.classList.toggle("active");
    navClose.classList.toggle("active");
}

function highlightButton(button) {
    const buttons = document.querySelectorAll('.news-tab-btn');
    buttons.forEach(btn => btn.classList.remove('active'));

    button.classList.add('active');
}


function toggleSearchTab() {
    const searchTab = document.getElementById('search-tab');
    searchTab.classList.toggle('hidden');
}

function closeSearch() {
    const searchTab = document.getElementById('search-tab');
    if (!searchTab.classList.contains("hidden")) {
        searchTab.classList.add('hidden');
    }
}

document.querySelectorAll('.navbar-btn').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();
    });
});

xxxx