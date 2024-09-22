const { log } = console;
let progressBar = document.querySelector(".bar");
const header = document.querySelector("header");

const navMenu = document?.querySelector(".menu") 
|| document.querySelector(".nav-menu"),
    minNavMenu = document.querySelector(".min-nav-links"),
    marketContent = document.querySelectorAll(".market-content"),
    marketImg = document.querySelectorAll(".market-img"),
    bladeSectionImg = document.querySelector(".blade-section-img"),
    quotesSection = document.querySelector(".quotes"),
    quoteSlider = quotesSection.querySelector(".quotes-slider"),
    exploreSlides = document.querySelector(".explore-slides"),
    nextSlide = document.querySelector(".next-btn-tag"),
    prevSlide = document.querySelector(".back-btn-tag"),
    slideSpan = document.querySelectorAll(".explore-slides-tracker span");
    ;
    // headerContainer = document.querySelector("header.active")

let { documentElement } = document;

function progressBarJS() {
    window.addEventListener("scroll", (e) => {
        let scrollTop = documentElement.scrollTop;
    
        let height = documentElement.scrollHeight - documentElement.clientHeight;
    
        let scroll = scrollTop / height * 100;
    
        progressBar.style.width = scroll + "%"; 
    })
}

function checkNavBar() {
    navMenu?.addEventListener("click", (e) => {
        let menu = e.target;
        let menuChildren = menu.children;

        if (menu.classList.contains("open")) {
            header.classList.add("active");
            menu.style.gap = "0rem";
           for (let i = 0; i < menuChildren.length; ++i) {
            if (i == 0) { 
                menuChildren[i].style.transform = "rotateZ(47deg) translate(0, .1rem)";
            } else if(i == 1) {
                // menuChildren[i].style.transform = "rotateZ(-47deg) translate(.2rem, -.2rem)";
                menuChildren[i].style.width = "0rem";
                menuChildren[i].style.transition = "150ms 30ms ease";
                // menuChildren[i].style.transition 
            } else {
                menuChildren[i].style.transform = "rotateZ(-47deg) translate(.2rem, -.2rem)";                
            }
            if (i % 2 == 0) {
                menuChildren[i].style.transition = "350ms 550ms ease";
            }
           }
           menu.classList.remove("open");
           navMenuController()
        } else {
            header.classList.remove("active");
            menu.style.gap = ".9rem";
            for (let i = 0; i < menuChildren.length; ++i) {
                menuChildren[i].style.transform = "rotateZ(0deg) translate(0)";

                if (i == 1) menuChildren[i].style.width = "3.5rem", menuChildren[i].style.transition = "150ms 250ms ease";

                if (i % 2 == 0) {
                    menuChildren[i].style.transition = "350ms ease";
                }
            }
            menu.classList.add("open");
            navMenuController()
            
        }
    })
}

function navMenuController() {
    if (header.classList.contains("active")) {
        header.classList.remove("inactive");
        header.children[0].classList.remove("container-height");
        minNavMenu.classList.add("min-nav-links-show");
        minNavMenu?.classList.remove("min-nav-links-hide");
    } else {
        header.classList.add("inactive");
        header.children[0].classList.add("container-height");
        minNavMenu.classList.remove("min-nav-links-show");
        minNavMenu?.classList.add("min-nav-links-hide");


        setTimeout(() => {
            header.classList.remove("inactive");
        }, 1000);
    }
}
function marketContentJS() {
    for (let i = 0; i < marketContent.length; ++i) {
        marketContent[i].addEventListener("click", (e) => {
            let _content = marketContent[i], _img = marketImg[i];
            _content.classList.toggle("market-content-show");
            _img.classList.toggle("active");
        })
    }
}

