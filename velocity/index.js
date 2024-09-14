const { log } = console;

const header = document.querySelector("header");

let 
    hero = document.querySelector(".hero");
    navMenu = document.querySelector(".nav-links-menu"),
    navMenuUL = document.querySelector(".nav-links-menu ul")
    menu = document.querySelector(".menu-btn"),
    close = document.querySelector(".close-btn"),
    menuTag = document.querySelectorAll(".menu-tag"),
    navLinksBottom = document.querySelector(".nav-links-menu-bottom"),
    cHeaderOne = document.querySelector(".ch-1"),
    cHeaderTwo = document.querySelector(".ch-2"),
    scaleImg = document.querySelector(".scale-img"),
    scaleTxt = document.querySelector(".scale-txt"),
    speedTitle = document.querySelector(".speed-title"),
    speedTag = document.querySelector(".speed-tag"),
    powerTitle = document.querySelector(".power-title"),
    powerTag = document.querySelector(".power-tag"),
    carousel = document.querySelector(".carousel"),
    slides = document.querySelector(".slide"),
    formula = document.querySelector(".formula-slide"),
    formulaContainer = document.querySelector(".formula"),
    modal = document.querySelector(".modal-template"),
    modalImgImg = document.querySelector(".modal-img-img"),
    footerTitle = document.querySelector(".footer-title")
    ;


    window.onload = function() {
        header.classList.add("header-show");
    }

