/*==================== MENU SHOW Y HIDDEN ====================*/
const navMenu = document.getElementById('nav-menu'),
    navToggle = document.getElementById('nav-toggle'),
    navClose = document.getElementById('nav-close');

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show_menu');
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if (navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show_menu');
    })
}

/*==================== REMOVE MENU MOBILE ====================*/
const navLink = document.querySelectorAll('.nav_link');
function linkAction() {
    const navMenu = document.getElementById('nav-menu')
    //when we click on each nav_link wee remove the show-menu class
    navMenu.classList.remove('show_menu');
}
navLink.forEach(n => n.addEventListener('click', linkAction))


/*==================== ACCORDION SKILLS ====================*/
const skillsContent = document.getElementsByClassName('skills_content'),
    skillsHeader = document.querySelectorAll('.skills_header')

function toggoleSkills() {
    let itemClass = this.parentNode.className
    for (i = 0; i < skillsContent.length; i++) {

        skillsContent[i].className = 'skills_content skills_close'
    }

    if (itemClass === 'skills_content skills_close') {
        this.parentNode.className = 'skills_content skills_open'
    }
}



skillsHeader.forEach((el) => {
    el.addEventListener('click', toggoleSkills)
})
/*==================== QUALIFICATION TABS ====================*/
const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[data-content]')
tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        const target = document.querySelector(tab.dataset.target)

        tabContents.forEach(tabContent => {
            tabContent.classList.remove('qualifictaion_active')

        })
        target.classList.add('qualifictaion_active')

        tabs.forEach(tab => {
            tab.classList.remove('qualifictaion_active')
        })
        tab.classList.add('qualifictaion_active')
    })
})

/*==================== SERVICES MODAL ====================*/
const modalViews = document.querySelectorAll('.services_modal'),
    modalBtns = document.querySelectorAll('.services_button'),
    modalCloses = document.querySelectorAll('.service_modal-close')


function modal(modalClick) {
    modalViews[modalClick].classList.add('active_modal')

}
modalBtns.forEach((modalBtn, i) => {
    modalBtn.addEventListener('click', () => {
        modal(i)
    })
})

modalCloses.forEach((modalClose) => {
    modalClose.addEventListener('click', () => {
        modalViews.forEach((modalView) => {
            modalView.classList.remove('active_modal')
        })
    })
})
/*==================== PORTFOLIO SWIPER  ====================*/
let swiperPortfolio = new Swiper(".portfolio_container", {
    cssMode: true,
    loop: true,
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== TESTIMONIAL ====================*/
let swiperTestimonial = new Swiper(".testimonial_container", {
    loop: true,
    grabCursor: true,
    spaceBetween: 48,
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        dynamicBullets: true,
    },
    breakPoints: {
        568: {
            slidesPreview: 2,
        }
    },
    mousewheel: true,
    keyboard: true,
});

/*==================== SCROLL SECTIONS ACTIVE LINK ====================*/
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.add('active_link')
        } else {
            document.querySelector('.nav_menu a[href*=' + sectionId + ']').classList.remove('active_link')
        }

    })
}
window.addEventListener('scroll', scrollActive)
/*==================== CHANGE BACKGROUND HEADER ====================*/
function scrollHeader() {
    const nav = document.getElementById('header')
    //when the scroll is greater than 200 viewport height, add scroll header tag
    if (this.scrollY >= 80) {
        nav.classList.add('scroll_header');
    } else {
        nav.classList.remove('scroll_header');
    }

}
window.addEventListener('scroll', scrollHeader)

/*==================== SHOW SCROLL UP ====================*/
function ScrollUp() {
    const scrollUp = document.getElementById('scroll-up')
    //when the scroll is greater than 200 viewport height, add scroll header tag
    if (this.scrollY >= 560) {
        scrollUp.classList.add('show_scroll');
    } else {
        scrollUp.classList.remove('show_scroll');
    }

}
window.addEventListener('scroll', ScrollUp)

/*==================== DARK LIGHT THEME ====================*/
const themeButton = document.getElementById('theme-button'),
    darkTheme = 'dark_theme',
    iconTheme = 'uil-sun'

//previously Selected topic if (if user Selected)
const selectedTheme = localStorage.getItem('selected_theme'),
    selectedIcon = localStorage.getItem('selected_icon')

//we obtain the current theme that the interface has by validating the edark-theme class.
const getCurrentTheme = () => document.body.classList.contains(darkTheme) ? 'dark' : 'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme) ? 'uil-moon' : 'uil-sun'

//we validate if the user previously chose a topic 
if (selectedTheme) {
    //if the validation is fullfilled, we ask what the issue was to know if we activate or deactivate dark theme 
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove'](iconTheme)
}
//activate/ deactivate the theme manually with the button
themeButton.addEventListener('click', () => {
    //add or remove the dark/ icon theme
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)

    //we save the theme and the current icon that the user chose
    localStorage.setItem('selected_theme', getCurrentTheme())
    localStorage.setItem('selected_icon', getCurrentIcon())
})