function quoteReveal() {
    window.addEventListener("scroll", (e) => {
        let offsetTop = quotesSection.offsetTop;

        let scrollTarget = window.pageYOffset - offsetTop;

        if (quotesSection.getBoundingClientRect().top < this.innerHeight) {

            if (scrollTarget > 0 && scrollTarget < 750) {
                quoteSlider.style.transform = `translateX(${-0}rem)`;
                
            } 


            if (scrollTarget > 1050) {
                quoteSlider.style.transform = `translateX(${-60.5}rem)`;
                
            } 
            if (scrollTarget > 3200) {
                quoteSlider.style.transform = `translateX(${-120.5}rem)`;
            }
        }
    })
    document.querySelector(".quotes-template").style.transition = "650ms ease";
}


function exploreSlidesJS(){

    let slideNum, slideValue, slideHolder, slideLimit = null;
    // SLIDESHOW
    // update value on different screen size
    // if (exploreSlides.className("s-428")) {
        
    
    // if (exploreSlides.classList.contains("s-745")) {
    //     alert("wow")
    //     slideNum = 0, slideValue = slideHolder = 100.5, slideLimit = slideValue * 2;
    // }
    nextSlide.addEventListener("click", (e) => {

        log (slideNum);

        slideNum = slideNum + slideValue;


        if (slideNum > slideLimit) slideNum = 0;

        exploreSlides.style.transform = `translateX(${-slideNum}rem)`;

    
        for (let i = 0; i < slideSpan.length; ++i) {
            slideSpan[i].classList.remove("active");

            if (slideNum == 0) {
                slideSpan[0].classList.add("active");
            }
            if (slideNum == slideValue) {
                slideSpan[0].classList.remove("active");

                slideSpan[1].classList.add("active");
            } 

            if (slideNum == slideLimit) {
                slideSpan[1].classList.remove("active");

                slideSpan[2].classList.add("active");
            }
        }
    })

    prevSlide.addEventListener("click", (e) => {
        slideNum = slideNum - slideValue;

        if (slideNum < 0) slideNum = slideLimit;

        exploreSlides.style.transform = `translateX(${-slideNum}rem)`;


        for (let i = 0; i < slideSpan.length; ++i) {
            slideSpan[i].classList.remove("active");

            if (slideNum == 0) {
                slideSpan[0].classList.add("active");
            }
            if (slideNum == slideValue) {
                slideSpan[0].classList.remove("active");

                slideSpan[1].classList.add("active");
            } 

            if (slideNum == slideLimit) {
                slideSpan[1].classList.remove("active");

                slideSpan[2].classList.add("active");
            }
        }
    })

    for (let i = 0; i < slideSpan.length; ++i){
        slideSpan[i].addEventListener("click", (e) => {
            slideSpan[i].classList.remove("active");
            switch (i) {
                case 0:
                    slideSpan[i].classList.add("active");
                    slideSpan[slideSpan.length - 1].classList.remove("active");
                    slideSpan[slideSpan.length - 2].classList.remove("active");

                    slideNum = slideValue * 0;
                    exploreSlides.style.transform = `translateX(${-slideNum}rem)`;

                break;
                case 1:
                    slideSpan[i].classList.add("active");
                    slideSpan[slideSpan.length - 1].classList.remove("active");
                    slideSpan[slideSpan.length - slideSpan.length].classList.remove("active");

                    slideNum = slideValue;
                    log (slideNum)

                    exploreSlides.style.transform = `translateX(${-slideNum}rem)`;
                break;
                case 2: 
                    slideSpan[i].classList.add("active");
                    slideSpan[slideSpan.length - 2].classList.remove("active");
                    slideSpan[slideSpan.length - slideSpan.length].classList.remove("active");

                    slideNum = slideLimit;
                    log(slideNum)

                    exploreSlides.style.transform = `translateX(${-slideNum}rem)`;

                break;
                default:
                break;

            }


        })
    }
    // nextSlide.addEventListener("click", (e) => { 
    //     log (slideNum)
    //     slideNum = slideNum + slideValue;
    //     exploreSlides.style.transform = `translateX(${-slideNum}rem)`;
    //     if (slideNum > slideLimit) slideNum = 0, exploreSlides.style.transform = `translateX(${0}rem)`;
    // })
    // prevSlide.addEventListener("click", (e) => {
    //     log (slideNum)
    //     if (slideNum == 0)  slideNum = slideLimit;
    //     exploreSlides.style.transform = `translateX(${-slideNum}rem)`;
    //     slideNum = slideNum - slideValue;
    // })
}