// manipultate opacity on scroll
    let getOpac = (scroll) => {
        let opac = (1 * scroll) * 0.01;
        return opac;
    }

    window.addEventListener("scroll", (e) => {
        // determine elements height from windows top * works for "scroll to"
        header.style.backgroundColor = `rgba(0,0,0, ${getOpac(this.scrollY)})`;
        
        let headerBottom = header.getBoundingClientRect().height;

        let target = this.pageYOffset / this.innerHeight * headerBottom;

        if (headerBottom <= target ) {
            header.style.transform = "translateY(-200rem)";
            header.style.transition = "transform 5s ease";
        }  else {
            header.style.transform = "translateY(0rem)";
            header.style.transition = "transform 650ms ease";
        }
    })

    menu.addEventListener("click", (e) => {
        window.scroll({
            top: 0,
            behavior: "smooth"
        })
        setTimeout(() => {
        document.body.style.overflow = "hidden";
        navMenu.style.animation = "d-menu 650ms forwards";
        navMenuUL.style.animation = "t-menu 650ms forwards";
        if (!navMenu.classList.contains("active")) {
            menu.classList.add("hide");
            menu.classList.remove("show");
            close.classList.add("reveal");
            close.classList.remove("close");
            close.classList.add("show");
            navMenu.classList.add("active");
        }
        menuTag.forEach(tag => {
            tag.style.animation = "m-tag 650ms 250ms forwards";
            tag.style.transform = "rotateX(90deg)";
        })
    }, 500);
    })

    close.addEventListener("click", (e) => {
        setTimeout(() => {
            document.body.style.overflow = "scroll";
        }, 1000)
    
        navMenu.style.animation = "unset";
        navMenuUL.style.animation = "unset";
        if (navMenu.classList.contains("active")) {
            navMenu.style.perspective = "110px";
            menu.classList.remove("hide");
            menu.classList.add("show");
            menu.classList.add("reveal");
            close.classList.remove("reveal");
            close.classList.add("close");
            close.classList.remove("show");
            navMenuUL.style.animation = "c-menu 1050ms forwards";
        
            // navLinksBottom.style.transform = "rotateX(125deg)";

            menuTag.forEach(tag => {
                tag.style.animation = "rm-tag 650ms ease";
                // tag.style.transform = "rotateX(90deg)";
                // tag.style.transition = "transform 650ms 1s ease";
            })
            setTimeout(() => {
                navMenu.classList.remove("active");
            }, 1000)
        }
    })



    window.addEventListener("scroll", (e) => {
        // move div from left to right or right to left
        // fixed values => css code => left: -30; left: 6;
        // put values inside scroll listener


        if (window.innerHeight <= 420) {
            cHeaderOne.style.left = "4rem";
            cHeaderTwo.style.left = "4rem";

            for (let i = 0; i < 2; ++i) { 
                switch (i) {
                    case 0: 
                        cHeaderOne.style.transition = "left 350ms ease";
                        break;
                    case 1: 
                        cHeaderTwo.style.transition = "left 350ms ease";
                        break;
                    default:
                        break;
                }
            }
        } else {
            
        document.querySelector(".scale-wrapper").style.position = "sticky";
        document.querySelector(".scale-wrapper").style.top = "0rem";
        let _x1_350 = -30; 
        let _x2_350 = 20;

        let [ x1, x2 ] =  [ cHeaderOne , cHeaderTwo] ;


        let y = window.pageYOffset;

        let height = window.innerHeight;

        let o = (y / height);

        _x1_350 += o * 30 * .8;
        _x2_350 += o * -20;
        
        x1.style.left = `${_x1_350}rem`;
        x2.style.left = `${_x2_350}rem`;

        }
    })


    window.addEventListener("scroll", (e) => {
        let height = this.innerHeight;
        let target = scaleImg;
        let targetTop = (scaleImg.getBoundingClientRect().top);

        if (window.innerHeight <= 420) {
            scaleImg.parentElement.style.position = "relative";
            scaleImg.parentElement.parentElement.parentElement.style.minHeight= "15rem";

            scaleImg.style.transform = "scale(1)";
            scaleTxt.style.height = "10rem";
        } else {

        // scale img on scroll
        let y = this.pageYOffset;
        
        if (targetTop < height ){
            // scaling logic
            y = y / 3000;
            target.style.transform = `scale(${y})`;
            scaleTxt.classList.add("scale-txt-start");
        } else {
            target.style.transform = `scale(0)`;
            target.style.transition = '350ms';
            scaleTxt.classList.remove("scale-txt-start");
        }
    }

        // when window's height is greater than elements' offset top
        // reset elements value

        // log (target.getBoundingClientRect().top);
        if (target.getBoundingClientRect().top <= 70) {
            target.style.transform = "scale(1)";
        }
    
    })


    window.addEventListener("scroll", (e) => {
        let speedTop = speedTitle.getBoundingClientRect().top,
            height = window.innerHeight;

            let speedList = [speedTitle, speedTag];

        if ((speedTop + 290) < height) {

            document.body.classList.add("body-color");
            header.style.background = "transparent";
            header.style.transition = "250ms ease";
            for (let i = 0; i < speedList.length; ++i) 
                speedList[i].classList.add("opac");
        } else {
            document.body.classList.remove("body-color")
            for (let i = 0; i < speedList.length; ++i)
                speedList[i].classList.remove("opac");
        }
    })

    window.addEventListener("scroll", (e) => {
        let powerTop = powerTitle.getBoundingClientRect().top,
            height = window.innerHeight;

            let powerList = [powerTitle, powerTag]
        // if ((powerTop + 500)< height) {
        if (powerTop < height) {
            document.body.classList.add("body-color-1");
            header.style.backgroundColor = "transparent";
            header.style.transition = "none";
            powerList.forEach(power => power.classList.add("opac"));

            header.style.visibility = "visible";

        } else {
            document.body.classList.remove("body-color-1");

            powerList.forEach(power => power.classList.remove("opac"));
        }
    })


    window.addEventListener("scroll", (e) => {
        let carouselTop = carousel.getBoundingClientRect().top,
            height = window.innerHeight;

        if (carouselTop < height) {
            header.style.visibility = "hidden";
            document.body.classList.add("body-color-2");

            document.body.classList.remove("body-color-1");

        } else {
            document.body.classList.remove("body-color-2");

        }
    })


    let slideChildren = Array.from(slides.children);

    slideChildren.forEach(slide => {
        const nodeDuplicate = slide.cloneNode(true);
        nodeDuplicate.setAttribute("aria-hidden", true);

        slides.appendChild(nodeDuplicate);
    });

    let formulaChildren = Array.from(formula.children);

    formulaChildren.forEach(form => {
        const cloneForm = form.cloneNode(true);
        cloneForm.setAttribute("aria-hidden", true);
        formula.appendChild(cloneForm);
    })

    window.addEventListener("scroll", (e) => {
        let modalTop = modal.getBoundingClientRect().top, h = window.innerHeight,
        modalImg = modal.children[0]
        ;

        if (modalTop < h) {
            document.body.classList.add("body-color-3");
            document.body.classList.remove("body-color-2");

            modalImg.classList.add("modal-load");
            modalImgImg.classList.add("modal-img-load");
        } else {
            document.body.classList.remove("body-color-3");
            modalImg.classList.remove("modal-load");
            modalImgImg.classList.remove("modal-img-load");
        }
    })

    window.addEventListener("scroll", (e) => {
        // scaling image on scroll 
        let footerTemp = footerTitle.getBoundingClientRect().top, height = window.innerHeight;
        let c = footerTitle.parentElement.parentElement.getBoundingClientRect().top;

        
        if (footerTemp < height) {
            footerTitle.classList.add("footer-reveal");
        } else {
            footerTitle.classList.remove("footer-reveal");
        }
    })

    window.addEventListener("scroll", (e) => {
        let formulaBottom = formulaContainer.getBoundingClientRect().bottom;
        if ((formulaBottom + 200) < this.innerHeight) {
            formulaContainer.classList.add("formula-hide");
            formulaContainer.classList.remove("formula-show");
        } else {
            formulaContainer.classList.remove("formula-hide");
            formulaContainer.classList.add("formula-show");
        }
    })

    