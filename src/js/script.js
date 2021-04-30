'use strict'

function burger() {
    let btn = document.querySelector(".header__navbar-burger");
    let menu = document.querySelector('.main__navigation');
    let line = document.querySelector('.header__navbar-burger-line');

    btn.addEventListener("click", () => {
        menu.classList.toggle("active");
        line.classList.toggle("active")
    });
}
burger();

function slider() {
    const slides = document.querySelectorAll(".main__slider-slide-img");
    const dots = document.querySelectorAll(".main__slider-slide-dots-container");
    let currentIndex = 1;

    function selectTabContent(img) {
        slides.forEach(item => activeRemove(item, img));
    };

    function activeRemove(item, className) {
        return item.classList.contains(className) ? item.classList.add("active") : item.classList.remove("active");
    };

    function createSlider() {
        dots.forEach(item => item.addEventListener("click", selectTabBtns));
    
        function selectTabBtns() {
            dots.forEach(item => item.classList.remove("active"));
            this.classList.add("active");
            currentIndex = Number(this.dataset.img.split("-")[1]);
            selectTabContent(this.dataset.img);
        };
    
        showSlides(currentIndex);
    
        function nextSlide() {
            showSlides(currentIndex += 1);
        }
        setInterval(nextSlide, 3000)

        function showSlides(n) {
            if (n > dots.length) currentIndex = 1;
            if (n < 1) currentIndex = dots.length;
            for (let slide of dots) slide.classList.remove("active");
            dots[currentIndex - 1].classList.add("active");
            selectTabContent(dots[currentIndex - 1].dataset.img);
        }
      };
    createSlider();  
}
slider();


function up() {
    const btnUp = document.querySelector(".vector");

    function trackScroll() {
        let scrolled = window.pageYOffset;
        let coords = document.documentElement.clientHeight;

        if (scrolled > coords) {
            btnUp.classList.add("active");
        }
        if (scrolled < coords) {
            btnUp.classList.remove("active");
        }
    }

    function backToTop() {
        if (window.pageYOffset > 0) {
          window.scrollBy(0, -80);
          setTimeout(backToTop, 0);
        }
    }

    window.addEventListener('scroll', trackScroll);
    btnUp.addEventListener('click', backToTop);
}
up();