function updateScreenSizeValue(){
    // on load

    function load() {
        let screenWidth = window.innerWidth;

        if (screenWidth >= 300) {
            exploreSlides.className = "explore-slides s-428";
        }

        if (screenWidth >= 745) {
            exploreSlides.classList.remove("s-428");
            exploreSlides.classList.add("s-745");
        }
    }

    window.onload = load;
    window.onresize = load;



    // on resize
    // window.addEventListener("resize");
}

function cScroll() {
    // slide from start
    const slideOffset = 0;
    // number of slides
    let slideLimit = exploreSlides.children.length * 100;

    let calc = 0;

    nextSlide.addEventListener("click", (e) => {
        calc = calc + 100;
        exploreSlides.style.transform = `translateX(${-calc}%)`;

        if (calc >= slideLimit) {
            calc = slideOffset;
            exploreSlides.style.transform = `translateX(${-calc}%)`;
        }
        
       for (let i = 0; i < slideSpan.length; ++i) {
            slideSpan.forEach(slide => {
                if (slide.classList.contains("active")) {
                    slide.classList.remove("active");
                }
            }) 

            if (calc == slideOffset) {
                slideSpan[slideOffset].classList.add("active");
            } 
            // if (calc > slideOffset && calc <= slideLimit - 100) {
            if (calc == (slideLimit - 200)){
                slideSpan[slideSpan.length - 2].classList.add("active");
            }
            if (calc == (slideLimit - 100)) {
                slideSpan[slideSpan.length - 1].classList.add("active");
            }
       }
    })
    ;
    prevSlide.addEventListener("click", (e) => {
        if (calc <= slideOffset) calc = slideLimit; 
        calc = calc - 100;
        exploreSlides.style.transform = `translateX(${-calc}%)`;

        for (let i = 0; i < slideSpan.length; ++i) {
            slideSpan.forEach(slide => {
                if (slide.classList.contains("active")) {
                    slide.classList.remove("active");
                }
            }) 

            if (calc == slideOffset) {
                slideSpan[slideOffset].classList.add("active");
            } 
            // if (calc > slideOffset && calc <= slideLimit - 100) {
            if (calc == (slideLimit - 200)){
                slideSpan[slideSpan.length - 2].classList.add("active");
            }
            if (calc == (slideLimit - 100)) {
                slideSpan[slideSpan.length - 1].classList.add("active");
            }
       }
    })

    
    for (let i = 0; i < slideSpan.length; ++i) {
        slideSpan[i].addEventListener("click", (e) => {
            if (!slideSpan[i].classList.contains("active")) {
                slideSpan.forEach(slide => {
                    slide.classList.remove("active");
                    slideSpan[i].classList.add("active");
                })
            }
        })
    }

    for (let i = 0; i < slideSpan.length; ++i) {
        slideSpan[i].addEventListener("click", (e) => {
            switch (i) {
                case 0: 
                    calc = slideOffset;
                    exploreSlides.style.transform = `translateX(${-calc}%)`;
                    break;
                case 1: 
                    calc = 100;
                    exploreSlides.style.transform = `translateX(${-calc}%)`;
                    break;
                case 2:
                    calc = slideLimit - 100;
                    exploreSlides.style.transform = `translateX(${-calc}%)`;
                    break;
                default:
                    break;

            }
        })
    }
}

function animation() {};

document.addEventListener("DOMContentLoaded", (e) => {
// updateScreenSizeValue();

    progressBarJS();
    checkNavBar()
    marketContentJS();
    quoteReveal();
    // exploreSlidesJS();
    cScroll();

});


